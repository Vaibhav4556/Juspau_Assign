import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import ByeWind from "../assets/ByeWind.png"
import Dot from "../assets/Dot.png"
import chartPieSlice from "../assets/ChartPieSlice.png"
import rightarrow from "../assets/rightarrow.png"
import shoppingBag from "../assets/ShoppingBagOpen.png"
import folderNotch from "../assets/FolderNotch.png"
import BookOpen from "../assets/BookOpen.png"
import IdentificatnBatch from "../assets/IdentificationBadge.png"
import IdentificatnCard from "../assets/IdentificationCard.png"
import userThree from "../assets/userThree.png"
import Notebook from "../assets/Notebook.png"
import ChatsDrop from "../assets/ChatsTeardrop.png"
import Downarrow from "../assets/DownArrow.png"
import DefaultDark from "../assets/DefaultDark.png"
import eCommerceDark from "../assets/eCommerceDark.png"
import FolderDark from "../assets/FolderDark.png"
import CourseDark from "../assets/CourseDark.png"
import ProfileDark from "../assets/ProfileDark.png"
import AccountDark from "../assets/AccountDark.png"
import CorporateDark from "../assets/CorporateDark.png"
import BlogDark from "../assets/BlogDark.png"
import SocialDark from "../assets/SocialDark.png"
import RightArrowDark from "../assets/RightArrowDark.png"
import dotDark from "../assets/dotDark.png"
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../MyContext";
import  { useContext } from "react";




const Sidebar = () => {
  const { dark } = useContext(MyContext);
  const [showUser, setshowUser] = useState(true)

  const handleShowUser=()=>{
    setshowUser(!showUser)
  }

  const navigate = useNavigate(); 
  const goToHome = () => {
    navigate('/'); 
  };

  const userList = ['Overview','Projects','Campaigns','Documents','Followers']

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: dark?"#FFFFFF" :"#1C1C1C",
    fontSize: '14px', 
    fontWeight:"400",
    fontFamily:"inter",
    '&:hover': {
      color: theme.palette.primary.main, 
    },
  }));

  const StyledFavButton = styled(Button)(({ theme }) => ({
    color:dark?"#FFFFFF66": '#1C1C1C66', 
    padding: '4px 8px',
    textTransform: 'none',
    fontFamily:"inter",
    borderRadius: '8px', 
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#1C1C1C66', 
      color:"#ffffff"
    },
  }));

  const StyledRecButton = styled(Button)(({ theme }) => ({
    color: dark?"#FFFFFF33":'#1C1C1C33', 
    padding: '4px 8px',
    textTransform: 'none',
    fontFamily:"inter",
    borderRadius: '8px', 
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#1C1C1C66', 
      color:"#ffffff"
    },
  }));

  const arrowShow = () => (dark ? RightArrowDark : rightarrow);

  return (
    <div className="sidebar"  >
     <div className='profile'>
       <img style={{width:"24px"}} src={ByeWind} alt="profile"/>
       <StyledTypography >ByeWind</StyledTypography>
     </div>
     <div className='category'>
      <div style={{display:'flex',gap:"8px"}}>
        <StyledFavButton>Favourites</StyledFavButton>
       <StyledRecButton>Recently</StyledRecButton>
      </div>
      <div className='profile'>
        <img style={{width:"16px"}} src={dark?dotDark:Dot} alt="dot"/>
        <StyledTypography >Overview</StyledTypography>
         
      </div>
      <div className='profile'>
        <img style={{width:"16px"}} src={dark?dotDark:Dot} alt="dot"/>
        <StyledTypography >Projects</StyledTypography>
         
      </div>
        
        <div className='dashdiv'>
          <p className='dashboard'style={{color:dark?"#FFFFFF66":"#1C1C1C66"}}>Dashboards</p>
          <div className='profile' onClick={goToHome}>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={dark ? DefaultDark:chartPieSlice} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Default</StyledTypography>
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={dark ? eCommerceDark:shoppingBag} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >eCommerce</StyledTypography>
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={ dark ? FolderDark:folderNotch} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Projects</StyledTypography>
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={ dark ? CourseDark:BookOpen} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Online Courses</StyledTypography>
          </div>
        
        </div>



        <div className='dashdiv'>
          <p className='dashboard'style={{color:dark?"#FFFFFF66":"#1C1C1C66"}}>Pages</p>
          <div>
          <div className='profile' onClick={handleShowUser}>
            <img src={showUser?Downarrow:rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={ dark ? ProfileDark:IdentificatnBatch} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >User Profile</StyledTypography>
           
          </div>
          {showUser?
          <div>
              {userList.map((item,index)=>(
                <div style={{paddingLeft:"60px"}}>
                   <StyledTypography style={{marginBottom:"8px"}}  key={index}>{item}</StyledTypography>
                </div>
               
              ))}
            </div>:null}
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={dark ?AccountDark:IdentificatnCard} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Account</StyledTypography>
            
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={dark?CorporateDark:userThree} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Corporate</StyledTypography>
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={dark?BlogDark:Notebook} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Blog</StyledTypography>
          </div>

          <div className='profile'>
            <img src={arrowShow()} alt="arrow" style={{width:"20px"}}/>
            <img src={dark?SocialDark:ChatsDrop} alt="arrow" style={{width:"20px"}}/>
            <StyledTypography >Social</StyledTypography>
          </div>
        
        </div>

     </div>
    </div> 
  );
}

export default Sidebar;
