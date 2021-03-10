import React, { Component } from "react";
import { Formik } from 'formik';

class Contact extends Component {
  render() {
    return (
      <div>
        
        
            <h1>Contact Me!</h1>
     <Formik
       initialValues={{ name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="name"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /><br />
           {errors.name && touched.name && errors.name}
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /><br />
           {errors.email && touched.email && errors.email}
           
           
           <input
             type="textArea"
             name="message"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
           /><br />
           {errors.message && touched.message && errors.message}
           
           
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
            
         



      </div>
    );
  }
}
 
export default Contact;