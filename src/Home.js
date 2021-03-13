import React, { Component } from "react";
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import Particles from 'react-particles-js';


 
class Home extends Component {
  render() {
    return (
      
      <div>
      
      <div class = "container" style={{backgroundColor:"#709fb0"}}>
    
      <h1><Typewriter string="Welcome to Rashad Amin's Site!" delay={80} /></h1>
      <Particles />
      </div>
        
        
        
        
      </div>
    );
  }
}
 
export default Home;