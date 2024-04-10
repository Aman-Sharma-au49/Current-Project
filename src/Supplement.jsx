import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Supplement.css';

export default function Supplement({bmiResult}) {
  return (
    <Card sx={{maxWidth:"27vw"
    }}  className='Aman' style={{background:"#e5d1d4",padding:"30px",lineHeight:"2"}}>
    
    
      <CardActionArea>
        <CardMedia/>


<div className='Aman'>
        {bmiResult >=25 && (
  <div>
<h2 className='A'>Supplement for Weight loss</h2>
      <ul>
        <li>Isolate Protein</li>
       <li>Fat Burner</li>
       <li>CLA</li>
       <li>L-carnitine</li>
       <li>BCAAs</li>
       <li>Pre Workout</li>
       <li>Testosterone boosters(For male)</li>
       <li>Fish Oil</li></ul>
       
  </div>
)}

{bmiResult >= 18 && bmiResult < 25 && (
  <div>
     <h2 className='A'>Supplement for Healthy Person</h2>
       <ul> <li>Whey Protein</li>
       <li>BCAAs</li>
       <li>Fish Oil</li>
       <li>Vitamins</li>
       <li>Peanut Butter</li></ul></div>
)}

{bmiResult  < 18 && (
  <div>
           <h2 className='A'>Supplement for Weight gaining</h2>
        <ul> 
      <li>Concentrate Protein/Gainer</li>
        <li>Creatine</li>
       <li>BCAAs</li>
       <li>Pre Workout</li>
       <li>Testosterone boosters(For male)</li>
       <li>Fish Oil</li>
       <li>Vitamins</li>
       <li>Peanut Butter</li></ul>
  </div>
)}
    </div>
   
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}