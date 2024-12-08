import React from "react";
import "./Topbar.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography, TextField, InputAdornment, Button } from "@mui/material";
import sidebar from "../assets/Sidebar.png";
import star from "../assets/Star.png";
import search from "../assets/Search.png";
import textpng from "../assets/Text.png";
import { styled } from "@mui/material/styles";
import sun from "../assets/Sun.png";
import clock from "../assets/ClockCounterClockwise.png";
import BookDark from "../assets/BookDark.png";
import StarDark from "../assets/StarDark.png";
import SunDark from "../assets/SunDark.png";
import Reloaddark from "../assets/ReloadDark.png";
import BellDark from "../assets/BellDark.png";
import bellicon from "../assets/Bell.png";
import TopbarSearchDark from "../assets/TopbarSearchDark.png"
import { MyContext } from "../MyContext";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const StyledIconButton = styled(Button)(({ theme }) => ({
  color: "#1C1C1C66",
  // padding: '4px 8px',
  textTransform: "none",
  fontFamily: "inter",
  borderRadius: "8px",
  minWidth: "auto",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#1C1C1C66",
    color: "#ffffff",
  },
}));
const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const pathnames = location.pathname.split("/").filter((x) => x);

  const { handlePanel, handleDarkTheme, toggleTheme, dark } =
    useContext(MyContext);

    const StyledTextField = styled(TextField)(({ theme }) => ({
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px", // Rounded corners for the input
        height: "28px", // Input height
        paddingRight: "8px",
        backgroundColor:dark?"#FFFFFF1A":"#1C1C1C0D",
        "& fieldset": {
          borderColor:dark?"#FFFFFF1A": "#1C1C1C0D", // Default border color
        },
        "&:hover fieldset": {
          borderColor:dark?"#FFFFFF1A": "#1C1C1C0D",
        },
        "&.Mui-focused fieldset": {
          borderColor: dark?"#FFFFFF33":"#1C1C1C0D",
        },
      },
      "& input::placeholder": {
        fontSize: "14px", // Adjust placeholder size
        opacity: 1, // Ensure placeholder is visible
        fontFamily: "inter",
        color: dark?"#FFFFFF33":"#1C1C1C33",
      },
    }));
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
          <img
            src={dark ? BookDark : sidebar}
            style={{ width: "28px" }}
            alt="sidebar"
          />
          <img
            src={dark ? StarDark : star}
            style={{ width: "28px" }}
            alt="star"
          />
        </div>

        <Breadcrumbs
          aria-label="breadcrumb"
          separator={
            <span style={{ color: dark ? "#FFFFFF66" : "#1C1C1C66" }}>/</span>
          }
        >
          <Link
            underline="hover"
            color={dark ? "#FFFFFF66" : "#1C1C1C66"}
            onClick={goToHome}
            style={{
              fontFamily: "inter",
              color: dark ? "#FFFFFF66" : "#1C1C1C66",
              fontSize: "14px",
            }}
          >
            Dashboard
          </Link>

          <Typography
            sx={{ color: "text.primary" }}
            style={{
              fontFamily: "inter",
              fontSize: "14px",
              color: dark ? "#FFFFFF" : "#1C1C1C",
            }}
          >
            {pathnames.length > 0 ? pathnames[0] : "Default"}
          </Typography>
        </Breadcrumbs>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StyledTextField
          type="search"
          id="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={dark?TopbarSearchDark:search} style={{ width: "16px" }} alt="search icon" />
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
          }}
        >
          <StyledIconButton onClick={toggleTheme}>
            <img
              src={dark ? SunDark : sun}
              style={{ width: "28px", cursor: "pointer" }}
              alt="sun"
            />
          </StyledIconButton>
          <img
            src={dark ? Reloaddark : clock}
            style={{ width: "28px" }}
            alt="clock"
          />
          <StyledIconButton onClick={handlePanel}>
            <img
              src={dark ? BellDark : bellicon}
              style={{ width: "28px", cursor: "pointer" }}
              alt="bellicon"
            />
          </StyledIconButton>

          <img
            src={dark ? BookDark : sidebar}
            style={{ width: "28px" }}
            alt="sidebar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
