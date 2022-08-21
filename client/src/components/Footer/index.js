import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function Footer() {
    return (

      <footer className="footer mt-5">
        
        
        <div className="content has-text-centered">
        <div class="icon-bar">
                  <a href="https://www.linkedin.com/in/zekun-chen-07a289178/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/40/000000/external-linkedin-social-media-justicon-flat-justicon.png"
                      alt="linkedin-icon"></img></a>

                  <a href="https://github.com/XyzExia" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/45/000000/github--v3.png"
                      alt="github-icon"></img></a>


                  <a href="thezechaos@gmail.com" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/45/000000/external-email-notifications-justicon-flat-justicon.png"
                      alt="email-icon"></img></a>

                </div>
                <br></br>
          <p>
            <strong>Listfy</strong> - a React site by{" "}
            <a href="https://github.com/XyzExia" target="_blank" rel="noreferrer">
              Zekun Chen
            </a>
          </p>

        </div>

      </footer>
    );
  }


export default Footer;