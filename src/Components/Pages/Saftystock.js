import React, { useState } from 'react'
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import "./Pages.css";
import Select from '@mui/material/Select';
import { TextField, Box } from "@mui/material";
import { Dialog } from 'primereact/dialog';





const Saftystock = () => {
  const [visible, setVisible] = useState(false)

  const handleShow = () => {

    setVisible(true)

  }

  return (
    <>
      <div className='container-fluid'>

        <div className='card' >
          <div className='row card-details'>
            <div className='col-lg-5 p-2'>
              <form>
                <div className='label-input '>
                  <label className=''>Product Name</label>

                  <TextField
                    className='input-text'
                    id="outlined-size-small"
                    size="small"
                  />
                </div>


                <div className='label-input mt-2 p-0'>
                  <label className='lablestock'>Stock Availability</label>

                  <Select
                    className='inputs1'
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                  >
                    <option>All</option>
                    <option>Stock Available</option>
                    <option>No stock</option>
                    <option> Below Recorder</option>
                  </Select>

                </div>

                <div className='label-input mt-2 '>
                  <label className='labelpro'>Product Category</label>
                  <Select
                    className='inputs2'
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                  >
                  </Select>
                </div>

              </form>


            </div>

            <div className='col p-2 second-col'>
              <div className='d-flex p-2 radio-list'>
                <div>
                  <label className=''>Stock Unit</label>
                  <input className='form-check-input' type='radio' name='stock' />
                </div>
                <div className='mx-2'>
                  <label className=''>Sale Unit</label>
                  <input className='form-check-input' type='radio' name='stock' />
                </div>
                <div className='mx-2'>
                  <label className=''>Purchase Unit</label>
                  <input className='form-check-input' type='radio' name='stock' />

                </div>


              </div>
              <div className='d-flex '>
                <label className='labels'>Branch&Speciality</label>
                <Select
                  className='inputs3'
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                >
                </Select>
              </div>
              <div className='d-flex mt-2'>
                <label className='labels2'>Supplier</label>
                <Select
                  className='inputs4'
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                >
                </Select>
              </div>

            </div>

            <Box sx={{ display: 'flex', justifyContent: "flex-end", mb: 2, me: 4 }}>
              <button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
                Create Request
              </button>
            </Box>

          </div>
        </div>

        <div className='table-card-container'>
          <TableContainer component={Paper} className='TableContainer'>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead className='tableHead'>
                <TableRow className='tableRow'>
                  <TableCell align="right">S.No</TableCell>
                  <TableCell align="right" >Item Code</TableCell>
                  <TableCell align="right" >Item Name</TableCell>
                  <TableCell align="right" >Category</TableCell>
                  <TableCell align="right" >Item Price</TableCell>
                  <TableCell align="right" >Recorder Level</TableCell>
                  <TableCell align="right" > Item Unit</TableCell>
                  <TableCell align="right" >Saftystock</TableCell>
                  <TableCell align="right" >Stock Available</TableCell>



                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow

                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell align="right">{1}</TableCell>
                  <TableCell align="right" onClick={handleShow} >{"544345"}</TableCell>
                  <TableCell align="right">{"Gel"}</TableCell>
                  <TableCell align="right">{'Anbu'}</TableCell>
                  <TableCell align="right" >{247.00}</TableCell>
                  <TableCell align="right">{22}</TableCell>
                  <TableCell align="right">{12}</TableCell>
                  <TableCell align="right">{100}</TableCell>
                  <TableCell align="right">{'Available'}</TableCell>






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
                  <TableCell align="right">{'expire'}</TableCell>



                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Dialog
          visible={visible}
         
          onHide={() => setVisible(false)}
          draggable={false}
          resizable={false}
          modal={true}
        >
<div className='card'>
           <p className='p'>Stock details-Branch wise</p>
          <div className='card-body d-flex'>
         
            <div className='col'>

              <label className=' m-2 g-2'>Item Name</label>
              <TextField

                id="outlined-size-small"
                size="small"
              />


              <br></br>
              <div className='date'>


                <label className='mx-4'>Period</label>
                <TextField
                  className='mx-2'
                  type='date'
                  id="outlined-size-small"
                  size="small"
                />

                <TextField
                  className='g-1'
                  type='date'
                  id="outlined-size-small"
                  size="small"
                />
              </div>
            </div>
            <div className='col'>

              <label className=''>main store</label>
              <TextField
                className='mx-2'
                id="outlined-size-small"
                size="small"
              />

              <br></br>
              <div className='mt-2'>
                <label className='mx-2'>Speciality</label>
                <TextField

                  id="outlined-size-small"
                  size="small"
                />
              </div>

            </div>

          </div>
          <div className='table-card-container'>
            <TableContainer component={Paper} className='TableContainer'>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead className='tableHead'>
                  <TableRow className='tableRow'>
                    <TableCell align="right">S.No</TableCell>
                    <TableCell align="right" >Date</TableCell>
                    <TableCell align="right" > Type</TableCell>
                    <TableCell align="right" >Supplier</TableCell>
                    <TableCell align="right" >Barcode</TableCell>
                    <TableCell align="right" >Qty</TableCell>
                    <TableCell align="right" > Unit price</TableCell>
                    <TableCell align="right" >Stock  (in sale unit) in Main Store</TableCell>
                    <TableCell align="right" > Stock  (in sale unit) in Dept</TableCell>


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
                    <TableCell align="right" onClick={handleShow}>{100}</TableCell>
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
                    <TableCell align="right" onClick={handleShow}>{150}</TableCell>
                    <TableCell align="right">{30}</TableCell>

                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>

          </div>
          </div>
        </Dialog>
      </div>
    </>
  )
}

export default Saftystock