import React, { useEffect, useRef } from 'react';
import "./footer.scss";

export const Footer = () => {

    return (
        <div className="footer-sec wf-section">
            <div className="footer-home-btn-div">
                <a href="/home-all" className="link-block home-footer w-inline-block">
                    <div className="link-icon home">
                        <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fbd6e4afc94e62b3f493109_sketched-Home-icon.png" loading="lazy" alt="" className="home-icon"
                        />
                    </div>
                </a>
            </div>
            <div className="footer-text-div projects-page">
                <div className="footer-text">
                    <strong>©</strong> 2020 Joseph Morrison // All Rights Reserved</div>
            </div>
        </div>
    );
};
