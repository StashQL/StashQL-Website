import React, { Component } from 'react';
import filler from '../../images/shepherd.png';
import electricity from '../../images/electricity.png';
import coding from '../../images/coding.png';
import vid from '../../images/caching2.mp4';
// import vid from '../../images/caching-2.mp4';


const SectionFour = () => {
    return (
      <div id='section-four'>
        <div id="section-four-text">
          <div>
            <h1>Update Cached Data</h1>
            <h3>StashQL has built-in methods to handle mutations that occur in your database, so you won't have to worry about stale data.</h3>
          </div>
        </div>
        <div id="section-four-img">  
          {/* <img id='filler-img' src={coding}/> */}
          <video loop autoPlay muted className="featureVid">
            <source
              src={vid}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
};

export default SectionFour;