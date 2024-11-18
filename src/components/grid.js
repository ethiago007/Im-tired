import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../css/card.css';
import star from '../img/icon-star.svg';
import pos from '../img/illustration-thank-you.svg';

const BasicGrid22 = () => {
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

  return (
    <div className='feed'>
      {submitted ? (
        <div className='feed'>
          <Card className='card'>
            <CardContent>
              <div className='reciept'>
                <img src={pos} alt="thank you" />
              </div>
              <Typography className='second' variant="h6" component="div">
                <span className='mssg'>You selected {rating} out of 5</span>
              </Typography>
              <br />
              <Typography className='thanks' variant="h4" component="div">
                Thank You!
              </Typography>
              <Typography sx={{ mt: 1, color: '#5e6671', textAlign: 'center' }}>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className='card'>
          <CardContent>
            <div className='starImg'>
              <img src={star} alt="star" />
            </div>
            <Typography className='first' variant="h5" component="div">
              How did we do?
            </Typography>
            <Typography sx={{ mt: 1, color: '#5e6671' }}>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </Typography>
            <Box sx={{ flexGrow: 1, mt: 2 }}> 
              <Grid2   container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 20, md: 20 }}> 
                {[1, 2, 3, 4, 5].map((num) => ( 
                  <Grid2  key={num} size={{ xs: 2, sm: 4, md: 4 }}> 
                   <button className= {` button ${rating === num ? 'active' : ''}`} key={num} onClick={() => {handleButtonClick(num);}}  >{num}</button> 
                  </Grid2> 
                ))} 
              </Grid2> 
            </Box>
            <br />
            <Button
              className='feedSubmit'
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BasicGrid22;