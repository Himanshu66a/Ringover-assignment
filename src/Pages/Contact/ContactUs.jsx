import React from 'react'
import './contact.css'

function ContactUs() {
    return (
        <div className='ContactUs'>
            <div className="contact-box">
                <div className="contact-head">REACH US AT</div>
                <div className="emails-sec">
                    <div className="emails">
                        support@kicksup.com
                        <div>for any technical support</div>
                    </div>
                    <div className="emails">
                        info@kicksup.com
                        <div>for more information</div>
                    </div>
                    <div className="emails">
                        feedback@kicksup.com
                        <div>to send any feedback</div>
                    </div>
                    <div className="emails">
                        jobs@kicksup.com
                        <div>to work with us</div>
                    </div>
                </div>

            </div>
            <div className="socials">
                <div className="stay">
                    stay in touch
                </div>
                <div className="icons">
                    <img src="assets/twitter.png" alt="" />
                    <img src="assets/insta.png" alt="" />
                    <img src="assets/facebook.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactUs