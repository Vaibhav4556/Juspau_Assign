import React from "react";
import "./Topbar.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography, TextField, InputAdornment } from "@mui/material";
import sidebar from "../assets/Sidebar.png";
import star from "../assets/Star.png";
import search from "../assets/Search.png";
import textpng from "../assets/Text.png";
import { styled } from "@mui/material/styles";
import sun from "../assets/Sun.png"
import clock from "../assets/ClockCounterClockwise.png"
import bellicon from "../assets/Bell.png"
import { MyContext } from "../MyContext";
import  { useContext } from "react";
import { useLocation } from "react-router-dom";
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px", // Rounded corners for the input
    height: "28px", // Input height
    paddingRight: "8px",
    backgroundColor: "#1C1C1C0D",
    "& fieldset": {
      borderColor: "#1C1C1C0D", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#1C1C1C0D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1C1C1C0D",
    },
  },
  "& input::placeholder": {
    fontSize: "14px", // Adjust placeholder size
    opacity: 1, // Ensure placeholder is visible
    fontFamily: "inter",
    color: "#1C1C1C33",
  },
}));
const Topbar = () => {

  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const { handlePanel } = useContext(MyContext);
  return (
    <div className="topbar">
      <div className="breadcrumb">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginRight: "8px",
          }}
        >
          <img src={sidebar} style={{ width: "28px" }} alt="sidebar" />
          <img src={star} style={{ width: "28px" }} alt="star" />
        </div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" style={{fontFamily:"inter"}}>
            Dashboard
          </Link>

          <Typography sx={{ color: "text.primary" }} style={{fontFamily:"inter"}}>
            {pathnames.length>0? pathnames[0]:'Default'}</Typography>
        </Breadcrumbs>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
        <StyledTextField
          type="search"
          id="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={search} style={{ width: "16px" }} alt="search icon" />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment position="start">
                <img
                  src={textpng}
                  style={{ width: "16px" }}
                  alt="search icon"
                />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          variant="outlined"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginRight: "8px",
          }}
        >
       
          <img src={sun} style={{ width: "28px" }} alt="sun"  htmlFor="darkmode-toggle" />
          <img src={clock} style={{ width: "28px" }} alt="clock" />
          <img src={bellicon} style={{ width: "28px",cursor:"pointer" }} alt="bellicon" onClick={handlePanel}/>
          <img src={sidebar} style={{ width: "28px" }} alt="sidebar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
