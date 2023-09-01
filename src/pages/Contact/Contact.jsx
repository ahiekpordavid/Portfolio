import React from 'react'
import './Contact.css'
import {SiMinutemailer,SiInstagram,SiTwitter} from 'react-icons/si'
import {PiPhoneCallFill} from 'react-icons/pi'

const Contact = () => {
  return (
    <div className='contacts'>
        <div className='contact'>
            <h1>Contact Me</h1>
            <div className='contactTrad'>
                <SiMinutemailer className='socials'/>
                <p>ahiekpordavid@gmail.com</p>
            </div>
            <div className='contactTrad'>
                <PiPhoneCallFill className='socials' />
                <p>+233 20 346 5176</p>
            </div>
            <div className='contactSocials'>
                <SiInstagram className='socials'/>
                <SiTwitter className='socials'/>
            </div>
            <button> Download CV</button>
        </div>
        <div className='contactMessage'>
            <form action="" >
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact