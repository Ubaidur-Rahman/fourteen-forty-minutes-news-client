import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../images/1440.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section mt-5 bg-light">
        <div className="container-fluid p-3">
        <h2 className='text-center fs-2 component-title'>Get In Touch</h2>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="#"><img src={footerLogo} className="img-fluid" alt="logo" /></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Magazine</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe. Stay in touch</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><FontAwesomeIcon className="subscribe-btn" icon={faTelegramPlane} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="https://web.facebook.com/ubaidurarian/">Ubaidur</a></p>
                        </div>
                    </div>
        </div>
        
    </footer>
    );
};

export default Footer;