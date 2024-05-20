import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import swal from 'sweetalert';
import "./contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

   
    if (!name || !email || !subject || !message) {
      swal("Oops!", "Please fill in all the fields.", "warning");
    } else {
      swal("Success!", "Your request has been submitted successfully!", "success");
      // Optionally, you can submit the form data to your backend or perform any other actions here
    }
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' name='name' placeholder='Name' required />
              <input type='email' name='email' placeholder='Email' required />
            </div>
            <input type='text' name='subject' placeholder='Subject' required />
            <textarea name='message' cols='30' rows='10' required></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
