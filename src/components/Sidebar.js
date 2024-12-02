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
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const StyledFavButton = styled(Button)(({ theme }) => ({
  color: '#1C1C1C66', 
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
  color: '#1C1C1C33', 
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

const Sidebar = () => {
  
  const [showUser, setshowUser] = useState(false)

  const handleShowUser=()=>{
    setshowUser(!showUser)
  }

  const navigate = useNavigate(); 
  const goToHome = () => {
    navigate('/'); 
  };

  const userList = ['Overview','Projects','Campaigns','Documents','Followers']

  return (
    <div className="sidebar"  >
     <div className='profile'>
       <img style={{width:"24px"}} src={ByeWind} alt="profile"/>
       <p className='fontprofile'>ByeWind</p>
     </div>
     <div className='category'>
      <div style={{display:'flex',gap:"8px"}}>
        <StyledFavButton>Favourites</StyledFavButton>
       <StyledRecButton>Recently</StyledRecButton>
      </div>
      <div className='profile'>
        <img style={{width:"16px"}} src={Dot} alt="dot"/>
        <p className='fontprofile'>Overview</p>
         
      </div>
      <div className='profile'>
        <img style={{width:"16px"}} src={Dot} alt="dot"/>
        <p className='fontprofile'>Projects</p>
         
      </div>
        
        <div className='dashdiv'>
          <p className='dashboard'>Dashboards</p>
          <div className='profile' onClick={goToHome}>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={chartPieSlice} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Default</p>
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={shoppingBag} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>eCommerce</p>
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={folderNotch} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Projects</p>
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={BookOpen} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Online Courses</p>
          </div>
        
        </div>



        <div className='dashdiv'>
          <p className='dashboard'>Pages</p>
          <div>
          <div className='profile' onClick={handleShowUser}>
            <img src={showUser?Downarrow:rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={IdentificatnBatch} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>User Profile</p>
           
          </div>
          {showUser?
          <div>
              {userList.map((item,index)=>(
                <div style={{paddingLeft:"60px"}}>
                   <p style={{marginBottom:"8px"}} className='fontprofile' key={index}>{item}</p>
                </div>
               
              ))}
            </div>:null}
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={IdentificatnCard} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Account</p>
            
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={userThree} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Corporate</p>
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={Notebook} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Blog</p>
          </div>

          <div className='profile'>
            <img src={rightarrow} alt="arrow" style={{width:"20px"}}/>
            <img src={ChatsDrop} alt="arrow" style={{width:"20px"}}/>
            <p className='fontprofile'>Social</p>
          </div>
        
        </div>

     </div>
    </div> 
  );
}

export default Sidebar;
