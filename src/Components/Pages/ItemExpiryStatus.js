import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import "./ItemExpiry.css"


const ItemExpiryStatus = () => {
  return (
   <>
    <div className='table-Expiry'>
        <div className='d-flex ' style={{justifyContent:"space-between"}}>
        <p className='p-label'>DRUGS LIST WITH BATCH</p>
 
   <button className='btns-adjustStock btn btn-sm'> Adjust Stock</button>
 

        </div>


        
                    <TableContainer component={Paper} className='TableContainer'>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead className='tableHead'>
                                <TableRow className='tableRow'>
                                    <TableCell align="right">S.No</TableCell>
                                    <TableCell align="right" >Item Name</TableCell>
                                    <TableCell align="right" > Barcode </TableCell>
                                    <TableCell align="right" >Batch No</TableCell>
                                    <TableCell align="right" >Qty</TableCell>
                                    <TableCell align="right" >ExpiryDate</TableCell>
                                    <TableCell align="right" >To Expire in Days</TableCell>
                                    <TableCell align="right" >Status</TableCell>
                                  


                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align="right">{1}</TableCell>
                                    <TableCell align="right">{2646546}</TableCell>
                                    <TableCell align="right">{"Gel"}</TableCell>
                                    <TableCell align="right">{'Anbu'}</TableCell>
                                    <TableCell align="right">{247.00}</TableCell>
                                    <TableCell align="right">{22}</TableCell>
                                    <TableCell align="right">{12}</TableCell>
                                    <TableCell align="right">{100}</TableCell>
                                    




                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">{1}</TableCell>
                                    <TableCell align="right">{2646546}</TableCell>
                                    <TableCell align="right">{"Gel"}</TableCell>
                                    <TableCell align="right">{247.00}</TableCell>
                                    <TableCell align="right">{22}</TableCell>
                                    <TableCell align="right">{12}</TableCell>
                                    <TableCell align="right">{100}</TableCell>
                                    <TableCell align="right">{150}</TableCell>
                               

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

   </>
  )
}

export default ItemExpiryStatus