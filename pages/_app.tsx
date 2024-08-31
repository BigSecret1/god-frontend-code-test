import  Cars  from "../src/components/Cars";
import NavBar from "../src/components/NavBar";
import "../public/css/styles.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { SearchProvider } from '../src/components/context/SearchContext';

function HomePage() {
  return (
    <React.StrictMode>
      <SearchProvider>
          <NavBar />
          <Cars />
        </SearchProvider>
    </React.StrictMode>
  );
}

export default HomePage;
