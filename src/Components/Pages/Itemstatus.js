import React, { useState } from 'react'
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';
import "./Pages.css";
import { TextField, Box } from "@mui/material";
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



const Itemstatus = () => {

    const [showTable, setShowTable] = useState(false);
    const [visible, setVisible] = useState(false)


    const handleDisplay = () => {
        setShowTable(!showTable)
        console.log("hello")
    }
    const handleShow = () => {

        setVisible(true)

    }

    return (
        <>
            <div className='container-fluid'>

                <div className='card' >
                    <div className='row d-flex'>
                        <div className='col p-2'>
                            <form>
                                <div className='label-input '>
                                    <label className='mx-2'>Product Name</label>
                                    <input className='form-control w-50 mx-3'
                                        id=''
                                        name='Product Name'
                                    />
                                </div>


                                <div className='label-input mt-2 p-0'>
                                    <label className='mx-2'>Stock Availability</label>
                                    <select className='form-control w-50'>
                                        <option>All</option>
                                        <option>Stock Available</option>
                                        <option>No stock</option>
                                        <option> Below Recorder</option>
                                    </select>
                                </div>

                                <div className='label-input mt-2 '>
                                    <label className='mx-2'>Product Category</label>
                                    <select className='form-control w-50 me-1'>
                                        <option></option>
                                    </select>
                                </div>

                            </form>


                        </div>

                        <div className='col p-2'>
                            <div className='d-flex p-2'>
                                <div>
                                    <label className='mx-1'>Stock Unit</label>
                                    <input className='form-check-input '
                                        type='radio'
                                        name='Product Name'
                                    />
                                </div>
                                <div className='mx-2'>
                                    <label className='mx-1'>Sale Unit</label>
                                    <input className='form-check-input'
                                        type='radio'
                                        name='Product Name'
                                    />
                                </div>
                                <div className='mx-2'>
                                    <label className='mx-1'>Purchase Unit</label>
                                    <input className='form-check-input'
                                        type='radio'
                                        name='Product Name'
                                    />
                                </div>


                            </div>
                            <div className='d-flex '>
                                <label>Branch&Speciality</label>
                                <select className='form-control w-50 mx-2'>
                                    <option></option>
                                </select>
                            </div>
                            <div className='d-flex mt-2'>
                                <label className='me-4'>Supplier</label>
                                <select className='form-control w-50 mx-5'>
                                    <option></option>
                                </select>
                            </div>

                        </div>

                        <Box sx={{ display: 'flex', justifyContent: "flex-end", mb: 2, me: 4 }}>
                            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
                                Create Request
                            </button>
                        </Box>

                    </div>

                </div>
                <div className='Table-Button-Container'>
                    <Box  >
                        <button className="buttons" onClick={handleDisplay}>
                            Product Stock Status
                        </button>
                        <button className="buttons">
                            All
                        </button>
                        <button className="buttons">
                            Category All </button>
                    </Box>
                    {showTable && (
                        <div className='card'>

                            <p className='p'>Product Stock Transaction Details</p>

                            <div className='card-body d-flex'>
                                <div className='col'>

                                    <label className=' m-2 g-2'>Item Name</label>
                                    <TextField

                                        id="outlined-size-small"
                                        size="small"
                                    />


                                    <br></br>
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
                                                <TableCell align="right" onClick={handleShow}>{247.00}</TableCell>
                                                <TableCell align="right">{22}</TableCell>
                                                <TableCell align="right">{12}</TableCell>
                                                <TableCell align="right">{100}</TableCell>
                                                <TableCell align="right">{150}</TableCell>
                                                <TableCell align="right">{30}</TableCell>



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
                                                <TableCell align="right">{30}</TableCell>

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
                                        <div className='col-log-4'>
                                            <label className=' m-2 g-2'>Item Name</label>
                                            <TextField
                                                id="outlined-size-small"
                                                size="small"
                                            />
                                            
                                            <br></br>
                                            <label className='mx-2'>item unit</label>
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
                                        <div className='col'>

                                            <label className=''>Item Category</label>
                                            <TextField
                                                className='mx-2'
                                                id="outlined-size-small"
                                                size="small"
                                            />
                                            <label className=' m-2 g-2 '>Recorder Level</label>
                                              <TextField
                                                id="outlined-size-small"
                                                size="small"
                                            />

                                            <br></br>
                                            <div className='mt-2'>
                                                <label className='mx-3'>Total Stock</label>
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
                                                        <TableCell align="right" >Barcode#</TableCell>
                                                        <TableCell align="right" > (In Purchase Unit)</TableCell>
                                                        <TableCell align="right" >Item Price</TableCell>
                                                        <TableCell align="right" >Sale Price</TableCell>
                                                        <TableCell align="right" >Expiry Date</TableCell>
                                                        <TableCell align="right" > Status</TableCell>
                                                        <TableCell align="right" >Barcode</TableCell>


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
                                                        <TableCell align="right" onClick={handleShow}>{247.00}</TableCell>
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
                                </div>
                            </Dialog>



                        </div>
                    )}



                </div>

                <div className='TableContainer'>
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
                                    <TableCell align="right" >Item Unit</TableCell>
                                    <TableCell align="right" >Stock available (in sale unit) in Main Store</TableCell>
                                    <TableCell align="right" > Stock available (in sale unit) in Dept</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                <TableRow
                             
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align="right">{1}</TableCell>
                                    <TableCell align="right">{2646546}</TableCell>
                                    <TableCell align="right">{"Gel"}</TableCell>
                                   
                                    <TableCell align="right">{247.00}</TableCell>
                                    <TableCell align="right">{22}</TableCell>
                                    <TableCell align="right">{12}</TableCell>
                                    <TableCell align="right">{100}</TableCell>
                                    <TableCell align="right">{150}</TableCell>
                                    <TableCell align="right">{30}</TableCell>



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
                                    <TableCell align="right">{30}</TableCell>

                                </TableRow>
                          
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>






            </div>



        </>

    )
}

export default Itemstatus