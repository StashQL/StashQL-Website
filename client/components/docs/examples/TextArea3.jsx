import React from 'react';

const TextArea3 = () => {
  const docCodeBlockQueryHandler = 
  `app.use('/graphql', StashQL.queryHandler, (req, res) => {
    return res.status(200).json(res.locals.data);
});`;
  return (

    <div id="doc-code-block-3">
      <div>
        <span style={{color:"rgb(252, 146, 158)"}}>app.</span>
        <span style={{color:"rgb(197, 165, 197)"}}>use</span>
        <span style={{color:"rgb(141, 200, 145)"}}>(</span>
        <span style={{color:"#fff"}}>"</span>
        <span style={{color:"#a3a3ff"}}>/graphql</span>
        <span style={{color:"#fff"}}>", </span>
        <span style={{color:"#a3a3ff"}}>StashQL</span>
        <span style={{color:"rgb(121, 182, 242)"}}>.queryHandler, </span>
        <span style={{color:"rgb(141, 200, 145)"}}>(</span>
        <span style={{color:"#fff"}}>req, res</span>
        <span style={{color:"rgb(141, 200, 145)"}}>) </span>
        <span style={{color:"rgb(141, 200, 145)"}}>=> </span>
        <span style={{color:"rgb(141, 200, 145)"}}>&#123;</span> 
        <br/>
        <span style={{color:"rgb(252, 146, 158)", marginLeft: '20px'}}>return </span> 
        <span style={{color:"#fff"}}>res.status</span> 
        <span style={{color:"rgb(141, 200, 145)"}}>(</span> 
        <span style={{color:"#fff"}}>200</span> 
        <span style={{color:"rgb(141, 200, 145)"}}>)</span> 
        <span style={{color:"rgb(121, 182, 242)"}}>.json</span> 
        <span style={{color:"rgb(141, 200, 145)"}}>(</span> 
        <span style={{color:"#fff"}}>res.locals.data</span> 
        <span style={{color:"rgb(141, 200, 145)"}}>)</span> 
        <br />
        <span style={{color:"rgb(141, 200, 145)"}}>&#125;</span> 
        <span style={{color:"#56b6c2"}}>);</span> 
      </div>
        
    </div>
  );
};
export default TextArea3;

// app.use("/api/graphql", StashQL.queryHandler, (req, res) => {
//   return res.status(200).json({data: res.locals.data, runTime: res.locals.runTime});
// });


{/* <div id="doc-code-block-2">
      <div>
      <span style={{color:"#ce70cc"}}>const </span>
        <span style={{color:"#ffc91e"}}>StashQL </span>
        <span style={{color:"#56b6c2"}}>= </span>
        <span style={{color:"#ce70cc"}}>new </span>
        <span style={{color:"#ffc91e"}}>stashql(schema, redisCache, 1000)</span>;
      </div>
        
      </div> */}


{/* <span style={{color:"#ce70cc"}}>const </span>
        <span style={{color:"#ffc91e"}}>StashQL </span>
        <span style={{color:"#56b6c2"}}>= </span>
        <span style={{color:"#ce70cc"}}>new </span>
        <span style={{color:"#ffc91e"}}>stashql(schema, redisCache, 1000)</span>; */}