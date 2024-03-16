import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <div className="container-fluid p-0">
            <nav
                class="navbar navbar-expand-lg bg-body-tertiary"
                data-bs-theme="dark">
                <div class="container-fluid">
                    <Link
                        class="navbar-brand"
                        to="/home">
                        Home
                    </Link>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    class="nav-link"
                                    to="/movies">
                                    Movies
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class="nav-link"
                                    to="/aboutMe">
                                    About Me
                                </Link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <a
                                href="https://github.com/dmmarques/Streamify-FE"
                                target="_blank"
                                class="m-2">
                                <button
                                    type="button"
                                    class="btn btn-success">
                                    <i class="bi bi-github"></i>
                                </button>
                            </a>
                            <i class="bi bi-c-circle"></i>Copyright 2024
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;
