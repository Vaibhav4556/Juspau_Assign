import React from "react";
import "./Notification.css";
import bugImg from "../assets/BugBeetle.png";
import user from "../assets/User.png";
import Brodcast from "../assets/Broadcast.png"
import FemaleProf from "../assets/Female08.png"
import {  Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MyContext } from "../MyContext";
import  { useContext } from "react";
function Notification() {
  const { dark } = useContext(MyContext);
    const userData= [

        {User:"Natali Craig" , Project:"Landing Page", },
        {User:"Kate Morrison" , Project:"CRM Admin pages"},
        {User:"Drew Cano" , Project:"Client Project"},
        {User:"Orlando Diggs" , Project:"Admin Dashboard"},
        {User:"Andii Lane" , Project:"App Landing Page" },
      ]

      const StyledTypography = styled(Typography)(({ theme }) => ({
        color: dark? "#FFFFFF" :"#1C1C1C",
        fontSize: '14px', 
        fontWeight:"400",
        fontFamily:"inter",
        '&:hover': {
          color: theme.palette.primary.main, 
        },
      }));

      const StyledTypographytime = styled(Typography)(({ theme }) => ({
        fontSize: '14px', 
        fontWeight:"400",
        fontFamily:"inter",
    color: dark?'#FFFFFF66':'#1C1C1C66',
    paddingLeft:"32px",
        
      }));
  return (
    <div className="notifationContainer">
        <div className="notificationBox" >
      <p className="Notheading"  style={{color:dark?"#FFFFFF":"#1C1C1C"}}>Notifications</p>
      <div style={{marginTop:"28px"}}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img
          src={bugImg}
          alt="bug"
          style={{
            width: "16px",
            padding: "4px",
            backgroundColor: "#E3F5FF",
            borderRadius: "8px",
          }}
        />
        <StyledTypography >You have a bug that needs to resolve</StyledTypography>
      </div>
      <StyledTypographytime >Just Now</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img
          src={user}
          alt="bug"
          style={{
            width: "16px",
            padding: "4px",
            backgroundColor: "#E5ECF6",
            borderRadius: "8px",
          }}
        />
        <StyledTypography >New user registered</StyledTypography>
      </div>
      <StyledTypographytime >59 minutes ago</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img
          src={bugImg}
          alt="bug"
          style={{
            width: "16px",
            padding: "4px",
            backgroundColor: "#E3F5FF",
            borderRadius: "8px",
          }}
        />
        <StyledTypography >You have a bug that needs to resolve</StyledTypography>
      </div>
      <StyledTypographytime >12 hours ago</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img
          src={Brodcast}
          alt="bug"
          style={{
            width: "16px",
            padding: "4px",
            backgroundColor: "#E5ECF6",
            borderRadius: "8px",
          }}
        />
        <StyledTypography >Andi Lane subscribed to you</StyledTypography>
      </div>
      <StyledTypographytime >Today,11.59 AM</StyledTypographytime>
      </div>
      </div>

      <div className="ActivityBox">
      <p className="Notheading"  style={{color:dark?"#FFFFFF":"#1C1C1C"}}>Activities</p>
      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <StyledTypography >You have a bug that needs to resolve</StyledTypography>
      </div>
      <StyledTypographytime >Just Now</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <StyledTypography >Released a new version</StyledTypography>
      </div>
      <StyledTypographytime >59 minutes ago</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <StyledTypography >Submitted a bug</StyledTypography>
      </div>
      <StyledTypographytime >12 hours ago</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <StyledTypography >Modified A data in page X</StyledTypography>
      </div>
      <StyledTypographytime >Today,11.59 AM</StyledTypographytime>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <StyledTypography >Deleted a page in Project X</StyledTypography>
      </div>
      <StyledTypographytime >Feb 2,2024</StyledTypographytime>
      </div>
      </div>


      <div className="contactBox">
      <p className="Notheading"  style={{color:dark?"#FFFFFF":"#1C1C1C"}}>Contacts</p>
      {userData.map((item,index)=>(

     
    
      <div style={{ display: "flex", gap: "8px", alignItems: "center",marginTop:"16px" }}>
        <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <StyledTypography >{item.User}</StyledTypography>
      </div>
     
    ))}


      </div>
    </div>
  );
}

export default Notification;
