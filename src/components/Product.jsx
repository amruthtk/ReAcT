import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Grid } from '@mui/material';

const Product = () => {
  
  var[pro,setpro]=useState([])
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    console.log(res.data)
      setpro(res.data)
  })
  
  return (
      
    <div>
      <Grid container spacing={10}>
      {pro.map((pro) => {
        return (
      
      <Card sx={{ maxWidth: 345 }}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pro.image} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pro.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {pro.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
        )
      })}
      </Grid>
</div>
  )
}

export default Product