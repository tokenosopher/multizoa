import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const EarthImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const position = window.scrollY;
  //     setScrollPosition(position);
  //   });
  //
  //   return () => {
  //     document.removeEventListener("scroll", () => {
  //       const position = window.scrollY;
  //       setScrollPosition(position);
  //     });
  //   };
  // }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPosition(latest);
    });
  }, []);

  return (
    <EarthContainer>
      <Earth>
          <motion.img src={"/images/landing-page/earth-at-night.jpg"} style={{width:"1000px"}} animate={{ x: -(scrollPosition * 0.5) }} />
      </Earth>
    </EarthContainer>
  );
};

const EarthContainer = styled.div`
    width: 100%;
    padding-bottom: 100%;
    position: relative;
  `;

const Earth = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden !important;
    border-radius: 50%;
    box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px #000;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: -20px -20px 50px 2px #000 inset;
    border-radius: 50%;

  }

  img {
    width: 200%;
    height: 100%;
    background-size: cover;
  }
    `;
