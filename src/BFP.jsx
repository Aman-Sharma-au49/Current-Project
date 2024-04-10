// import { useState } from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function BFP() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [waist, setWaist] = useState('');
//   const [neck, setNeck] = useState('');
//   const [gender, setGender] = useState('male'); // Default gender is male
//   const [result, setResult] = useState(null);

//   const calculateBFP = (e) => {
//     e.preventDefault();

//     // Convert values to numbers
//     const heightValue = parseFloat(height);
//     const weightValue = parseFloat(weight);
//     const waistValue = parseFloat(waist);
//     const neckValue = parseFloat(neck);

//     // Check if all values are valid numbers
//     if (isNaN(heightValue) || isNaN(weightValue) || isNaN(waistValue) || isNaN(neckValue)) {
//       setResult('Please enter valid numeric values for all fields.');
//       return;
//     }

//     // Calculate Body Fat Percentage
//     let bodyFatPercentage;
//     if (gender === 'male') {
//       bodyFatPercentage = 86.010 * Math.log10(waistValue - neckValue) - 70.041 * Math.log10(heightValue) + 36.76;
//     } else {
//       bodyFatPercentage = 163.205 * Math.log10(waistValue + neckValue - heightValue) - 97.684 * Math.log10(heightValue) - 78.387;
//     }

//     setResult(`
//     Your Body Fat Percentage is approximately 
//     ${bodyFatPercentage>0 ? bodyFatPercentage.toFixed(2)+"%":"0%"}
    
//     `);

//     const data = {
//       height: heightValue,
//       weight: weightValue,
//       waist: waistValue,
//       neck: neckValue,
//       gender: gender
//     };
    

//     // Make POST request to store BFP data
//     fetch('http://localhost:3000/bmi/bfp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('BFP data stored successfully:', data);
//       })
//       .catch(error => {
//         console.error('Error storing BFP data:', error);
//       });
//   };

//   return (
//     <>
//       <form onSubmit={calculateBFP}>
//         <h1>Body Fat Percentage</h1>
//         <label>Height (cm): </label>
//         <input type="number" placeholder="In Centimeters" value={height} onChange={(e) => setHeight(e.target.value)} required /><br /><br />
//         <label>Weight (kg): </label>
//         <input type="number" placeholder="In Kilograms" value={weight} onChange={(e) => setWeight(e.target.value)} required /><br /><br />
//         <label>Waist Size (cm): </label>
//         <input type="number" placeholder="In Cmm" value={waist} onChange={(e) => setWaist(e.target.value)} required /><br /><br />
//         <label>Neck Size (cm): </label>
//         <input type="number" placeholder="In cmm" value={neck} onChange={(e) => setNeck(e.target.value)} required /><br /><br />
//         <FormControl>
//           <FormLabel id="demo-radio-buttons-group-label" style={{ color: "Black" }}>Gender</FormLabel>
//           <RadioGroup
//             aria-labelledby="demo-radio-buttons-group-label"
//             defaultValue="male"
//             name="radio-buttons-group"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//           </RadioGroup>
//         </FormControl><br /> <br />
//         <button type="submit" style={{background:"light-grey"}}>Check</button>
//         <br /><br />
//       </form>
//       {result && <p> 
//         <center><Card sx={{ maxWidth: 345 }} style={{background:"#3595ad"}}>
//       <CardActionArea>
//         <CardMedia
          
        
//         />
//          <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
            
//              {result} 
            
//           </Typography>
//           {/* <Typography variant="body2" color="text.secondary">
           
//            <button style={{background:"cream"}}>Exercise</button><br /><br />
//            <button style={{background:"cream"}}>Required Diet</button><br /><br />
//            <button style={{background:"cream"}}>Required Supplement</button><br />
            
//           </Typography> */}
//         </CardContent> 
//       </CardActionArea>
//     </Card>
//     </center></p>}
//     </>
//   );
// }

import { useState } from 'react';
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

export default function BFP() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [gender, setGender] = useState('female'); // Default gender is male
  const [result, setResult] = useState(null);

  const calculateBFP = (e) => {
    e.preventDefault();

    // Convert values to numbers
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    const waistValue = parseFloat(waist);
    const neckValue = parseFloat(neck);

    // Check if all values are valid numbers
    if (isNaN(heightValue) || isNaN(weightValue) || isNaN(waistValue) || isNaN(neckValue)) {
      setResult('Please enter valid numeric values for all fields.');
      return;
    }

    // Calculate Body Fat Percentage
    let bodyFatPercentage;
    if (gender === 'male') {
      bodyFatPercentage = 86.010 * Math.log10(waistValue - neckValue) - 70.041 * Math.log10(heightValue) + 36.76;
    } else {
      bodyFatPercentage = 96.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
      // 163.205 * Math.log10(waistValue + neckValue - heightValue) - 97.684 * Math.log10(heightValue) - 78.387;
    }

    setResult(`
    Your Body Fat Percentage is approximately 
    ${bodyFatPercentage>0 ? bodyFatPercentage.toFixed(2)+"%":"0%"}
    
    `);

    const data = {
      height: heightValue,
      weight: weightValue,
      waist: waistValue,
      neck: neckValue,
      gender: gender
    };

    // Make POST request to store BFP data
    fetch('http://localhost:3000/bmi/bfp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('BFP data stored successfully:', data);
      })
      .catch(error => {
        console.error('Error storing BFP data:', error);
      });
  };

  return (
    <>
      <form onSubmit={calculateBFP} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Body Fat Percentage</h1>
        <label>Height (cm): </label>
        <input type="number" placeholder="In Centimeters" value={height} onChange={(e) => setHeight(e.target.value)} required style={{ width: '100%', maxWidth: '300px', padding: '10px', marginBottom: '20px' }} /><br /><br />
        <label>Weight (kg): </label>
        <input type="number" placeholder="In Kilograms" value={weight} onChange={(e) => setWeight(e.target.value)} required style={{ width: '100%', maxWidth: '300px', padding: '10px', marginBottom: '20px' }} /><br /><br />
        <label>Waist Size (cm): </label>
        <input type="number" placeholder="In Cmm" value={waist} onChange={(e) => setWaist(e.target.value)} required style={{ width: '100%', maxWidth: '300px', padding: '10px', marginBottom: '20px' }} /><br /><br />
        <label>Neck Size (cm): </label>
        <input type="number" placeholder="In cmm" value={neck} onChange={(e) => setNeck(e.target.value)} required style={{ width: '100%', maxWidth: '300px', padding: '10px', marginBottom: '20px' }} /><br /><br />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" style={{ color: "Black" }}>Gender</FormLabel>
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
        <button type="submit" style={{ background: "lightgrey", padding: '15px 30px', border: 'solid', borderRadius: '10px', cursor: 'pointer', transition: 'background 0.3s ease' }}>Check</button>
        <br /><br />
      </form>
      {result && <p>
        <center><Card sx={{ maxWidth: 345 }} style={{ background: "#3595ad" }}>
          <CardActionArea>
            <CardMedia />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {result}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </center></p>}
    </>
  );
}
