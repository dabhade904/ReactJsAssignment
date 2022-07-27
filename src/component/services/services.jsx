import React from "react";
import "../services/services.css";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";

import Services from "./../../img/services.png";
function services() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around",marginLeft:"100px"}}>
      <div>
        <div>
          <h1>Crafted For</h1>
          <p>
            Stop wasting time and money designing and managing a website that{" "}
            <br />
            doesn’t get results. Happiness guaranteed!
          </p>
        </div>
        <div
          style={{
            backgroundColor: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Startup</h1>
            <p>
              Short description for the ones
              <br />
              who look for something new.
            </p>
          </div>
          <div>
            <h1>SaaS Business</h1>
            <p>
              Short description for the ones
              <br />
              who look for something new.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Agency</h1>
            <p>
              Short description for the ones
              <br />
              who look for something new.
            </p>
          </div>
          <div>
            <h1>App Landing</h1>
            <p>
              Short description for the ones
              <br />
              who look for something new.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="column">
          <img src={Services} style={{ width: "auto", height: "400px" }} />
        </div>
      </div>
    </div>
  );
}
export default services;
