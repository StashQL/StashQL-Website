import React, { Component } from 'react';

const FooterLogos = () => {
  const logoArr = [github, linkedin, npm, twitter];
  const logoNameArr = ['github', 'linkedin', 'npm', 'twitter'];
  const FooterLogoArr = [];
  for(let i = 0; i < logoArr.length; i++){
    FooterLogoArr.push(<FooterLogo key={logoNameArr[i]} image={logoArr[i]}/>)
  }
  return (
    <div id="footer-logo-box">
      {FooterLogoArr}
    </div>
  );
};

export default FooterLogos;