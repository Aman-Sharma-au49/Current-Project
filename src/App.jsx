import { useState } from 'react';
import LogIn from './LogIn';
import Cardinfo from './Card';

import Navbar from './navbar';
import './App.css';
import CardInfo from './Card';


function App() {

  return (
    <>
    <CardInfo/>
      <div>
        <header>
          <h1>Nutrition</h1>
        </header>
        <LogIn />
        
      </div>
   
      {/* <footer>
        <p><marquee><h3><b>In this Page you can check BMI,BFP & IBW</b></h3></marquee> </p>
      </footer> */}
    </>
  );
}

export default App;