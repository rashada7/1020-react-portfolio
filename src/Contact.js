import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        
        
            <div class="formContainer">
            <h1>Contact Me</h1>
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
          
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
          
             
          
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."/>
          
              </div>
            
         



      </div>
    );
  }
}
 
export default Contact;