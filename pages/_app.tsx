import  Cars  from "../src/components/Cars";
import NavBar from "../src/components/NavBar";
import "../public/css/styles.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function HomePage() {
  return (
    <React.StrictMode>
        <NavBar />
        <Cars />
    </React.StrictMode>
  );
}

export default HomePage;
