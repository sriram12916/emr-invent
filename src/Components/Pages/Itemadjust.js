import React, { useState } from 'react'
import Box from "@mui/material/Box"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Pages.css";
import TextField from '@mui/material/TextField';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';



const Itemadjust = () => {

    const [visible, setVisible] = useState(false)


    const navigate = useNavigate()

    const handlePage = () => {
        navigate('/stockadjust2')
       
    }
    return (
        <>
            <div className='container-fluid'>

                <Box sx={{ display: 'flex', justifyContent: "flex-end", mb: 2, me: 4 }}>
                    <button className='btns-adjustStock' onClick={handlePage}>
                        Adjust Stock
                    </button>
                </Box>
                <div className='table-content'>
                    <TableContainer component={Paper} className='TableContainer'>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead className='tableHead'>
                                <TableRow className='tableRow'>
                                    <TableCell align="right">S.No</TableCell>
                                    <TableCell align="right" >Adjustment No</TableCell>
                                    <TableCell align="right" > Reference No</TableCell>
                                    <TableCell align="right" >Date</TableCell>
                                    <TableCell align="right" >Speciality-Branch</TableCell>
                                    <TableCell align="right" >Credit/Debit details</TableCell>
                                    <TableCell align="right" >Remark</TableCell>
                                    <TableCell align="right" >Status</TableCell>
                                    <TableCell align="right" >Item Name/Options</TableCell>


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
                                    <TableCell align="right">{30}</TableCell>

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                {/* <Dialog
                    style={{ width: "50%" }}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    draggable={false}
                    resizable={false}
                    modal={true}
                >
                    <div className='card'>
                        <p className='p'>Stock Adjustment</p>
                        <div className='d-flex mt-3'>
                            <label className=' mx-1 g-2'>Adjustment Date</label>
                            <TextField
                          className='inputs'
                                id="outlined-size-small"
                                size="small"
                            />
                        </div>
                        <div className='d-flex mt-2'>
                            <label className=' mx-1 g-2'>Adjustment No</label>
                            <TextField
                            className='inputs'
                                id="outlined-size-small"
                                size="small"
                            />
                        </div>
                        <div className='d-flex mt-2'>
                            <label className=' mx-1 g-2'>Office-Branch</label>
                            <FormControl sx={{ m: 1, width: 250 }}>
                            <Select
                               className='inputs'
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"

                            >
                                <option></option>
                            </Select>
                            </FormControl>
                        </div>

                        <div className='d-flex mt-2'>
                            <label className=' mx-1 g-2'>Speciality</label>
                            <FormControl sx={{ m: 1, width: 300 }}>
                            <Select
                            className='inputs'
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"

                            >
                                <option></option>
                            </Select>
                            </FormControl>
                        </div>
                        <div className='d-flex mt-2'>
                            <label className=' mx-2 g-2'>Debit/Credit</label>
                            <TextField
                             className='inputs'
                                id="outlined-size-small"
                                size="small"
                            />
                        
                      
                            < label className=''>Purchase Accounts</label>
                            <FormControl sx={{ m: 1, width: 280 }}>
                            <Select
                                className='inputs'
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                            >
                                <option></option>
                            </Select>
                            </FormControl>
                            </div>
                      
                        <div className='d-flex mt-2'>
                            <label className=' mx-1 g-2'>Refernce NO</label>
                            <TextField
                             className='inputs'
                                id="outlined-size-small"
                                size="small"
                            />
                        </div>
                        <div className='d-flex mt-2'>
                            <label className=' mx-1 g-2'>Remarks</label>
                            <textarea className='inputs mx-4' />
                        </div>


                    </div>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", mb: 2, me: 4,mt:2, gap:2 }}>
                    <button style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handlePage}>
                        cancel
                    </button>
                    <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }} >
                      Save
                    </button>
                </Box>
                </Dialog> */}
            </div>

        </>
    )
}

export default Itemadjust