import React from 'react';
import FooterNav from './FooterNav.jsx';
import FooterLogos from './FooterLogos.jsx';
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  render() {
    return (

      <div id="footer-box">
        <div className='footer-content'>
          <div id='footer-left-side'>
            <div id='left-parent'>
              <div className='mailIcon'>
                <a href='mailto:stashql.npm@gmail.com'><FaMailBulk style={{color: '#fff', fontSize: '35px'}}/></a>
              </div>
              <div className='inline-block-child'>
                <h2 className="contact-us-text">CONTACT US</h2>
                <p className="contact-us-paragraph">Interested in contributing or have questions? Let's chat!</p>
              </div>
            </div>

            <div className="container-fluid socials">
              <h2>CHECK US OUT ON SOCIAL MEDIA</h2>
              <div id='footer-icon-container'>
                {/* <div className='footer-icon'>
                  <FaTwitter style={{fontSize: '25px'}} />
                </div> */}
                <a className='footer-icon' href='https://twitter.com/StashQL'>
                  <FaTwitter style={{fontSize: '25px', color: '#fff'}}/>
                </a>
                <a className='footer-icon' href='https://github.com/oslabs-beta/StashQL'>
                  <FaGithub style={{fontSize: '25px', color: '#fff'}}/>
                </a>
                <a className='footer-icon' href='https://www.linkedin.com/company/stashql/'>
                  <FaLinkedinIn style={{fontSize: '25px', color: '#fff'}}/>
                </a>
              </div>
            </div>
          </div>

          <div id='footer-right-side'>
            <h2>RELEVANT RESOURCES</h2>

            <div className='right-parent'>
              <div className='right-left-child'>
                <Link className='footer-link' style={{textDecoration: "none"}} to={`/Home`}>Home</Link>
                <Link className='footer-link' style={{textDecoration: "none"}} to={`/Demo`}>Demo</Link>
                <Link className='footer-link' style={{textDecoration: "none"}} to={`/Docs`}>Documentation</Link>
              </div>
              <div className='right-right-child'>
                <a className='footer-link' href='mailto:stashql.npm@gmail.com'>Contact</a>
                <a className='footer-link' href='https://medium.com/@hakudo.0909/stashql-efficiently-update-and-cache-your-graphql-queries-bd7b4a743da2'>Featured</a>
                <a className='footer-link' href='https://www.producthunt.com/posts/stashql'>Product Hunt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;