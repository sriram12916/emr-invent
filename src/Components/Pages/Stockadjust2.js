import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Box from "@mui/material/Box"
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import "./Stockadjustment.css"
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import "./Pages.css";
import { IoSearch } from "react-icons/io5";
import { Dialog } from 'primereact/dialog';

const Stockadjust2 = () => {
  const [visible, setVisible] = useState(false)

  const handleApprove = () => {
    setVisible(!visible)

  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex'>
          <p className='p1'>Stock Adjustment</p>
          <div className='col-lg-4'>
            <div className='content'>

              <div className='d-flex mt-3'>
                <label className=' labelm mx-1 g-2'>Adjustment Date</label>
                <TextField
                  className='inputsm'
                  id="outlined-size-small"
                  size="small"
                />
              </div>
              <div className='d-flex mt-3'>
                <label className='labelm mx-1 g-2'>Adjustment No</label>
                <TextField
                  className='inputsm1'
                  id="outlined-size-small"
                  size="small"
                />
              </div>
              <div className='d-flex mt-2'>
                <label className='labelm mx-1 g-2'>Office-Branch</label>
                <FormControl sx={{ m: 1, width: 250 }}>
                  <Select
                    className='inputsm2'
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"

                  >
                    <option></option>
                  </Select>
                  {/* <p className='p-demo'>demo clinic</p> */}
                </FormControl>
              </div>

              <div className='d-flex mt-2'>
                <label className='labelm mx-1 g-2'>Speciality</label>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <Select
                    className='inputsm3'
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"

                  >
                    <option></option>
                  </Select>
                  {/* <p>Main Store</p> */}
                </FormControl>
              </div>

              <label className='labeld-c mx-2 g-2'>Debit/Credit</label>
              <TextField
                className='inputsm4'
                id="outlined-size-small"
                size="small"
              />


              < label className='labelm mx-3'>Purchase Accounts</label>
              <FormControl sx={{ m: 1, width: 200 }}>
                <Select
                  className='inputsm5'
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                >
                  <option></option>
                </Select>
              </FormControl>


              <div className='d-flex mt-2'>
                <label className='labelm mx-1 g-2'>Refernce NO</label>
                <TextField
                  className='inputsm6'
                  id="outlined-size-small"
                  size="small"
                />
              </div>
              <div className='d-flex mt-2'>
                <label className='labelm mx-1 g-2'>Remarks</label>

                <textarea className='form-contrl inputsm7 mx-4 form-contrl' />
              </div>
              <div className='d-flex mt-2'>
                <label className='labelm mx-1 g-2'>Created by</label>

                <TextField

                  className='inputsm8'
                  id="outlined-size-small"
                  size="small"
                />
              </div>
              <div className='d-flex mt-2'>
                <label className='labelm mx-1 g-2'>Created Date</label>
                <TextField
                  type='date'
                  className='inputsm9'
                  id="outlined-size-small"
                  size="small"
                />

              </div>


            </div>
          </div>


          <div className='col '>
            <div className='card'>
              <div className='card-details'>
                <p>Attach Documents</p>
                <div className='card-details-content'>
                  <div>
                    <label className='labelm mx-2 g-2'>File Name</label>
                    <TextField
                      className='inputsm4'
                      id="outlined-size-small"
                      size="small"
                    />
                  </div>

                  <button className='btn btn-primary btn-sm' style={{ margin: "0px" }}>
                    upload
                  </button>
                </div>
              </div>

            </div>
            <p>Adjusted item List</p>
            <IoSearch className='search-icon' />
            <TextField

              placeholder='search Item'
              className='search-bar'
              id="outlined-size-small"
              size="small"
            />

            <div className='table-card-container'>
              <TableContainer component={Paper} className='TableContainer'>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                  <TableHead className='tableHead'>
                    <TableRow className='tableRow'>
                      <TableCell align="right">S.No</TableCell>
                      <TableCell align="right" >Item Code</TableCell>
                      <TableCell align="right" > Item Name</TableCell>
                      <TableCell align="right" >Item Price</TableCell>
                      <TableCell align="right" >Adjustment Type</TableCell>
                      <TableCell align="right" >Qty</TableCell>
                      <TableCell align="right" > Expiry Date</TableCell>
                      <TableCell align="right" >Amount</TableCell>
                      <TableCell align="right" >Options</TableCell>



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
                      <TableCell align="right" >{247.00}</TableCell>
                      <TableCell align="right">{22}</TableCell>
                      <TableCell align="right">{12}</TableCell>
                      <TableCell align="right">{100}</TableCell>
                      <TableCell align="right">{150}</TableCell>






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
                      <TableCell align="right">{150}</TableCell>


                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className='btn-groups'>
              <div>
                <button className='btn btn-sm btn-primary' onClick={handleApprove} > Forward to Approve</button>
              </div>
              <button className='btn btn-sm btn-success'>Approve</button>
              <div></div>
            </div>
          </div>


        </div>
        <Dialog
      className='dialog2-coloms'
          visible={visible}
         
          onHide={() => setVisible(false)}
          draggable={false}
          resizable={false}
          modal={true}
        >

     
            <p className='p2'>Forward for Approval</p>
            <div className='row d-flex '>
              <div className='col-lg-6 approve-col1' >
                <p>Select Office/Department</p>
                <div className='card  w-50'>
                  <button className='b1'>Branch1</button>
                  <button className='b1'>Branch2</button>

                </div>
              </div>
              <div className='col-lg-6 approve-col2'>
              <p>Select Seats under Office/Department</p>
                <div className='card w-50'>
<button className='a1'>Accountant1</button>
<button className='a1'>Accountant2</button>

                </div>
              </div>
             
            </div>
            <label>Remarks</label>
            <textarea className='form-control remarks-input' ></textarea>
    
            <div className='btn-groups2'>
              <div>
                <button className='btn btn-sm btn-primary' onClick={handleApprove} style={{width:"100px"}}>Send</button>
              </div>
              <button className='btn btn-sm btn-danger'  onClick={handleApprove} style={{width:"100px"}}>Close</button>
              <div></div>
            </div>
        </Dialog>
      </div>

    </>
  )
}

export default Stockadjust2