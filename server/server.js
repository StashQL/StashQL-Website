const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");
const stashql = require("stashql");
const cors = require("cors");
const redis = require("redis");
const schema = require("./schema");
const subscribeController = require("./controllers/subscribeController");
const demoController = require("./controllers/demoController");


const app = express();

const redisCache = redis.createClient();
redisCache.connect();
redisCache.on("connect", () => {
  console.log("The Redis cache is connected");
});
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const StashQL = new stashql(schema, redisCache);

if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.join(__dirname, "../build")));

  app.use("/.well-known", express.static(path.join(__dirname, '../static/.well-known'), { dotfiles: 'allow' }))

  if (process.env.HAS_STASHQL_CERT === "true") {
     app.get("/*", (req, res) => {
       if (req.secure) {
         return res.status(200).sendFile(path.join(__dirname, "../build/index.html"));
       } else {
         return res.redirect("https://" + req.headers.host + req.url);
       }
     });
  } else {
     app.get("/*", (req, res) => {
         return res.status(200).sendFile(path.join(__dirname, "../build/index.html"));
     });
  }
}

app.post("/api/subscribe", subscribeController.subscribe, (req, res) => {
  return res.status(200).json(res.locals.data);
});

app.use("/api/graphql", StashQL.queryHandler, (req, res) => {
  return res.status(200).json({data: res.locals.data, runTime: res.locals.runTime});
});

app.use("/api/clearCache", StashQL.clearCacheHandler, (req, res) => {
  res.sendStatus(200);
});


app.use("/api/demoAuthor", demoController.removeAuthor, (req, res) => {
  res.sendStatus(200);
});

app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log('Error: ', err);
  res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
   console.log("Server listening on port: 3000");
});

if (process.env.NODE_ENV === "production" && process.env.HAS_STASHQL_CERT === "true") {
   const privateKey = fs.readFileSync(process.env.STASHQL_PRIV_KEY_PATH, 'utf8');
   const certificate = fs.readFileSync(process.env.STASHQL_CERT_PATH, 'utf8');
   const credentials = {key: privateKey, cert: certificate};

   const httpsServer = https.createServer(credentials, app);
   httpsServer.listen(8443);
} 

module.exports = app;
