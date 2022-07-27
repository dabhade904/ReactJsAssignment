import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Contact=()=> {
  const [name,setName]=useState("");
  const [nameErr,setNameErr]=useState({});

  const onSubmit=(e)=>{
    e.preventDefaulty();
    const isValid= formValidation();
  }

  const formValidation=()=>{
    const nameErr={};
    let  isValid=true;

    if(name.trim().length<5){
      nameErr.nameShort="Fitst name is too short";
      isValid=false;
    }
    if(name.trim().length>10){
      nameErr.nameShort="Fitst name is too long";
      isValid=false;
    }

    setNameErr(nameErr);
  }
  return (
    <form onSubmit={onSubmit}>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2">Get In Touch</Typography>
      <p>
        Stop wasting time and money designing and managing a website that <br />
        doesn’t get results. Happiness guaranteed!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          style={{ width: "350px" }}
        />
        <TextField
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
          style={{ marginLeft: "30px", width: "350px", height: " 20px" }}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          style={{ width: "350px" }}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          style={{ marginLeft: "30px", width: "350px", height: " 20px" }}
        />
      </div>

      <div style={{ marginTop: "25px" }}>
        <TextField
          id="outlined-basic"
          label="Your message"
          variant="outlined"
          style={{ width: "730px", height: " 20px" }}
        />
      </div>
      <Button variant="contained" href="#contained-buttons" type="submit" style={{marginTop:"70px",borderRadius:"11px"}}>SEND MESSAGE</Button>
    </div>
    </form>
  );
}

export default Contact;
