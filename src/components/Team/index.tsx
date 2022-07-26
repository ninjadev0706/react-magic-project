import React, { useState } from 'react';
import './team.scss';

export const Team = () => {
    const [isHover, setHover] = useState(false);
    const [isHoverNext, setHoverNext] = useState(false);

    const hoverMouse = () => {
        setHover(true);
    }

    const hoverNextMouse = () => {
        setHoverNext(true);
    }

    const leaveMouse = () => {
        setHover(false);
    }

    const leaveNextMouse = () => {
        setHoverNext(false);
    }

    return (
        <div className="next-project-sec wf-section">
            <div className="left-side-div">
                <div data-w-id="c26454fa-acec-17d1-5464-50e408722d01" className="previous-proj">
                    <a href="" className="link-block-2 w-inline-block">
                        <img loading="lazy" src="/assets/img/team01.jpg" className={isHover ? 'image-6 scaleout' : 'image-6'} data-xblocker="passed" />
                        <div className="n-p-text"
                            onMouseOver={hoverMouse}
                            onMouseLeave={leaveMouse}
                        >PREVIOUS
                        </div>
                    </a>
                </div>
            </div>
            <div className="right-side-div">
                <div data-w-id="b011a258-e070-0b72-d2de-29463a6359cd" className="next-proj">
                    <a href="" className="link-block-2 w-inline-block">
                        <img loading="lazy" src="/assets/img/team02.jpg" alt="" className={isHoverNext ? 'image-6 scaleout' : 'image-6'} data-xblocker="passed" />
                        <div className="n-p-text"
                            onMouseOver={hoverNextMouse}
                            onMouseLeave={leaveNextMouse}
                        >NEXT</div>
                    </a>
                </div>
            </div>
        </div>
    );
};