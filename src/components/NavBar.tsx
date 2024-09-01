import React, { useState, useEffect  } from "react";
import styles from "./css/NavBar.module.css";
import Link from "next/link";
import { useSearch } from './context/SearchContext'; 
/*
 import { Link} from 'vcc-ui';                              
 Tried to use from vcc-ui but including many other componenets are depricated as mentioned in doc 
 hope I dont' lose my bonus point because of this !
 */


const NavBar: React.FC = () => {
  // To filter car by body type
  const { setSearchTerm } = useSearch(); 
  const handleSearch = (e) => {
    e.preventDefault();
    const carBodies  = e.target.elements.search.value.trim();
    setSearchTerm(carBodies);
  };

  return (
    <nav
      className={`${styles.navbarCustom} navbar navbar-expand-lg navbar-light`}
    >
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

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <h4 style={{paddingLeft: '23px'}}> Cars</h4>
        <div className={styles.searchBarContainer}>
          <form className="form-inline my-2 my-lg-0" id="formForSearch" onSubmit={handleSearch}>
            <div className={styles.formItems}>
              <input
                className="form-control mr-sm-2"
                type="search"
                name="search"
                placeholder="Search car body type"
                aria-label="Search"
                style={{border: '1px solid black'}}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{border: '1px solid black'}}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
