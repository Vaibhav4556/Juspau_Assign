import React from 'react'
import "./Home.css"
import { Card,Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import upriseArrow from "../assets/ArrowRise.png"
import arrowFall from "../assets/ArrowFall.png"
import  PieChart  from '../Charts/BarChart';
import LastPieChart from '../Charts/PieChart'
import blackdot from "../assets/blackDot.png"
import bluedot from "../assets/blueDot.png"
import SmoothLineChart from '../Charts/SmoothLineChart';
import map from "../assets/World Map.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import arrowriseDark from "../assets/ArrowRiseDark.png"
import arrowfallDark from "../assets/ArrowFallDark.png"
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../MyContext";
import  { useContext } from "react";


const StyledTypographyReading = styled(Typography)(({ theme }) => ({
  color: "#1C1C1C",
  fontSize: '24px', 
  lineHeight: "36px", 
  fontWeight:"600",
  textTransform: 'capitalize', 
  fontFamily:"inter",
  letterSpacing: '0.5px', 
  margin: '10px 0', 
  '&:hover': {
    color: theme.palette.primary.main, 
  },
}));

const StyledTypographytext = styled(Typography)(({ theme }) => ({
  color: "#1C1C1C",
  fontSize: '12px', 
  lineHeight: "18px", 
  fontWeight:"400",
  textTransform: 'capitalize', 
  fontFamily:"inter",
  letterSpacing: '0.5px', 
  margin: '10px 0', 
  '&:hover': {
    color: theme.palette.primary.main, 
  },
}));

const worldData= [{country:"New York" ,value:"72K"},{country:"San Francisco" ,value:"72K"},
  {country:"Sydney" ,value:"72K"},{country:"Singapore" ,value:"72K"}
]

const Tabledata= [{Name:"ASOS Ridley High Waist" ,Price:"$79.49" , Quantity:"82", Amount:"$6,518.18"},
  {Name:"Macro Lightweight Shirt" ,Price:"$128.50" , Quantity:"37", Amount:"$4754.50"},
  {Name:"Half Sleeve Shirt" ,Price:"$39.99" , Quantity:"64", Amount:"$2,559.36"},
  {Name:"Lightweight Jacket" ,Price:"$20" , Quantity:"184", Amount:"$3,680.00"},
  {Name:"Macro Shoes" ,Price:"$79.49" , Quantity:"64", Amount:"$1,965.81"},
]



const CustomTableCellBody = styled(TableCell)(({ theme }) => ({
  padding:"8px 12px",
   borderBottom: "1 px solid #1C1C1C33" ,
   color:"#1C1C1C",fontFamily:"inter",
   fontSize:"12px"
}));
function Home() {

  const { showNotifiationPanel,dark } = useContext(MyContext);
  const navigate = useNavigate(); 
  const goToOrderList = () => {
    navigate('/orderlist'); 
  };

  
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#1C1C1C",
  fontSize: '14px', 
  lineHeight: "20px", 
  textTransform: 'capitalize', 
  fontFamily:"inter",
  fontWeight:"600",
  letterSpacing: '0.5px', 
  margin: '10px 0', 
  '&:hover': {
    color: theme.palette.primary.main, 
  },
}));
const CustomTableCell = styled(TableCell)(({ theme }) => ({
  padding:"8px 12px",
   borderBottom: "1 px solid #1C1C1C33" ,
   fontFamily:"inter",
   fontSize:"12px",
   color:dark?"#FFFFFF":"1C1C1C66"
}));

const CustomTableCellBody = styled(TableCell)(({ theme }) => ({
  padding:"8px 12px",
   borderBottom: "1 px solid #1C1C1C33" ,
 fontFamily:"inter",
   fontSize:"12px",
     color:dark?"#FFFFFF":"#1C1C1C"
}));

const StyledTypographyPie = styled(Typography)(({ theme }) => ({
  color: dark?"#FFFFFF":'#1C1C1C',
  fontSize: '12px', 
  textTransform: 'capitalize', 
  fontFamily:"inter",
  fontWeight:"400",
  lineHeight:"18px"
}));

const PieData =[{name:"Direct",value:"300.56"},{name:"Affiliate",value:"135.18"},
  {name:"Sponsored",value:"154.02"},{name:"E-mail",value:"48.96"}
]


function getStatusColor(name) {
  switch (name) {
    case 'Direct':
      return dark?'#C6C7F8':"#000000";
    case 'Affiliate':
      return '#BAEDBD';
    case 'Sponsored':
      return '#95A4FC';
    case 'E-mail':
      return '#B1E3FF';
    default:
      return '#000000'; 
  }
}

  return (
    <div className="container">
     
      <p className="pageheading" style={{color:dark?"#FFFFFF":"#1C1C1C"}}>eCommerce</p>
      
      
      <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
      <div className="visualContainers" style={{width:"100%"}} >
        <div className='visualContainer1' >
          <div className="visualContainer1a" >
            <div className="cardrow1" style={{maxWidth:"50%",width:"calc(50% - 14px)"}}>
              <Card
                style={{
                  padding: "24px 32px",
                  backgroundColor: "#E3F5FF",
                  borderRadius: "16px",
                  width:"calc(100% - 64px)"
                }}
              >
                <StyledTypography>Customers</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                   
                  }}
                >
                  <StyledTypographyReading>3,781</StyledTypographyReading>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StyledTypographytext>+11.01%</StyledTypographytext>
                    <img
                      style={{ width: "16px" }}
                      src={upriseArrow}
                      alt="uprisearrow"
                    />
                  </div>
                </div>
              </Card>
              <Card
                style={{
                  padding: "24px 32px",
                  backgroundColor:dark?"#282828": "#F7F9FB",
                  borderRadius: "16px",
                   width:"calc(100% - 64px)"
                }}
              >
                <StyledTypography style={{color:dark?"#FFFFFF":"#1C1C1C"}}>Revenue</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                  }}
                >
                  <StyledTypographyReading style={{color:dark?"#FFFFFF":"#1C1C1C"}}>$695</StyledTypographyReading>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StyledTypographytext style={{color:dark?"#FFFFFF":"#1C1C1C"}}>+15.03%</StyledTypographytext>
                    <img
                      style={{ width: "16px"}}
                      src={ dark?arrowriseDark:upriseArrow}
                      alt="uprisearrow"
                    />
                  </div>
                </div>
              </Card>
            </div> 

             <div className="cardrow2" onClick={goToOrderList} style={{maxWidth:"50%",width:"calc(50% - 14px)"}}>
              <Card
                style={{
                  padding: "24px 32px",
                  backgroundColor:dark?"#282828": "#F7F9FB",
                  borderRadius: "16px",
                    width:"calc(100% - 64px)"
                }}
              >
                <StyledTypography style={{color:dark?"#FFFFFF":"#1C1C1C"}} >Orders</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                  }}
                >
                  <StyledTypographyReading style={{color:dark?"#FFFFFF":"#1C1C1C"}}>1,219</StyledTypographyReading>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StyledTypographytext style={{color:dark?"#FFFFFF":"#1C1C1C"}}>-0.03%</StyledTypographytext>
                    <img
                      style={{ width: "16px" }}
                      src={dark?arrowfallDark:arrowFall}
                      alt="uprisearrow"
                    />
                  </div>
                </div>
              </Card>
              <Card
                style={{
                  padding: "24px 32px",
                  backgroundColor: "#E5ECF6",
                  borderRadius: "16px",
                  width:"calc(100% - 64px)"
                }}
              >
                <StyledTypography >Growth</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between",
                     width:"100%"
                  }}
                >
                  <StyledTypographyReading>$695</StyledTypographyReading>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StyledTypographytext>+30.10%</StyledTypographytext>
                    <img
                      style={{ width: "16px" }}
                      src={upriseArrow}
                      alt="uprisearrow"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
           <div className="visualContainer1b" style={{background:dark?"#282828": "#F7F9FB",}}>
            <p
              style={{
                fontFamily: "inter",
                fontSize: "14px",
                fontWeight: 600,
                margin: "0",
                color:dark?"#FFFFFF":"#1C1C1C"
              }}
            >
              Projections vs Actuals
            </p>
            <PieChart />
          </div> 
        </div>


        <div className="visualContainer2">
          <div className="visualContainer2a" style={{background:dark?"#282828": "#F7F9FB"}}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center",flexWrap:"wrap" }}>
              <p
                style={{
                  fontFamily: "inter",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: "0",
            color:dark?"#FFFFFF":"#1C1C1C"
                }}
              >
                Revenue
              </p>
              <div style={{ color: "#1C1C1C33" }}>|</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <img width="16px" src={dark?bluedot:blackdot} alt="blackdot" />
                <p
                  style={{ fontFamily: "inter", fontSize: "14px", margin: "0",
                    color:dark?"#FFFFFF":"#1C1C1C"
                   }}
                >
                  Current Week
                </p>
                <p
                  style={{
                    fontFamily: "inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "0",
                    color:dark?"#FFFFFF":"#1C1C1C"
                  }}
                >
                  $58,211
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <img width="16px" src={bluedot} alt="blackdot" />
                <p
                  style={{ fontFamily: "inter", fontSize: "14px", margin: "0",
                    color:dark?"#FFFFFF":"#1C1C1C"
                   }}
                >
                  Previous Week
                </p>
                <p
                  style={{
                    fontFamily: "inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "0",
                    color:dark?"#FFFFFF":"#1C1C1C"
                  }}
                >
                  $68,768
                </p>
              </div>
            </div>

            <SmoothLineChart theme={dark} />
          </div>
          <div className="visualContainer2b" style={{background:dark?"#282828": "#F7F9FB"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: "inter",
                  fontSize: "14px",
                  fontWeight: 600,
                  marginTop: "0px",
                  textAlign:"start",
                  width:"100%",
                  color:dark?"#FFFFFF":"#1C1C1C"
                }}
              >
                Revenue By Location
              </p>
              <img style={{ width:"100%",maxWidth:"142px" }} src={map} alt="map" />
            </div>
            {worldData.map((item)=>(
            <div style={{ padding: "0px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="coloredline" style={{color:dark?"#FFFFFF":"#1C1C1C"}}>{item.country}</div>
                <div className="coloredline" style={{color:dark?"#FFFFFF":"#1C1C1C"}}>{item.value}</div>
              </div>
              <div className="border"></div>
            </div>))}
          </div>
        </div>
        <div className="visualContainer3" >
          <div className="visualContainer3a" style={{background:dark?"#282828": "#F7F9FB"}}>
          <p
              style={{
                fontFamily: "inter",
                fontSize: "14px",
                fontWeight: 600,
                margin: "0",
                color:dark?"#FFFFFF":"#1C1C1C"
              }}
            >
              Top Selling Products
            </p>
          <TableContainer >
      <Table  aria-label="caption table">
        <TableHead>
          <TableRow>
            <CustomTableCell >Name</CustomTableCell>
            <CustomTableCell align="right">Price</CustomTableCell>
            <CustomTableCell  align="right">Quantity</CustomTableCell>
            <CustomTableCell  align="right">Amount</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Tabledata.map((row) => (
            <TableRow key={row.Name}>
              <CustomTableCellBody   sx={{ borderBottom: "none" }}
               component="th" scope="row">
                {row.Name}
              </CustomTableCellBody>
              <CustomTableCellBody  sx={{ borderBottom: "none" }} align="right">{row.Price}</CustomTableCellBody>
              <CustomTableCellBody  sx={{ borderBottom: "none" }} align="right">{row.Quantity}</CustomTableCellBody>
              <CustomTableCellBody  sx={{ borderBottom: "none" }} align="right">{row.Amount}</CustomTableCellBody>
            </TableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>

          </div>
          <div className="visualContainer3b" style={{background:dark?"#282828": "#F7F9FB"}}>
            
            <p
                style={{
                  fontFamily: "inter",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin:"0px",
                  width:"100%",
                  textAlign:"start",
                     color:dark?"#FFFFFF":"#1C1C1C"
                }}
              >
                Total Sales
              </p>
             
             <LastPieChart theme={dark}  />
             <div style={{padding:"0px 0px 24px 0px"}}>
             {PieData.map((item,index)=>(
              
              <div key={index} style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px"}}>
              <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
               <div style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:getStatusColor(item.name)}}></div>
               
                <StyledTypographyPie>{item.name}</StyledTypographyPie>
                </div>
                <StyledTypographyPie style={{marginLeft:"8px"}}>${item.value}</StyledTypographyPie>
              </div>))}
              </div>
          </div> 
        </div>
      </div>
      <div>
        {/* <Notification/> */}
      </div>
      </div>
    </div>
  );
}

export default Home