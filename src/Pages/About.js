import React,{useState} from 'react'
import "./About.css"
import { Button, TextField,InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import add from "../assets/Add.png"
import arrowUpdown from "../assets/ArrowsDownUp.png"
import filter from "../assets/FunnelSimple.png"
import search from "../assets/Search.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from "../assets/Rectangle.png"
import FemaleProf from "../assets/Female08.png"
import Calender from "../assets/CalendarBlank.png"
import Pagination from "@mui/material/Pagination";
const CustomTableCell = styled(TableCell)(({ theme }) => ({
  padding:"8px 12px",
   borderBottom: "1px solid #1C1C1C33" ,
   color:"#1C1C1C66",fontFamily:"inter",
   fontSize:"12px"
}));

const CustomTableCellBody = styled(TableCell)(({ theme }) => ({
 padding:"8px 12px",
  borderBottom: "1px solid #1C1C1C33" ,
  color:"#1C1C1C",fontFamily:"inter",
  fontSize:"12px"
}));
const StyledFavButton = styled(Button)(({ theme }) => ({
  color: '#1C1C1C66', 
  minWidth:"auto",
  borderRadius: '8px', 
  transition: 'background-color 0.3s ease',
  
}));

const StyledTextFieldSearch = styled(TextField)(({ theme }) => ({
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

const OrderListData= [
  {OrderId:"#CM9801" ,User:"Natali Craig" , Project:"Landing Page", Address:"Meadow Lane Oakland",Date:"Just now",Status:"In Progress"},
  {OrderId:"#CM9802" ,User:"Kate Morrison" , Project:"CRM Admin pages", Address:"Larry San Francisco",Date:"A minute ago",Status:"Complete"},
  {OrderId:"#CM9803" ,User:"Drew Cano" , Project:"Client Project", Address:"Bagwell Avenue Ocala",Date:"1 hour ago",Status:"Pending"},
  {OrderId:"#CM9804" ,User:"Orlando Diggs" , Project:"Admin Dashboard", Address:"Washburn Baton Rouge",Date:"yesterday",Status:"Approved"},
  {OrderId:"#CM9805" ,User:"Andii Lane" , Project:"App Landing Page", Address:"Nest Lane Olivette",Date:"Feb 2,2024",Status:"Rejeceted"},
  {OrderId:"#CM9806" ,User:"Natali Craig" , Project:"Landing Page", Address:"Meadow Lane Oakland",Date:"Just now",Status:"In Progress"},
  {OrderId:"#CM9807" ,User:"Kate Morrison" , Project:"CRM Admin pages", Address:"Larry San Francisco",Date:"A minute ago",Status:"Complete"},
  {OrderId:"#CM9808" ,User:"Drew Cano" , Project:"Client Project", Address:"Bagwell Avenue Ocala",Date:"1 hour ago",Status:"Pending"},
  {OrderId:"#CM9809" ,User:"Orlando Diggs" , Project:"Admin Dashboard", Address:"Washburn Baton Rouge",Date:"yesterday",Status:"Approved"},
  {OrderId:"#CM9810" ,User:"Andii Lane" , Project:"App Landing Page", Address:"Nest Lane Olivette",Date:"Feb 2,2024",Status:"Rejeceted"},
  {OrderId:"#CM9908" ,User:"Natali Craig" , Project:"Landing Page", Address:"Meadow Lane Oakland",Date:"Just now",Status:"In Progress"},
  {OrderId:"#CM9917" ,User:"Kate Morrison" , Project:"CRM Admin pages", Address:"Larry San Francisco",Date:"A minute ago",Status:"Complete"},

]

function getStatusColor(status) {
  switch (status) {
    case 'InProgress':
      return '#8A8CD9';
    case 'Complete':
      return '#4AA785';
    case 'Pending':
      return '#59A8D4';
    case 'Approved':
      return '#FFC555';
    case 'Rejected':
      return '#1C1C1C66';
    default:
      return '#000000'; 
  }
}



function About() {
  const itemsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = OrderListData.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="containerabout">
       <p className="heading">Order List</p>

       <div className="filterbar">
          <div classname="btns">
            <StyledFavButton>
              <img src ={add} width="20px" alt="add"/>
            </StyledFavButton>
            <StyledFavButton>
            <img src ={filter} width="20px" alt="filter"/>
            </StyledFavButton>
            <StyledFavButton>
            <img src ={arrowUpdown} width="20px" alt="arrowUpdown"/>
            </StyledFavButton>
          </div>
          <StyledTextFieldSearch
          type="search"
          id="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={search} style={{ width: "16px" }} alt="search icon" />
              </InputAdornment>
            ),

          
          }}
          placeholder="Search"
          variant="outlined"
        />
       </div>

       <TableContainer style={{width:"100%"}} >
      <Table  aria-label="caption table">
        <TableHead>
          <TableRow>
          <CustomTableCell ><img  style={{width:"16px"}} src={Checkbox} alt='checkbox'/></CustomTableCell>
            <CustomTableCell >Order ID</CustomTableCell>
            <CustomTableCell align="left">User</CustomTableCell>
            <CustomTableCell  align="left">Project</CustomTableCell>
            <CustomTableCell  align="left">Address</CustomTableCell>
            <CustomTableCell  align="left">Date</CustomTableCell>
            <CustomTableCell  align="left">Status</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {currentData.map((row) => (
            <TableRow key={row.Name}>
              <CustomTableCellBody   align="left">
              <img  style={{width:"16px"}} src={Checkbox} alt='checkbox'/>
              </CustomTableCellBody>
              <CustomTableCellBody  
               component="th" scope="row">
                {row.OrderId}
              </CustomTableCellBody>
              <CustomTableCellBody   align="left">
                <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                <img style={{maxWidth:"24px"}}src={FemaleProf} alt="pic"/>
                {row.User}</div></CustomTableCellBody>
              <CustomTableCellBody   align="left">{row.Project}</CustomTableCellBody>
              <CustomTableCellBody   align="left">{row.Address}</CustomTableCellBody>
              <CustomTableCellBody   align="left">
              <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                <img style={{maxWidth:"24px"}}src={Calender} alt="pic"/>
                {row.Date}</div>
                </CustomTableCellBody>
              <CustomTableCellBody   align="left" style={{ color: getStatusColor(row.Status) }}>
              <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
               <div style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:getStatusColor(row.Status)}}></div>
                {row.Status}</div>
                </CustomTableCellBody>
              <CustomTableCellBody   align="left">
              </CustomTableCellBody>
            </TableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>

          <div className="pagination-container">
          <Pagination
        count={Math.ceil(OrderListData.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        size="large"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#000000", 
          },
          "& .Mui-selected": {
            backgroundColor: "#1C1C1C0D", 
            color: "#000000", // 
          },
        }}
      />
        </div>
    </div>
  )
}

export default About