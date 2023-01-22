import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { HomepageSection } from "./HomepageSection";

const Star = ({ size, x, y }) => (
  <motion.div
    initial={{ x, y }}
    animate={{ x: Math.random() * 2000, y: Math.random() * 600 }}
    transition={{
      duration: 60,
      ease: "linear",
      loop: Infinity,
      repeatType: "reverse",
    }}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: "white",
      position: "absolute",
    }}
  />
);

const StarField = ({ numStars }) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <Star key={i} size={1} x={Math.random() * 2000} y={Math.random() * 600} />
    );
  }
  return <>{stars}</>;
};

export const EarthImage = () => {
  const [scrollPosition, setScrollPosition] = useState(20);
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest > 50) {
        setScrollPosition(latest);
      }
    });
  }, []);

  return (
    <PageContainer>
      <Hero>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <StarField numStars={100} />
        </motion.div>
        <MainContainer>
          <HeroText>
            <HeroContent>
              <h1>Multizoa Theory</h1>
              <EarthContainer>
                <Earth>
                  <motion.div
                    animate={{ x: -(scrollPosition * 0.5) }}
                  ></motion.div>
                </Earth>
              </EarthContainer>
              <h2>Redefining our society's place in the Universe.</h2>
            </HeroContent>
          </HeroText>
        </MainContainer>
      </Hero>
      <Video>
        <iframe
          src="https://www.youtube.com/embed/iFBKLJe58FQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Video>

      <TLDR>
        <HomepageSection>
          <h3>Multizoa organisms are organisms made of many animals.</h3>
        </HomepageSection>
        <HomepageSection>
          <h3>
            Human society is a multizoa organism whose fundamental unit is the
            human.
          </h3>
        </HomepageSection>
        <HomepageSection>
          <h3>
            This view has all manner of far-reaching implications for how we see
            the world.
          </h3>
        </HomepageSection>
      </TLDR>
      <LearnMore>
        <h2>Learn More</h2>
        <LearnMoreSectionWrapper>
          <HomepageSection>
            <h3>
              For a fun and lighthearted introduction to the theory, the book
              Understanding our Whole is freely available on this website.
            </h3>
            <Button href="/understanding-our-whole"><p>Read the Book →</p></Button>
          </HomepageSection>
          <HomepageSection>
            <h3>
              For a more structured analysis of the multizoa theory, the
              preprint Is Human Society a Multizoa Organism is freely available
              on this website.
            </h3>
            <Button href="/is-human-society-a-multizoa-organism"><p>Read the Paper →</p></Button>
          </HomepageSection>
        </LearnMoreSectionWrapper>
      </LearnMore>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  h1 {
    color: #fff;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    //make text color have a linear gradient
    background-image: linear-gradient(146deg, #fff, #757a7d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

  h2 {
    margin-top: 2rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(10deg, #fff, #a5b3b7);
  }

  h3 {
    margin-top: 2rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(10deg, #fff, #a5b3b7);
  }
`;

const Hero = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EarthContainer = styled.div`
    width: 40%;
    padding-bottom: 40%;
    position: relative;
  
    @media (max-width: 1200px) {
      width: 50%;
      padding-bottom: 50%;
    }
  
  `;

const Earth = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 14;
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

  div {
    width: 200%;
    height: 100%;
    background: url(/images/landing-page/earth-at-night.jpg);
    background-size: cover;
  }
    `;

const Video = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background: black;
  padding: 2rem;
  z-index: 10;
  
  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
  }
`;

const TLDR = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #313131 0%, black 60%);
  padding: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: inherit;
    padding: 0;
  }
`;

const LearnMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(180deg, black 0%, #313131 60%, );
  padding: 2rem;

  h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    //make text color have a linear gradient
    background-image: linear-gradient(146deg, #fff, #757a7d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: inherit;
    padding: 0;
  }
`;

const LearnMoreSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: linear-gradient(180deg, black 0%, #313131 60%, );
  padding: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: inherit;
    padding: 0;
  }
`;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeroText = styled.div`
  width: 100%;
  position: relative; 
  display: flex; 
  align-items: center; 
  justify-content: center;`;
const HeroContent = styled.div` 
  z-index: 1; 
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;`;

// create a blue, beautiful button with a hover effect
const Button = styled.button`
  background: #077afd;
  width: 180px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #1ea7fd;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    //make the text move to the right
    transform: translateX(10px);
  }
`;
