import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <HeroContainer>
      <BlackOverlay />
      <HeroContentContainer>
        <HeroText>Providing Top Quality</HeroText>
        <HeroTextMain>Natural Resources</HeroTextMain>
        <CtaButton>
          <Link to="contact" spy={true} smooth={true}>
            Get Quote
          </Link>
        </CtaButton>
      </HeroContentContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  width: 100%;
  height: calc(100% - 78px);
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlackOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  /* z-index: 15; */
`;

const HeroContentContainer = styled.div`
  position: relative;
  color: white;
  text-align: center;
`;

const HeroText = styled.h2`
  font-size: 5rem;
  font-weight: 400;

  @media (max-width: 425px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2.8rem;
  }
`;

const HeroTextMain = styled.h2`
  font-size: 10rem;
  line-height: 1;
  color: var(--primary-color);
  @media (max-width: 425px) {
    font-size: 4rem;
  }

  @media (max-width: 320px) {
    font-size: 3rem;
  }
  /* text-shadow: 0px 3px rgba(255, 255, 255, 0.5); */
`;

const CtaButton = styled.a`
  display: inline-block;
  background: var(--primary-color);
  font-size: 4.5rem;
  padding: 0.9rem 2rem;
  margin: 3rem 0rem;
  font-weight: 600;
  border-radius: 50px;
  border: 2px solid transparent;
  transition: all 250ms ease;

  &:hover {
    background: transparent;
    border: 2px solid var(--primary-color);
  }

  @media (max-width: 425px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2.8rem;
  }
`;

export default HeroSection;
