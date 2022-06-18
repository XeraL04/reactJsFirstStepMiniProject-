import React from "react";

import './imeiList.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from "@mui/material";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';



const CollectionList = ({imei, query, setQuery}) => {

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

  return ( 
    <div className="imei-list">
      <div className="imei-page-container">
      <div className="text">
        <h2>Looking for your imei number ! </h2>
      </div>
        <div className="text-area">
          <TextField
           id="filled-search"
             label="Search ..."
             type="search"
             variant="filled"
             size="small" 
             onChange={(e)=>
              setQuery(e.target.value)
            }
             sx={{
                marginBottom:1,
                marginLeft:60,
                width:423,
            }}
            />
          </div>

          <div className="imei-table">
      <TableContainer component={Paper}sx={{ maxWidth:900,borderRadius:2,}} >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontWeight:'bold',backgroundColor:'#96bf31',}}>Imei Number</TableCell>
                <TableCell sx={{ fontWeight:'bold',backgroundColor:'#96bf31'}}>Imei Count</TableCell>
              </TableRow>
            </TableHead> 

            <TableBody>
                {imei.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage).filter((item)=>{
                  if(query === ""){
                    return item;
                  }else if(
                    item._id?.toLowerCase().includes(query.toLowerCase()) 
                    ){
                      return item;
                    }
                }).map((item,index) =>
                  <TableRow
                    key={index}
                    sx={{ 
                     '&:last-child td, &:last-child th': { 
                       border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> {item._id} </TableCell>
                    <TableCell >{item.count}</TableCell>
                                          
                  </TableRow>
                )}
              </TableBody>
          </Table>

          <TablePagination
      rowsPerPageOptions={[5,10,15]}
      component="div"
      count={imei.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />   

        </TableContainer>
        </div>
        </div>
    </div>
  );
}

export default CollectionList;