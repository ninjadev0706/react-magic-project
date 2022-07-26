import React, { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import "./navbar.scss";

export const Navbar = () => {
    const [isNavHover, setNavHover] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const hoverMouse = () => {
        setNavHover(true);
    }

    const leaveMouse = () => {
        setNavHover(false);
    }

    const closeNav = () => {
        setNavHover(false);
    }

    return (
        <div className='navbarContainer'>
            <div className='about-nav-container'>
                {
                    isMobile ?
                        <a className={isNavHover ? 'about-nav-link navMobileHover' : 'about-nav-link'}
                            onClick={hoverMouse}
                            onMouseLeave={leaveMouse}
                        >
                            JM
                        </a>
                        :
                        <a href="/" className={isNavHover ? 'about-nav-link desktop navHover' : 'about-nav-link desktop'}
                            onMouseOver={hoverMouse}
                            onMouseLeave={leaveMouse}
                        >
                            JOSEPH MORRISON
                        </a>
                }
                <div className={isNavHover ? 'aboutcontentcontainter hoverNav ' : 'aboutcontentcontainter'}
                    onMouseOver={hoverMouse}
                    onMouseLeave={leaveMouse}
                >
                    <div className='div-block-7'>
                        <div className='home-div'>
                            <a href="/" className="home-link-block w-inline-block">
                                <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fbd6e4afc94e62b3f493109_sketched-Home-icon.png" loading="lazy" alt="" className="home-icon menu" />
                                <div className="text-block-6">HOME</div>
                                <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fc433f0377fbe4a0fca71dd_sketched-home-writing.png" loading="lazy" sizes="(max-width: 479px) 100vw, 70px" alt="" className="home-writing" />
                            </a>
                        </div>
                        <div className="polaroid-div">
                            <a href="/" className="home-link-block w-inline-block">
                                <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fbd6e4a4528ca494dd127e8_sketched-Pol-icon.png" loading="lazy" alt="" className="polaroid-icon" />
                                <div className="text-block-6">MOMENTS</div>
                                <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fc433f26096987f0f0ed57d_sketched-moments-writing.png" loading="lazy" sizes="(max-width: 479px) 100vw, 70px" alt="" className="home-writing" />
                            </a>
                        </div>
                    </div>

                    <div className="div-block-8">
                        <div>
                            <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/614012257681b8dcb31fae6c_profile%20pic%20copy.jpg" loading="lazy" sizes="100vw" alt="" className="about-menu-photo" data-xblocker="passed" /></div><div className="div-block-9">
                            <div className="about-text">Joseph Morrison is a photographer, designer and art director based in Los Angeles. His photography captures intimate atmospheres and the textural portraits of moments within the larger story.</div>
                        </div>
                    </div>

                    <div className="contact">
                        <a href="mailto:josephkmmorrison@gmail.com?subject=YO%20JOJO" className="contact-icon email w-inline-block"></a>
                        <a href="https://www.instagram.com/joseph_morrison/" target="_blank" className="contact-icon insta w-inline-block"></a>
                        <a href="https://josephmorrison.darkroom.tech/" className="contact-icon shop w-inline-block"></a>
                    </div>
                    {
                        isMobile && <div className="nav-up-button">
                            <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fbd6e496e03466f392bbb48_sketched-arrow-icon.png" loading="lazy" alt="" className="image-8" 
                                onClick={closeNav}
                            />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};