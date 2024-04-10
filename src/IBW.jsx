import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function IBW() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [ibwResult, setIBWResult] = useState(null);

  const calculateIBW = () => {
    const heightInMeters = height / 100; 
    if (heightInMeters <= 0 || weight <= 0) {
      alert('Please enter valid values for height and weight.');
      return;
    }

    const ibw = gender === 'male' ? 22 * Math.pow(heightInMeters, 2) : 21 * Math.pow(heightInMeters, 2);
    setIBWResult(ibw.toFixed(2));
  };

  return (
    <>
      <form>
        <h1>Ideal Body Weight</h1>
        <label>Height : </label>
        <input
          type="number"
          placeholder="In Centimeters"
          onChange={(e) => setHeight(e.target.value)}
        /><br /><br />
        <label>Weight : </label>
        <input
          type="number"
          placeholder="In Kilograms"
          onChange={(e) => setWeight(e.target.value)}
        /><br /><br />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" style={{ color: "black" }}>Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl><br /> <br />
        <button type="button" onClick={calculateIBW} style={{background:"light-grey"}}>Check</button>
        <br /><br />
        {ibwResult !== null && (
          <div><center>
            <p>
            <Card sx={{ maxWidth: 345 }} style={{background:"#98c572"}}>
      <CardActionArea>
        <CardMedia
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Your IBW is {ibwResult}.You are looking Healthy.
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
         
           <button style={{background:"cream"}}>Exerecise</button><br /><br />
           <button style={{background:"cream"}}>Required Diet</button><br /><br />
           <button style={{background:"cream"}}>Required Supplement</button><br />
            
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
            </p>
            </center> </div>
        )}
      </form>
    </>
  );
}