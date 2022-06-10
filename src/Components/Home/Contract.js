import React, { useRef, useState } from 'react';
import './Contract.css'
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import emailjs from '@emailjs/browser';
const Contract = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_vayn438', 'template_ccsbrst', formRef.current, 'zZoXZBpShAzRnnWNv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <div id='contact' className='c '>
           <div className="c-bg"></div>
           <div className="c-wrapper">
           <div className="c-left">
               <h1 className='c-title'>Let's discuss your project</h1>
               <div className="c-info">
                   <div className="c-info-item">
                       <img src={phone} alt="" className='c-icon'/>
                       +8801719231108
                   </div>
                   <div className="c-info-item">
              <img className="c-icon" src={email} alt="" />
              tahsimreduwan112@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={address} alt="" />
              Sylhet, Bangladesh
            </div>
            </div>
           </div>
           <div className="c-right">
           <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form  ref={formRef} onSubmit={handleSubmit}>
            <input className='form' type="text" placeholder="Name" name="user_name" />
            <input className='form gap-2' type="text" placeholder="Subject" name="user_subject" />
            <input className='form' type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
           </div>
           </div>
           
        </div>
    );
};

export default Contract;