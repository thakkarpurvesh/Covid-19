import React from "react";
import "../App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
      <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Who built this website?</h4>
        <div style={{ fontSize: "20px" }}>
          This site is created by 4 Engineer's : Purvesh Thakkar | Smit Pandya | Vivek Malaviya | Ishani Shukla 
        </div>
        <br />
        
        
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default About;
