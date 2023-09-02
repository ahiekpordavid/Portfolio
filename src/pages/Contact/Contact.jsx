import React from 'react'
import './Contact.css'
import {SiMinutemailer,SiInstagram,SiTwitter} from 'react-icons/si'
import {PiPhoneCallFill} from 'react-icons/pi'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  return (
    <div className='contacts'>
        <div className='contact'>
            <h1><FormattedMessage id="contact.title" /></h1>
            <div className='contactTrad'>
                <SiMinutemailer className='socials'/>
                <p><FormattedMessage id="contact.email" /></p>
            </div>
            <div className='contactTrad'>
                <PiPhoneCallFill className='socials' />
                <p><FormattedMessage id="contact.phone" /></p>
            </div>
            <div className='contactSocials'>
                <SiInstagram className='socials'/>
                <SiTwitter className='socials'/>
            </div>
            <button> <FormattedMessage id="contact.cv" /></button>
        </div>
        <div className='contactMessage'>
            <form action="" >
                <input type="text" placeholder={<FormattedMessage id="contact.placeholder.name" />}/>
                <input type="email" placeholder={<FormattedMessage id="contact.placeholder.email" />}/>
                <textarea name="" id="" cols="30" rows="10" placeholder={<FormattedMessage id="contact.placeholder.message" />}></textarea>
                <button><FormattedMessage id="contact.button.submit" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact