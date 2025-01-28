// app/components/Header.js
'use client';

import Link from 'next/link';
import footerLogo from '../assets/images/footer-logo.png';
import paymentLogo1 from '../assets/images/Frame-317.png';
import paymentLogo2 from '../assets/images/Frame-323.png';
import paymentLogo3 from '../assets/images/Frame-322.png';
import paymentLogo4 from '../assets/images/Frame-321.png';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return ( <>
    <div className='footer-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="footer-item">
                        <Link href="/"><Image src={footerLogo} alt="" className="img-fluid" /></Link>
                    </div>
                    <div className='footer-item'>
                        <h6>Got questions? Call us 24/7!</h6>
                    </div>
                    <div className='footer-item'>
                        <p>03 111 666 144</p>
                        <p>0317 1777015.</p>
                    </div>
                    <div className='footer-item'>
                        <h6>Contact info</h6>
                        <p>info@winstore.pk</p>
                    </div>
                    <div className='footer-item'>
                        <div className='social-icons'>
                            <div className='social-icon'>
                                <Link href="#"><FontAwesomeIcon icon={faFacebookF} style={{ color: '#fff' }} /></Link>
                            </div>
                            <div className='social-icon'>
                                <Link href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} /></Link>
                            </div>
                            <div className='social-icon'>
                                <Link href="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} /></Link>
                            </div>
                            <div className='social-icon'>
                                <Link href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='footer-item'>
                        <h6>Trending</h6>
                    </div>
                    <div className='footer-item'>
                        <div className='footer-link'>
                            <p>Installments</p>
                            <p>Electronics</p>
                            <p>Grocery</p>
                            <p>Health & Beauty</p>
                            <p>Home Appliances</p>
                            <p>Mobile Accessories</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='footer-item'>
                        <h6>Information</h6>
                    </div>
                    <div className='footer-item'>
                        <div className='footer-link'>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>FAQs</p>
                            <p>Shipping & Return</p>
                            <p>Privacy policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='footer-item'>
                        <h6>Customer Care</h6>
                    </div>
                    <div className='footer-item'>
                        <div className='footer-link'>
                            <p>My Account</p>
                            <p>Track Your Order</p>
                            <p>Recently Viewed</p>
                            <p>Wishlist</p>
                            <p>Wishlist</p>
                            <p>Become a Vendor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-payment-images">
                <div className='payment-image'><Link href="#"><Image src={paymentLogo1} alt="" className="img-fluid" /></Link></div>
                <div className='payment-image'><Link href="#"><Image src={paymentLogo2} alt="" className="img-fluid" /></Link></div>
                <div className='payment-image'><Link href="#"><Image src={paymentLogo3} alt="" className="img-fluid" /></Link></div>
                <div className='payment-image'><Link href="#"><Image src={paymentLogo4} alt="" className="img-fluid" /></Link></div>
            </div>
        </div>
    </div>

    <div className='footer-bottom'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='footer-bottom-content'>
                        <p>© 2021 STRATUS99 E-Commerce, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}
