import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <a href="mailto:beanz@gmail.com" id="contact" className="icon-link">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        </a>
                        <a href="https://github.com/" className="icon-link">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        <a href="https://www.linkedin.com/" className="icon-link">
                            <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;