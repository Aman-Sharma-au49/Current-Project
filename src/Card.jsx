// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { IoIosContact } from "react-icons/io";
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";


// export default function CardInfo() {
//   return (
//     <Card sx={{ width: "10vw",
//       height:"130vh",
//       background:"#cbd9d9",

//     position:"fixed",
//     right:0,
//     top:0
//     }}>
//       <CardActionArea>
//         <CardMedia

//         />
//         <CardContent>
//           {/* <Typography gutterBottom variant="h5" component="div">
//             Hi Aman
//           </Typography> */}
//           <Typography variant="body2" color="text.secondary">
//             <h2>
              
//             "Turn your food into medicine and you won’t need medicines anymore."<hr/>
//             “Take charge of your diet, your health will remain charged.”<hr/>
//             “You don’t have to eat less, you just have to eat right.”
//             <hr/><br />
//              {/* <a href=""><IoIosContact/> Contact</a><br/><br /> */}
//           <a href="https://www.facebook.com/"><FaFacebook /> Facebook</a><br/><br />
//           <a href="https://www.instagram.com/"><FaInstagramSquare/> Instragram</a><br/><br/>
//            <a href="https://mail.google.com/"><SiGmail/> Gmail</a>
//            </h2>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function CardInfo() {
  return (
    <Card sx={{ width: "10vw",
      height:"130vh",
      background:"#cbd9d9",
      position:"fixed",
      right:0,
      top:0
    }}>
      <CardActionArea>
        <CardMedia/>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h2>
              "Turn your food into medicine and you won’t need medicines anymore."<hr/>
              “Take charge of your diet, your health will remain charged.”<hr/>
              “You don’t have to eat less, you just have to eat right.”
              <hr/><br />
              <a href="https://www.facebook.com/aman.vats.1614460?mibextid=ZbWKwL
" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a><br/><br />
              <a href="https://www.instagram.com/aman_vats_01?igsh=MXEzc3Z0eXgwdzlhcQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a><br/><br/>
              <a href="mailto:amanvats402@gmail.com"><SiGmail/> Gmail</a>
            </h2>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


