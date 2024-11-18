import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button } from '@material-ui/core';
import star from '../img/icon-star.svg'
import pos from '../img/illustration-thank-you.svg'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import '../css/card.css'
const BasicGrid = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);



  const handleButtonClick = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleSubmit = () => {
    if (rating) {
      console.log('Submitted Rating:', rating);
      setSubmitted(true);
    } else {
      alert('Please select a rating before submitting');
    }
  };





  

  {
    return (
      <div className='feed'>
        <Card className='card'>
          <CardContent>
            <div className='reciept'><img src={pos}></img></div>

            <br></br>
            <Typography className='second' variant="h6" component="h2">
           <span className='mssg'>You selected {rating} out of 5</span>  
            </Typography>

            <Typography
              style={{
                marginTop: 8,
                color: "#5e6671"
              }}

            >
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </Typography>
            <br></br>
            {!submitted ? (
          <div>

            <div>
              
              <br></br>
            </div>
           
          </div>
        ) : (
          <div>
            <h2>Thank you for your feedback!</h2>
          </div>
        )}
          </CardContent>
        </Card>
        
      </div>

    );
  }
};
export default BasicGrid;