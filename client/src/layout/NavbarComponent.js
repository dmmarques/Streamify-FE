import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
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
                                to="/aboutMe">
                                About Me
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                class="nav-link"
                                to="/movies">
                                Movies
                            </Link>
                        </li>
                        <li class="nav-item">
                            <button
                                type="button"
                                class="btn btn-success">
                                <i class="bi bi-github"></i>
                                <a href=''
                            </button>
                        </li>
                    </ul>
                    <span class="navbar-text">Copyright 2024</span>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
