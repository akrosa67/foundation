import React from "react";
import Sliderimg from '../components/Sliderimg'
import { slideimg } from '../asset/images'
import Form from "../components/Form";


function Contact() {
  return (
    <>
      <Sliderimg name="Stay in Touch with us" img={slideimg} />
     
        
      <Form />
        {/* <div className={classes.map_div}>
          <h2 className={classes.contact_head}>Catch us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.4421491089674!2d80.17238677184763!3d13.04303599837528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c27be6d0d5%3A0x4080be4972ef245d!2sLead%20Integrated%20Business%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1627457625420!5m2!1sen!2sin"
            className={classes.map}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div> */}
    
    </>
  );
}

export default Contact;
