import React from 'react'
import './Footer.css'
import { FormattedMessage } from 'react-intl'
const Footer = () => {
  return (
    <div className='footer'>
        <h4><FormattedMessage id="footer.thanks" /></h4>
    </div>
  )
}

export default Footer