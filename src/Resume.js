import React, { Component } from "react";
import { Zoom } from "react-awesome-reveal";


const programmingSkills = ["NodeJS", "ReactJS", "PHP", "ASP.NET", "Java", "mySQL", "Photoshop", "Illustrator", "Microsoft Offce", "Wordpress"];

const experience = [
  {
    id: 1,
    title: "Fleet Officer/Asset Management",
    company: "Public Services and Procurement Canada, Government of Canada",
    year: "2020-Present",
  },
  
  {
    id: 2,
    title: "Information Management Support",
    company: "Public Services and Procurement Canada, Government of Canada",
    year: "2020",
  },
  
  {
    id: 3,
    title: "Information Management Clerk",
    company: "Public Services and Procurement Canada, Government of Canada",
    year: "2019-2020",
  },
  
  {
    id: 4,
    title: "Administration Assistant",
    company: "DEEN Support Service",
    year: "2017",
  },
  
  {
    id: 5,
    title: "Intern",
    company: "Moveable Online",
    year: "2016",
  },
  
  {
    id: 6,
    title: "Intern",
    company: "Moveable Online",
    year: "2016",
  }
  
]



const education = [
  {
    id: 1,
    school: "York University - School of Continuing Studies",
    program: "Full Stack Development",
    type: "Certificate",
    year: "2020-2021 (In Progress)"
  },
  
  {
    id: 2,
    school: "York University",
    program: "Information Technology, BA",
    type: "Bachelors",
    year: "2016-2020"
  },
  
  {
    id: 3,
    school: "Humber College",
    program: "Computer Programmer",
    type: "Diploma",
    year: "2014-2016"
  },
  
  {
    id: 4,
    school: "Michael Power/St. Joseph",
    program: "High School",
    type: "High School Diploma, IB Certificate, French Certificate",
    year: "2010-2014"
  },
]
    
 
class Resume extends Component {
  render() {
    return (
      <div>
      
      
      
      
        <div class="container"><h1>Resume</h1></div>
        <Zoom cascade triggerOnce>
        <div class = "container">
        <h2>Areas of Knowledge </h2>
        
        {programmingSkills.map(function(proSkills) {
              return(

              <div key={programmingSkills.id}>
              
                  <div class="resSkillColumn">
                      <div class="resSkillCard">
                              <div class="resContainer">
                                  <h3>{proSkills}</h3>
   
                              </div>
                      </div>
                  </div>
                  
            </div>
            
            );
            })}
        </div>
        
        <br />
        <div class = "container">
        <h2>Experience</h2>
        
        {experience.map(function(exp) {
              return(

              <div key={experience.id}>

                  <div class="expColumn">
                      <div class="expCard">
                              <div class="resContainer">
                                  <h3>{exp.title}</h3>
                                        <h4 class="title">{exp.company}</h4>
                                        <p class="title">{exp.year}</p>
   
                              </div>
                      </div>
                  </div>
            </div>    
            );
            })}
            </div>
            
            
            
            
            
            
            <div class = "container">
            <h2>Education</h2>
              {education.map(function(edu) {
                    return(
      
                    <div key={education.id}>
                        <div class="eduColumn">
                            <div class="eduCard">
                                    <div class="resContainer">
                                        <h3>{edu.school}</h3>
                                        <h4 class="title">{edu.program}</h4>
                                        <p>{edu.type}</p>
                                        <p class="title">{edu.year}</p>
         
                                    </div>
                            </div>
                        </div>
                  </div>    
                  );
                  })}
        </div>
        </Zoom>
        
        <br />
        
      </div>
    );
  }
}
 
export default Resume;