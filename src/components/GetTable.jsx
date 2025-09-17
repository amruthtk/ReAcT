import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { data } from 'react-router-dom'

const GetTable = () => {
  var[user,setuser]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(res.data)
      setuser(res.data)
    
  })
  return (
    <div>
        <br /><br />
        <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>username</TableCell>
                <TableCell>City</TableCell>
                <TableCell>email</TableCell>
            </TableRow>
</TableHead>
<TableBody>
  {user.map((val) => (
            <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                <TableCell>{val.address.city}</TableCell>
                <TableCell>{val.email}</TableCell>
            </TableRow>
))}
</TableBody>
            </Table>
            </TableContainer>
    </div>
  )
}

export default GetTable