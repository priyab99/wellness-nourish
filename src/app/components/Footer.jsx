import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">Our Office</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Our Pages</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Our Team</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Subscribe to get get an update</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-info absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;