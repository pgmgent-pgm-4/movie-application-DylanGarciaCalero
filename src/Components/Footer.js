import React from 'react';
import "../Css/footer.scss";

const Footer = () => {

    return (
        <div className="App__Footer">
            <ul className="footer__list">
                <div>
                    <li>This movie application has been made using tmdb API</li>
                    <li>Made by Dylan Garcia Calero</li>
                </div>
                <li>@ Arteveldehogeschool 2021</li>
            </ul>
        </div>
    );
};

export default Footer;