import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
        <div class="container-fluid min-vh-100 justify-content-center align-items-center">
            <div class="row min-vh-100 justify-content-center align-items-center">
                <div class="col">
                    <img
                        src={require('../images/404_icon.png')}
                        style={{ width: '100%' }}></img>
                </div>
                <div class="col">
                    <h1>You've found a page that does not exist on Streamify ...</h1>
                    <h5>That can happen when you follow a link to something that has since been deleted. Or the link was incorrect to begin with.</h5>
                    <h5>
                        <ul>
                            <li>
                                <Link
                                    to="/home"
                                    className="aNotfound">
                                    Go Back to the Home Page
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="aNotfound"
                                    href="https://github.com/dmmarques/Streamify-FE"
                                    target="_blank">
                                    If you're a developer, you can try to check the code base
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/aboutMe"
                                    className="aNotfound">
                                    Feel free to reach out through any of the available contacts
                                </Link>
                            </li>
                        </ul>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default NotFoundComponent;
