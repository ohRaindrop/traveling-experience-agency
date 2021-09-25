import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    you can subscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="your email" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            About us
                        </h2>
                        <Link to="/sign-up"> How it works </Link>
                        <Link to="/sign-up"> Testimonials </Link>
                        <Link to="/sign-up"> Careers </Link>
                        <Link to="/sign-up"> Investors </Link>
                        <Link to="/sign-up"> Terms of Services </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>
                            Contact us
                        </h2>
                        <Link to="/"> How it works </Link>
                        <Link to="/"> Testimonials </Link>
                        <Link to="/"> Careers </Link>
                        <Link to="/"> Investors </Link>
                        <Link to="/"> Terms of Services </Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            Videos
                        </h2>
                        <Link to="/"> Submit your videos </Link>
                        <Link to="/"> Ambassadors </Link>
                        <Link to="/"> Agency </Link>
                        <Link to="/"> Influencer </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>
                            Social Media
                        </h2>
                        <Link to="/"> Instagram </Link>
                        <Link to="/"> Facebook </Link>
                        <Link to="/"> Twitter </Link>
                        <Link to="/"> Youtube </Link>
                    </div>
                </div>
            </div>
            <section className="social.media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo" to="/">
                            LOGO
                        </Link>
                    </div>
                    <small className="website-rights"> LOGO (c) 2021 </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/"
                            target="_blank"
                            aria-label="facebook">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/"
                            target="_blank"
                            aria-label="instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/"
                            target="_blank"
                            aria-label="twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
