import React, { Component } from 'react';
import vid from '../../images/caching3.mp4';


const SectionFive = () => {
    return (
      <div id='section-five'>
        <div id="section-five-img">  
          {/* <img id='filler-img' src={feathers}/> */}
          <video loop autoPlay muted className="featureVid">
            <source
              src={vid}
              type="video/mp4"
            />
          </video>
        </div>
        <div id="section-five-text">
          <div>
          <h1>Use the StashQL CLI</h1>
            <h3>The StashQL package comes with a built-in command-line interface that you can use to check your query logs</h3>
          </div>
        </div>
      </div>
    );
};

export default SectionFive;