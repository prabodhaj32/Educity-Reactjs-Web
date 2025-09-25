import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    // get the w3Form & get the API 

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6af074c2-1af7-4536-a12f-b2aa6cc170b2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We’re here to help! Whether you have questions about our programs, admissions, or campus life, feel free to reach out to us. At Edusity University, we are committed to providing you with the information 
            and support you need to make informed decisions about your education and future.</p>
            <ul>
                <li><img src={mail_icon} alt="" />info@edusityuniversity.edu</li>
                <li><img src={phone_icon} alt="" />081-1253662</li>
                <li><img src={location_icon} alt="" />Edusity University<br/>
                123 Innovation Avenue
                Learning City,<br/> Knowledge State</li>
               
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type ="text" name='name' placeholder='Enter your name' required></input>

                <label>phone Number</label>
                <input type ="tel" name='phone' placeholder='Enter your mobile number' required></input>
            
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                
                {/* <button type='submit' className='btn 2'> Submit now <img src={white_arrow} alt=""/></button> */}
                <button type='submit' className='btn dark-btn'> Submit now <img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact