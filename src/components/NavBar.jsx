import { AppBar, Button, SvgIcon, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <div> 
        <AppBar>
            <Toolbar>
                <h1>My App</h1> &nbsp; &nbsp;
                <Link to="/Login">
                <Button variant='contained'>Login</Button>
                </Link>
                 &nbsp; &nbsp;
                 <Link to="/Signup">
                <Button variant='contained'>Signup</Button>
                </Link>&nbsp; &nbsp;
                <Link to="/GetTable">
                <Button variant='contained'>Table</Button>
                </Link>&nbsp; &nbsp;
                <Link to="/StateBasics">
                <Button variant='contained'>state</Button>
                </Link>&nbsp; &nbsp;
                <Link to="/Counter">
                <Button variant='contained'>Count</Button>
                </Link>&nbsp; &nbsp;


                <Link to="/Btns">
                <Button variant='contained'>btns</Button>
                </Link>

                <Link to="/Product">
                <Button variant='contained'>Cards</Button>
                </Link>
            </Toolbar>
        </AppBar>


    </div>
  )
}

export default NavBar