import React from 'react'
import './Footer.css'
import { FormattedMessage } from 'react-intl'
import { useTheme } from '../../utils/theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const inputStyles = {
    color: theme.secondaryColor,
    backgroundColor: theme.secondaryBackground,
  };
  return (
    <div className='footer' style={inputStyles}>
        <h4><FormattedMessage id="footer.thanks" /></h4>
    </div>
  )
}

export default Footer