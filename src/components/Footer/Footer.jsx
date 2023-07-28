import React from 'react';
import "./Footer.scss"

export default function Footer() {
  return (
    <div>
        <footer>
            <div className='footer-container' >
                {`© Shopify` }
                <img className='logo' src='/assets/images/logo192.png' alt="Logo" />
            </div>
        </footer>
    </div>
  )
}
