import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMailOpen } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer'>
            <Row className='footer-inner'>
                <Col md={4} sm={12}>
                    <img
                        alt=""
                        src={logo}
                        width="140"
                        height="100"
                        className="d-inline my-3"
                    />
                    <h5>
                        We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. About more than 5 years of experience and 100 of innovative achievements.
                    </h5>
                    <Button variant='light' className='text-danger mx-2' size='lg '><FaFacebook /></Button>
                    <Button variant='light' className='text-danger mx-2' size='lg '><FaTwitter /></Button>
                    <Button variant='light' className='text-danger mx-2' size='lg '><FaLinkedin /></Button>
                </Col>
                <Col md={4} sm={12}>
                    <h3 className='text-light'>Quick Links</h3>
                    <ul className='quicklinks'>
                        <li><a href='#home'>HOME</a></li>
                        <li><a href='#about'>ABOUT</a></li>
                        <li><a href='#services'>SERVICES</a></li>
                        <li><a href='#portfolio'>PORTFOLIO</a></li>
                        <li><a href='#contact'>CONTACT US</a></li>
                    </ul>
                </Col>
                <Col md={4} sm={12}>
                    <h3>Contact Us</h3>
                    <h5><HiOutlineLocationMarker style={{ color: '#fff', width: '40px', height: '40px' }} />Address</h5>
                    <h5>13225 Lantern Hill Court, Silver Spring, Maryland 20906</h5>

                    <br />

                    <h5><AiOutlinePhone style={{ color: '#fff', width: '40px', height: '40px' }} />Phone</h5>
                    <h5>+17149126132(US) , (IND)</h5>

                    <br />

                    <h5><HiOutlineMailOpen style={{ color: '#fff', width: '40px', height: '40px' }} />Email</h5>
                    <h5><a style={{ textDecoration: 'none', color: 'inherit' }} href='mailto:atomwebsolutions2020@gmail.com'>atomwebsolutions2020@gmail.com</a></h5>

                </Col>
            </Row>
            <Row className='footer-inner'>
                <Col lg={12} md={12} sm={12}>
                    <hr className='text-danger'/>
                    <h5 className='text-light'>Copyright © 2021 . All Rights Reserved.</h5>
                    <h6 className='footer-hidden'>
                        Annanya <a href='www.linkedin.com/in/annanya-ranjan'>Linkedin</a>
                    </h6>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
