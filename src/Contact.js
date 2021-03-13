import React,  { Component, useState } from "react";
//import { Formik } from 'formik';


  
    const Contact = () => {
      
      
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [phoneNumber, setPhoneNumber] = useState("")
      const [content, setContent] = useState("")
  
      const submission = async event => {
          event.preventDefault()
          const response = await fetch('http://localhost:4000/contact_form/entries', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              body: JSON.stringify({name, email, phoneNumber, content})
          })
          const payload = await response.json()
          if (response.status >= 400) {
              alert(`Oops! Error: ${payload.message} for fields: `)
          } else {
              alert(`Thank you for reaching out! We have received your message and will get back to you shortly!`)
          }
      }

      return (
        
            <form onSubmit={submission}>
               <h1>Contact Me!</h1>
               <div class="formContainer">
                    <label for="emailEntry" >Email</label>
                    
                    <input type="email" name="email" id="emailEntry" placeholder="Enter email here"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    <br />
                    <br />
                    <br />
                    <label for="phoneEntry">Phone Number</label>
                   
                    <input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number here" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    <br />
                    <br />
                    <br />
                
                    <label for="nameEntry">Full Name</label>
                   
                    <input type="name" name="name" id="nameEntry" placeholder="Enter name here" required value={name} onChange={e => setName(e.target.value)}/>
                     <br />
                    <br />
                    <br />
                    <label for="messageEntry">Message</label>
                  
                    <input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)}/>
                  <br />
                  <br />
                    
                    <button class="button">Submit</button>
                  </div>
               
            </form>
        
      )
    }

 
export default Contact;