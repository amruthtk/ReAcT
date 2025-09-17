import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Sign up</h1>
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <br /><br />

        <TextField
          id="outlined-password-input"
          label="Password" type="password" autoComplete="current-password"
        />
        <br /><br />
        <Button variant="contained">Sign UP</Button>
    </div>
  )
}

export default Signup