import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PageFooter() {
    return (
        <div className="secondary-footer">
            <div className="container">
                <div className="row">
                    <div className='col text-center'>
                        <p><a href="https://github.com/" className="project-link">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>© Copyright Lisa Harrison & Kurt Reynolds 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageFooter;