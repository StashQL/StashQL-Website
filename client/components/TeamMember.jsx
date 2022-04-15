import React, { Component } from 'react';
import linkedin from '../images/logos/Navy_LinkedIn.png'
import github from '../images/logos/Navy_GitHub.png'

const TeamMember = (props) => {
    return (
      <div id="team-member">
          {/* =========================Image========================== */}
          <div id="team-member-image-box">
              <img id="team-member-image" src={props.image}/>
          </div>

          {/* ==========================Name========================== */}
          <h3 id="team-member-name" >{props.name}</h3>

          {/* ================LinkedIn and GitHub Info================ */}
          <div id="team-member-social">
              <div id="team-member-linkedin-box">
                  <a href={props.linkedin} target="_blank">
                      <img id="team-member-linkedin-img" src={linkedin}/>
                  </a>
              </div>
              <div id="team-member-github-box">
                  <a href={props.github} target="_blank">
                      <img id="team-member-github-img" src={github}/>
                  </a>
              </div>
          </div>
          
      </div>
    );
};

export default TeamMember;
