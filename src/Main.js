import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


	    
	

 
class Main extends Component {
  render() {
    
    
    return (
      
      
        
      <HashRouter>
        <div>
           
           <div class="navbar" id="navbar">
			<NavLink exact to="/"><b>Rashad Amin</b></NavLink>
			<NavLink to="/Portfolio">Portfolio</NavLink>
			<NavLink to="/Resume">Resume</NavLink>
			<NavLink to="/Contact">Contact</NavLink>
            <a href="javascript:void(0);" class="icon" onclick="responsiveNav()">
    		<i class="fa fa-bars"></i></a>
          </div>
           
           
          
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/Contact" component={Contact}/>
          </div>
          
          
 
          
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;