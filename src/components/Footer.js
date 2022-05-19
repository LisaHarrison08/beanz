import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h5>BEANZ</h5>
                        <p>1445 Beanz Ave, New York City, United States <br></br>
                            <FontAwesomeIcon icon={faPhone} size="1x" /> 123-123-4567</p>
                    </div>
                    <div className="col text-center">
                        <a href="mailto:beanz@gmail.com" className="icon-link">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/" className="icon-link">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/" className="icon-link">
                            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                        </a>
                    </div>
                    <div className="col text-center">
                        <h5>OPEN HOURS</h5>
                        <p>Monday - Friday || 8:00am - 9:00pm<br></br>
                        Saturday & Sunday || 9:00am - 5:00pm</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;