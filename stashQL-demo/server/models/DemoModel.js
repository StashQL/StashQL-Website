const { Pool } = require("pg");

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI =
  "postgres://buebvlsf:5HLTLKylKBdu5uR_2vhDuiZ6tajkkJC7@batyr.db.elephantsql.com/buebvlsf";

const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
