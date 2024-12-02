import React from "react";
import "./Notification.css";
import bugImg from "../assets/BugBeetle.png";
import user from "../assets/User.png";
import Brodcast from "../assets/Broadcast.png"
import FemaleProf from "../assets/Female08.png"

function Notification() {
    const userData= [

        {User:"Natali Craig" , Project:"Landing Page", },
        {User:"Kate Morrison" , Project:"CRM Admin pages"},
        {User:"Drew Cano" , Project:"Client Project"},
        {User:"Orlando Diggs" , Project:"Admin Dashboard"},
        {User:"Andii Lane" , Project:"App Landing Page" },
      ]
  return (
    <div className="notifationContainer">
        <div className="notificationBox" >
      <p className="Notheading">Notifications</p>
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
        <p className="bugtext">You have a bug that needs to resolve</p>
      </div>
      <p className="dateNotify">Just Now</p>
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
        <p className="bugtext">New user registered</p>
      </div>
      <p className="dateNotify">59 minutes ago</p>
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
        <p className="bugtext">You have a bug that needs to resolve</p>
      </div>
      <p className="dateNotify">12 hours ago</p>
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
        <p className="bugtext">Andi Lane subscribed to you</p>
      </div>
      <p className="dateNotify">Today,11.59 AM</p>
      </div>
      </div>

      <div className="ActivityBox">
      <p className="Notheading">Notifications</p>
      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <p className="bugtext">You have a bug that needs to resolve</p>
      </div>
      <p className="dateNotify">Just Now</p>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <p className="bugtext">Released a new version</p>
      </div>
      <p className="dateNotify">59 minutes ago</p>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <p className="bugtext">Submitted a bug</p>
      </div>
      <p className="dateNotify">12 hours ago</p>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <p className="bugtext">Modified A data in page X</p>
      </div>
      <p className="dateNotify">Today,11.59 AM</p>
      </div>

      <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <p className="bugtext">Deleted a page in Project X</p>
      </div>
      <p className="dateNotify">Feb 2,2024</p>
      </div>
      </div>


      <div className="contactBox">
      <p className="Notheading">Contacts</p>
      {userData.map((item,index)=>(

     
    
      <div style={{ display: "flex", gap: "8px", alignItems: "center",marginTop:"16px" }}>
        <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
        <p className="bugtext">{item.User}</p>
      </div>
     
    ))}


      </div>
    </div>
  );
}

export default Notification;
