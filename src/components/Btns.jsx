import { Button } from '@mui/material'
import React, { useState } from 'react'

const Btns = () => {
var[b,setb] = useState()

const Btn1 = () => {
    setb("React")
}


const Btn2 = () => {
    setb("Angular")
}

const Btn3 = () => {
    setb("Nest")
}


return (
    <div>
        <br /><br /><br />
<text>{b}</text>&nbsp; &nbsp;&nbsp; &nbsp; <br /><br /><br />
<Button variant="contained" onClick={Btn1}>React</Button>&nbsp; &nbsp;&nbsp; &nbsp;
<Button variant="contained" onClick={Btn2}>Angular</Button>&nbsp; &nbsp;&nbsp; &nbsp;
<Button variant="contained" onClick={Btn3}>Nest</Button>
 </div>
  )

}
export default Btns