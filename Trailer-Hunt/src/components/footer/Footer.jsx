import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                  © 2025 Trailer-Hunt. All rights reserved.
                   Trailer-Hunt is your ultimate destination 
                   for discovering, exploring, and watching 
                   trailers of the latest and most popular
                    movies and TV shows. Whether you're a 
                    casual viewer or a dedicated film
                     enthusiast, we provide a seamless
                      and immersive experience tailored just
                       for you. All content presented on this
                        platform is for informational and
                         entertainment purposes only. Movie posters, trailers, and metadata belong to their respective owners and are used under fair use guidelines. For inquiries, suggestions, or feedback, please visit our FAQ section or contact our support team. Stay tuned, stay entertained — only on Trailer-Hunt.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
