

import React, { useState } from 'react';
import BMI from './BMI';
import BFP from './BFP';
import IBW from './IBW';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Option() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card sx={{ minWidth: 975 }} style={{backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-blur-empty-green-gradient-studio-well-use-as-background-website-template-frame-business-report_1258-52616.jpg" )'}}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>Check</h2>
        </Typography>
        <button id="bmi" style={{ background: "#c59292" }} onClick={() => handleOptionClick('BMI')}>Body Mass Index</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ background: "#3595ad" }} onClick={() => handleOptionClick('BFP')}>Body Fat Percentage</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ background: "#98c572" }} onClick={() => handleOptionClick('IBW')}>Ideal Body Weight</button>
      </CardContent><br /><br />

      {selectedOption === 'BMI' && <BMI />}
      {selectedOption === 'BFP' && <BFP />}
      {selectedOption === 'IBW' && <IBW />}
    </Card>
  );
}