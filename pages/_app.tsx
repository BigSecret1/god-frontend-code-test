import { HelloWorld } from "../src/components/HelloWorld";
import  Cars  from "../src/components/Cars";
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
        <Cars />
    </React.StrictMode>
  );
}

export default HomePage;
