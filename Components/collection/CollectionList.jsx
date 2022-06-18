import React from "react";
import './CollectionList.css'
import { Link } from "react-router-dom";
// import {useParams, useNavigate} from'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


const CollectionList = ({collection, query,setQuery}) => {
 
  // let {nameCollection} = useParams()
  // let navigate = useNavigate()
  return ( 
    <div className="collection">
      <div className="collection-list">
        <h2>Welcome To The Collection List Page</h2>
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
              }}/>
          
          </div>
            
          <div className="table-of-collections">
            
            <TableContainer 
              component={Paper}
              sx={{ 
              maxWidth:900,
              borderRadius:2,
              }} >
              
              <Table 
                sx={{ minWidth: 650 }} 
                size="small" 
                aria-label="a dense table">
                  
                  <TableHead>

                    <TableRow >
                    
                      <TableCell 
                      sx={{ 
                      fontWeight:'bold',
                      backgroundColor:'#96bf31',
                      }}>Collection Name
                      </TableCell>
                    
                      <TableCell 
                      sx={{ 
                      fontWeight:'bold',
                      backgroundColor:'#96bf31'
                      }}>Document Count
                      </TableCell>
                      
                    
                      </TableRow>
                  
                  </TableHead> 
                  
                  <TableBody>
                    {collection.filter((item)=>{
                      if(query===""){
                        return item;
                      }else if(
                        item.name.toLowerCase().includes(query.toLowerCase())
                      ){
                        return item;
                      }
                    }).map((item,index) =>
                      
                      <TableRow
                        key={index}
                        sx={{ 
                        '&:last-child td, &:last-child th': { 
                          border: 0 } }}>
                        
                        <TableCell component="th" scope="row"> 
                          <Link to={item.name}>{item.name}</Link>
                           
                        </TableCell>
                        
                        <TableCell >{item.count}</TableCell>
                        {/* <TableCell > */}
                          {/* <Link to={"/collection/"+item}> show documents </Link> */}
                          {/* <button onClick={() =>
                            navigate(`/collection/${nameCollection}`)}>
                                documents 
                            </button> */}
                          {/* </TableCell> */}
                      
                      </TableRow>
                    )}
                  
                  </TableBody>
                
                </Table>
              
              </TableContainer> 
            
          </div>
      </div>
    </div>
);
}
 
export default CollectionList;