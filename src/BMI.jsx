import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Exercise from './Exercise';
import Supplement from './Supplement';
import Diet from './Diet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './BMI.css';

export default function BMI() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const weightInKg = weight;

    if (heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid values for height and weight.');
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(2));

    // Prepare the data to send to the server
    const data = {
      height: heightInMeters,
      weight: weightInKg
    };

    // Make POST request to store BMI data
    fetch('http://localhost:3000/bmi/store', {
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
        console.log('BMI data stored successfully:', data);
      })
      .catch(error => {
        console.error('Error storing BMI data:', error);
      });
  };

  const handleButtonClick = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  useEffect(() => {
    // Reset selected option whenever height or weight changes
    setSelectedOption(null);
  }, [height, weight]);

  return (
    <BrowserRouter>
      <form>
        <h1>Body Mass Index</h1>
        <label>Height : </label>
        <input
          type="number"
          placeholder="In Centimeters"
          name="height"
          onChange={(e) => setHeight(e.target.value)}
        /><br /><br />
        <label>Weight : </label>
        <input
          type="number"
          placeholder="In Kilograms"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
        /><br /><br />
        <button type="button" onClick={calculateBMI} style={{ background: "grey", paddingLeft: "30px", paddingRight: "30px", border: "solid" }}>Check</button> <br /><br />
        {bmiResult !== null && (
          <div>
            <p><center>
              <Card sx={{ maxWidth: "30vw" }} style={{ background: "#e5d1d4", border: "solid", borderRadius: "20px" }}>
                <CardActionArea>
                  <CardMedia />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>
                        <ul>
                          <li>Your BMI is: {bmiResult}, <br /> </li>
                          <li>{bmiResult < 18 && ` Indicating that you are in underweight Range 😔.`}
                            {bmiResult >= 18 && bmiResult < 25 && `indicating that you are in Healthy Range 👏.`}
                            {bmiResult >= 25 && `indicating that you are in overweight Range 😥.`}
                          </li>
                          <li>{bmiResult < 18 && `You require ${weight * 1.5} gram Protein  for weight gain`}
                            {bmiResult >= 18 && bmiResult < 25 && `You require ${weight} gram Protein to maintain the same`}
                            {bmiResult >= 25 && `You require ${weight * 2} gram Protein for fat loss`}
                          </li>
                        </ul>
                      </h3>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div style={{ margin: "50px" }} >
                <button id="exercise" type="button" style={{ marginRight: "200px", color: "black", fontSize: "20px", border: "solid", padding: "15px", borderRadius: "10px" }} onClick={() => handleButtonClick('Exercise')}><strong>Exercise</strong></button>
                <button type="button" style={{ marginRight: "200px", color: "black", fontSize: "20px", border: "solid", padding: "15px", borderRadius: "10px" }} onClick={() => handleButtonClick('Supplement')}><strong>Supplement</strong></button>
                <button type="button" style={{ color: "black", fontSize: "20px", border: "solid", padding: "15px", borderRadius: "10px" }} onClick={() => handleButtonClick('Diet')}><strong>Diet</strong></button>
              </div>
              {selectedOption && (
                <div>
                  {/* Content based on selected option */}
                  {selectedOption === 'Exercise' && <Exercise bmiResult={bmiResult} />}
                  {selectedOption === 'Supplement' && <Supplement bmiResult={bmiResult} />}
                  {selectedOption === 'Diet' && <Diet bmiResult={bmiResult} />}
                </div>

              )}
            </center>
            </p>
          </div>
        )}
      </form>
    </BrowserRouter>
  );
}



// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Exercise from './Exercise';
// import Supplement from './Supplement';
// import Diet from './Diet';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './BMI.css';



// export default function BMI() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [bmiResult, setBmiResult] = useState(null);

  

//   const calculateBMI = () => {
//     const heightInMeters = height / 100; 
//     const weightInKg = weight;
  
//     if (heightInMeters <= 0 || weightInKg <= 0) {
//       alert('Please enter valid values for height and weight.');
//       return;
//     }
  
//     const bmi = weightInKg / (heightInMeters * heightInMeters);
//     setBmiResult(bmi.toFixed(2));
  
//     // Prepare the data to send to the server
//     const data = {
//       height: heightInMeters,
//       weight: weightInKg
//     };
   
//     // Make POST request to store BMI data
//     fetch('http://localhost:3000/bmi/store', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('BMI data stored successfully:', data);
//     })
//     .catch(error => {
//       console.error('Error storing BMI data:', error);
//     });
//   };

//   const handleButtonClick = (option) => {
//     setSelectedOption((prevOption) => (prevOption === option ? null : option));
//   }; 

   

//   return ( 
//     <BrowserRouter>
//       <form >
//         <h1>Body Mass Index</h1>
//         <label>Height : </label>
//         <input
//           type="number"
//           placeholder="In Centimeters"
//           name="height"
//           onChange={(e) => setHeight(e.target.value)}
//         /><br /><br />
//         <label>Weight : </label>
//         <input
//           type="number"
//           placeholder="In Kilograms"
//           name="weight"
//           onChange={(e) => setWeight(e.target.value)}
//         /><br /><br />
//         <button type="button" onClick={calculateBMI} style={{background:"grey",paddingLeft:"30px",paddingRight:"30px",border:"solid"}}>Check</button> <br /><br />
//         {bmiResult !== null && (
//           <div>
//             <p><center>             
//                 <Card sx={{ maxWidth:"30vw" }} style={{background:"#e5d1d4",border:"solid",borderRadius:"20px"}}>
//                   <CardActionArea>
//                     <CardMedia  />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         <h3>
//                           <ul>
//                             <li>Your BMI is:  {bmiResult} <br /> </li>
//                             <li>{bmiResult < 18 && `indicating that you are in underweight Range 😔.`}
//                                 {bmiResult >= 18 && bmiResult < 25 && `indicating that you are in Healthy Range 👏.`}
//                                 {bmiResult >= 25 && `indicating that you are in overweight Range 😥.`}
//                             </li>
//                             <li>{bmiResult < 18 && `You require ${weight * 1.5} gram Protein  for weight gain`}
//                                 {bmiResult >= 18 && bmiResult < 25 && `You require ${weight} gram Protein to maintain the same`}
//                                 {bmiResult >= 25 && `You require ${weight * 2} gram Protein for fat loss`}
//                             </li>
//                           </ul>
                          
//                         </h3>
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//                 <div style={{margin:"50px"}} >
//                   <button type="button" style={{ marginRight: "200px",color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px" }} onClick={() => handleButtonClick('Exercise')}><strong>Exercise</strong></button>
//                   <button type="button" style={{ marginRight: "200px",color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px" }} onClick={() => handleButtonClick('Supplement')}><strong>Supplement</strong></button>
//                   <button type="button" style={{color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px" }} onClick={() => handleButtonClick('Diet')}><strong>Diet</strong></button>
//                 </div>
//                 {selectedOption && (
//   <div>
//     {/* Content based on selected option */}
//     {selectedOption === 'Exercise' && <Exercise bmiResult={bmiResult}/>}
//     {selectedOption === 'Supplement' && <Supplement bmiResult={bmiResult} />}
//     {selectedOption === 'Diet' && <Diet bmiResult={bmiResult} />}
//   </div>
  
// )}
//               </center>
//             </p>
//           </div>
//         )}
//       </form>
//     </BrowserRouter>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Exercise from './Exercise';
// import Supplement from './Supplement';
// import Diet from './Diet';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './BMI.css';

// export default function BMI() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [bmiResult, setBmiResult] = useState(null);

//   const calculateBMI = () => {
//     const heightInMeters = height / 100; 
//     const weightInKg = weight;
  
//     if (heightInMeters <= 0 || weightInKg <= 0) {
//       alert('Please enter valid values for height and weight.');
//       return;
//     }
  
//     const bmi = weightInKg / (heightInMeters * heightInMeters);
//     setBmiResult(bmi.toFixed(2));
  
//     // Prepare the data to send to the server
//     const data = {
//       height: heightInMeters,
//       weight: weightInKg
//     };
   
//     // Make POST request to store BMI data
//     fetch('http://localhost:3000/bmi/store', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('BMI data stored successfully:', data);
//     })
//     .catch(error => {
//       console.error('Error storing BMI data:', error);
//     });
//   };

//   const handleButtonClick = (option) => {
//     setSelectedOption((prevOption) => (prevOption === option ? null : option));
//   };  

//   useEffect(() => {
//     setSelectedOption(null); // Clear selected option when height or weight changes
//   }, [height, weight]);

//   return ( 
//     <BrowserRouter>
//       <form >
//         <h1>Body Mass Index</h1>
//         <label>Height : </label>
//         <input
//           type="number"
//           placeholder="In Centimeters"
//           name="height"
//           onChange={(e) => setHeight(e.target.value)}
//         /><br /><br />
//         <label>Weight : </label>
//         <input
//           type="number"
//           placeholder="In Kilograms"
//           name="weight"
//           onChange={(e) => setWeight(e.target.value)}
//         /><br /><br />
//         <button type="button" onClick={calculateBMI} style={{background:"grey",paddingLeft:"30px",paddingRight:"30px",border:"solid"}}>Check</button> <br /><br />
//         {bmiResult !== null && (
//           <div>
//             <p><center>             
//                 <Card sx={{ maxWidth:"30vw" }} style={{background:"#e5d1d4",border:"solid",borderRadius:"20px"}}>
//                   <CardActionArea>
//                     <CardMedia  />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         <h3>
//                           <ul>
//                             <li>Your BMI is: {bmiResult} <br /> </li>
//                             <li>{bmiResult < 18 && `You are looking underweight.`}
//                                 {bmiResult >= 18 && bmiResult < 25 && `You are looking Healthy.`}
//                                 {bmiResult >= 25 && `You are looking overweight.`}
//                             </li>
//                             <li>{bmiResult < 18 && `You have required ${weight * 1.5} gram Protein  for weight gain`}
//                                 {bmiResult >= 18 && bmiResult < 25 && `you have required ${weight} gram Protein for maintaining the same`}
//                                 {bmiResult >= 25 && `you have required ${weight * 2} gram Protein for fat loss`}
//                             </li>
//                           </ul>
//                         </h3>
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//                 <div style={{margin:"50px"}} >
//                   <button type="button" style={{ marginRight: "200px",color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px" }} onClick={() => handleButtonClick('Exercise')}><strong>Exercise</strong></button>
//                   <button type="button" style={{ marginRight: "200px",color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px" }} onClick={() => handleButtonClick('Supplement')}><strong>Supplement</strong></button>
//                   <button type="button" style={{color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px" }} onClick={() => handleButtonClick('Diet')}><strong>Diet</strong></button>
//                 </div>
//                 {selectedOption && (
//                   <div>
//                     {/* Content based on selected option */}
//                     {selectedOption === 'Exercise' && <Exercise />}
//                     {selectedOption === 'Supplement' && <Supplement />}
//                     {selectedOption === 'Diet' && <Diet />}
//                   </div>
//                 )}
//               </center>
//             </p>
//           </div>
//         )}
//       </form>
//     </BrowserRouter>
//   );
// }
