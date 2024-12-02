import React from 'react'
import "./Home.css"
import { Card } from '@mui/material'
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
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';
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

const CustomTableCell = styled(TableCell)(({ theme }) => ({
   padding:"8px 12px",
    borderBottom: "1 px solid #1C1C1C33" ,
    color:"#1C1C1C66",fontFamily:"inter",
    fontSize:"12px"
}));

const CustomTableCellBody = styled(TableCell)(({ theme }) => ({
  padding:"8px 12px",
   borderBottom: "1 px solid #1C1C1C33" ,
   color:"#1C1C1C",fontFamily:"inter",
   fontSize:"12px"
}));
function Home() {

  const navigate = useNavigate(); 
  const goToOrderList = () => {
    navigate('/orderlist'); 
  };
  return (
    <div className="container">
      <div>
      <p className="pageheading">eCommerce</p>
      </div>
      
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="visualContainers">
        <div className="visualContainer1">
          <div className="visualContainer1a">
            <div className="cardrow1">
              <Card
                style={{
                  padding: "24px 32px",
                  backgroundColor: "#E3F5FF",
                  borderRadius: "16px",
                }}
              >
                <StyledTypography>Customers</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
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
                  backgroundColor: "#F7F9FB",
                  borderRadius: "16px",
                }}
              >
                <StyledTypography>Revenue</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
                  }}
                >
                  <StyledTypographyReading>$695</StyledTypographyReading>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StyledTypographytext>+15.03%</StyledTypographytext>
                    <img
                      style={{ width: "16px" }}
                      src={upriseArrow}
                      alt="uprisearrow"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="cardrow2" onClick={goToOrderList}>
              <Card
                style={{
                  padding: "24px 32px",
                  backgroundColor: "#F7F9FB",
                  borderRadius: "16px",
                }}
              >
                <StyledTypography >Orders</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
                  }}
                >
                  <StyledTypographyReading>1,219</StyledTypographyReading>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StyledTypographytext>-0.03%</StyledTypographytext>
                    <img
                      style={{ width: "16px" }}
                      src={arrowFall}
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
                }}
              >
                <StyledTypography>Growth</StyledTypography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
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
          <div className="visualContainer1b">
            <p
              style={{
                fontFamily: "inter",
                fontSize: "14px",
                fontWeight: 600,
                margin: "0",
              }}
            >
              Projections vs Actuals
            </p>
            <PieChart />
          </div>
        </div>
        <div className="visualContainer2">
          <div className="visualContainer2a">
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <p
                style={{
                  fontFamily: "inter",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: "0",
                }}
              >
                Revenue
              </p>
              <div style={{ color: "#1C1C1C33" }}>|</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <img width="16px" src={blackdot} alt="blackdot" />
                <p
                  style={{ fontFamily: "inter", fontSize: "14px", margin: "0" }}
                >
                  Current Week
                </p>
                <p
                  style={{
                    fontFamily: "inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "0",
                  }}
                >
                  $58,211
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <img width="16px" src={bluedot} alt="blackdot" />
                <p
                  style={{ fontFamily: "inter", fontSize: "14px", margin: "0" }}
                >
                  Previous Week
                </p>
                <p
                  style={{
                    fontFamily: "inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "0",
                  }}
                >
                  $68,768
                </p>
              </div>
            </div>

            <SmoothLineChart />
          </div>
          <div className="visualContainer2b">
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
                  marginTop: "16px",
                }}
              >
                Revenue By Location
              </p>
              <img style={{ maxWidth: "152px" }} src={map} alt="map" />
            </div>
            {worldData.map((item)=>(
            <div style={{ padding: "0 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="coloredline">{item.country}</div>
                <div className="coloredline">{item.value}</div>
              </div>
              <div className="border"></div>
            </div>))}
          </div>
        </div>
        <div className="visualContainer3">
          <div className="visualContainer3a">
          <p
              style={{
                fontFamily: "inter",
                fontSize: "14px",
                fontWeight: 600,
                margin: "0",
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
          <div className="visualContainer3b">
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",
              justifyContent:"center",maxHeight:"100%",padding:"0 24px",height:"100%"}}>
            <p
                style={{
                  fontFamily: "inter",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin:"0"
                }}
              >
                Total Sales
              </p>
             <LastPieChart/>
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