import React, { useState } from 'react'; 
import Box from '@mui/material/Box'; 
import Paper from '@mui/material/Paper'; 
import Grid from '@mui/material/Grid2'; 
import { Button } from '@material-ui/core'; 
import star from '../img/icon-star.svg'; 
import pos from '../img/illustration-thank-you.svg'; 
import Card from "@material-ui/core/Card"; 
import CardContent from "@material-ui/core/CardContent"; 
import Typography from "@material-ui/core/Typography"; 
import CardActions from "@material-ui/core/CardActions"; 
import '../css/card.css';

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

  return ( 
    <div className='feed'> 
      {/* If submitted, only show the second page */}
      {submitted ? (
        <div className='feed'>
          <Card className='card'>
            <CardContent>
              <div className='reciept'><img src={pos} alt="thank you" /></div>
              <Typography className='second' variant="h6" component="h2">
                <span className='mssg'>You selected {rating} out of 5</span>   
              </Typography>
              <br />
              <Typography className='thanks' variant="h4" component="h2"> Thank You! </Typography>
              <Typography style={{ marginTop: 8, color: "#5e6671", textAlign: 'center' }}>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        // If not submitted, show the first page content
        <Card className='card'>
          <CardContent>
            <div className='starImg'><img src={star} alt="star" /></div>
            <Typography className='first' variant="h5" component="h2">
              How did we do? 
            </Typography> 
            <Typography style={{ marginTop: 8, color: "#5e6671" }}> 
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! 
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 20, md: 20 }}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <Grid key={num} size={{ xs: 2, sm: 4, md: 4 }}>
                      <button className= {` button ${rating === num ? 'active' : ''}`} key={num} onClick={() => {handleButtonClick(num);}}  >{num}</button>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <br />
            <Button className='feedSubmit' onClick={handleSubmit}>Submit</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BasicGrid;