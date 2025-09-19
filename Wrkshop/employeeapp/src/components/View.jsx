import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Veiw = () => {
  var [emp,setEmp] =useState([])
  var navigate=useNavigate()
  
  axios.get("http://localhost:3004/view")
  .then ((res)=>{
    setEmp(res.data);
  })

const Delete = (id) =>{
  axios.delete(`http://localhost:3004/remove/${id}`)
  .then(() =>{
    alert("data deleted")
  })
}

const Update= (val) =>{
  navigate("/Add",{state:{val}})
}

  
  return (
    <div>
      <br /><br />
      <h1>Employee Details</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            emp.map((val)=>{
              return(
            <TableRow>
              <TableCell>{val.Name}</TableCell>
              <TableCell>{val.Age}</TableCell>
              <TableCell>{val.Dept}</TableCell>
              <TableCell>{val.Sal}</TableCell>
              <Button variant='contained' onClick={()=>Delete(val._id)}>Delete</Button> &nbsp;&nbsp;
              <Button variant='contained' onClick={()=>Update(val)}>Update</Button>
            </TableRow>
              )
            }
          )
        }
            

          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )

}

export default Veiw