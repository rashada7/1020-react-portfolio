import React, { Component } from "react";
import snippets from './img/Snippets.png';
import raptorsInn from './img/RaptorsInn.png';
import madLibs from './img/MadLibs.png';
import kaozVirtus from './img/Logo.jpg';
import geoQuiz from './img/GeoQuiz.png';
import bank from './img/BankAccount.png';
import colour from './img/ColorFrame.png';
import score from './img/AndroidScoreboard.png';

const projects = [
    {
        id: 1,
        title: "Snippets",
        sub: "Social Media Site",
        desc: "A place for anyone to voice their opinions or thoughts",
        image: snippets
    },
    
    {
        id: 2,
        title: "Raptors Inn",
        sub: "Hotel Booking Site",
        desc: "Book a hotel room online",
        image: raptorsInn
    },
    
    {
        id: 3,
        title: "Mad Libs",
        sub: "Word Game",
        desc: "A classic word game to pass the time",
        image: madLibs
    },
    
    {
        id: 4,
        title: "Kaoz Virtus",
        sub: "Space Travel Company",
        desc: "Book a flight to space!",
        image: kaozVirtus
    },
    
    {
        id: 5,
        title: "Geo Quiz",
        sub: "Android Quiz App",
        desc: "Fun Quiz App for Android",
        image: geoQuiz
    },
    
    {
        id: 6,
        title: "Bank Account",
        sub: "Java Banking Program",
        desc: "Basic Java program that calculates your balance",
        image: bank
    },
    
    {
        id: 7,
        title: "Colour Frame",
        sub: "Java Gui",
        desc: "Simple colour palette java gui",
        image: colour
    },
    
    {
        id: 8,
        title: "Scorecard",
        sub: "Android App",
        desc: "Android app that allows you to keep score",
        image: score
    }
];
 
class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        
        {projects.map(function(project) {
              return(
              
              
              
              
              //<div key={project.id}>
              
              
                
                  <div class="column">
                  
                      <div class="card" >
                          <img src={project.image} class="cardImg" />
                              <div class="cardContainer">
                                  <h2>{project.title}</h2>
                                  <p class="title">{project.sub}</p>
                                  
                  
                                  <button class="button">Press</button>
                                  <br />
                                  <br />
                              </div>
                      </div>
                     
                  </div>
               
              
              
            //</div>    
            
            
            );
            
            })}
       
      </div>
    );
  }
}
 
export default Portfolio;