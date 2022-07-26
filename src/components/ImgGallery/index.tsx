import React, { useRef, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Controller, Scene } from "react-scrollmagic";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import { useWindowSize } from "react-use";
import { useTrail, animated } from "react-spring";
import Sequence from './Sequence'

import "./gallery.scss";

const items = ["Will Adobe XD", "kill Sketch", "and InVision"];
const config = { mass: 2, tension: 2000, friction: 200 };

const ImgGallery = () => {
  // const size = useWindowSize();

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const sideRef = useRef<any>(null);
  const controllerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [scrollWidth, setScrollWidth] = useState(0);
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  useLayoutEffect(() => {
    if (sideRef.current && sideRef.current.children) {
      console.log(sideRef.current)
      let boxWidth = 0;    
      [...sideRef.current.children].forEach(c => {
        const childBox = c.getBoundingClientRect();
        boxWidth = boxWidth + childBox.width;
      });

      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const totalScrollWidth = boxWidth > w ? boxWidth - w : 0;

      setScrollWidth(totalScrollWidth);
    }
  }, [size.height, size.width]);

  return (
    <ParallaxProvider>
      <Controller ref={controllerRef}>
        {
          !isMobile &&
          <div className="space">

          </div>
        }
        <Scene
          duration={scrollWidth}
          pin
          triggerHook={0.25}
          enabled={size.width > 768}
        >
          {progress => {
            return (
              <div className="gallerywrap">
                <div className="hor-sticky-proj-title-div">
                  <div className="project-page-title _2 centered">KEISER CLARK X 10K PROJECTS</div>
                  <div className="project-description _2 centered sticky w-richtext">
                    <p>Keiser Clark x 10k Projects</p>
                  </div>
                </div>
                <div
                  className="cnt"
                  style={{
                    transform: `translate3d(-${scrollWidth *
                      progress}px, 0, 0)`
                  }}
                >
                  <div
                    className="content"
                    ref={sideRef}
                    style={{ width: scrollWidth }}
                  >
                    <div className="imagewrapcontainer">
                      <Sequence />
                      {/* <img src="/assets/back.png" alt="t" /> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
      </Controller>
    </ParallaxProvider>
  );
}

export default ImgGallery
