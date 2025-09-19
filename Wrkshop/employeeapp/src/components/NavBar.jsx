import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h1>Employee</h1> &nbsp;&nbsp;&nbsp;
                <Link to="/Add">
                <Button variant='contained'>Add</Button> 
                </Link>&nbsp;&nbsp;
                <Link to="/View">
                <Button variant='contained'>View</Button> 
                </Link>&nbsp;&nbsp;
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar