import React from "react";
import styles from "./NavBar.module.css"; // Importing CSS module

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navBar">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="#">All</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> {/* ID kept here */}
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">suv</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">estate</a>
                    </li>
                </ul>

                <div className={styles.searchBarContainer}>
                    <form className="form-inline my-2 my-lg-0"  id="formForSearch">
                        <div className={styles.formItems}>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </form>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
