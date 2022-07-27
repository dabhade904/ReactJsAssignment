import React from "react";
import Flower from './../../img/flower.svg'
function pricing() {
  return (
    <div style={{ backgroundColor: "#f0f5f5", textAlign: "center" }}>
      <h1>Our pricing</h1>
      <p>
        Stop wasting time and money designing and managing a website that
        <br /> doesn’t get results. Happiness guaranteed!
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            border: "2px solid red",
            width: "25.00%",
            marginLeft: "100px",
            height: "auto",
          }}
        >
          <h1>first</h1>
        </div>
        <div style={{ border: "2px solid red", width: "25.00%" }}>
          <h1>second</h1>
          <img src={Flower} alt="" />
        </div>
        <div
          style={{
            border: "2px solid red",
            width: "25.00%",
            marginRight: "90px",
          }}
        >
          <h1>third</h1>
        </div>
      </div>
    </div>
  );
}

export default pricing;
