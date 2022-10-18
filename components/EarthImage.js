import styled from "styled-components";
import { useEffect, useState } from "react";

export const EarthImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const position = window.scrollY;
      setScrollPosition(position);
    });

    return () => {
      document.removeEventListener("scroll", () => {
        const position = window.scrollY;
        setScrollPosition(position);
      });
    };
  }, []);

  return (
    <EarthContainer>
      <Earth scrollPosition={scrollPosition}>
        <div></div>
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
    overflow: hidden;
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

  div {
    width: 200%;
    height: 100%;
    //animation: spins 10s linear infinite;
    background: url(/images/landing-page/earth-at-night.jpg);
    background-size: cover;
    margin-left: ${(props) => props.scrollPosition * -1}px;
  }
  @keyframes spins {
    to {
      transform: translateX(${(props) => props.scrollPosition}px);
    }
  }
    `;
