import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

export default function Navbar() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
           Your BMI is 25.5.You are looking Healthy
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iusto aliquid dolore inventore. Dolorem totam recusandae asperiores reiciendis ad odit accusamus quae fugiat fugit esse, dolores ducimus quas molestiae mollitia voluptates labore a aliquam eum voluptatibus ullam id culpa. Repellat corrupti eum odio nihil sapiente exercitationem, molestiae nemo aliquam rerum!
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};