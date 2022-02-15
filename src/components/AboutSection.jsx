import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo-Icon.png";

function AboutSection() {
  return (
    <AboutSectionCotainer>
      <LogoCard>
        <Logo src={logo} />
      </LogoCard>
      <AboutTextContainer>
        <AboutHeading>About Us</AboutHeading>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          explicabo minima provident amet quia libero, ratione ex nam aliquid
          deserunt labore voluptatem voluptas doloremque perspiciatis architecto
          magnam esse eos temporibus quisquam ea? Quo, totam quasi!
        </AboutText>
      </AboutTextContainer>
    </AboutSectionCotainer>
  );
}

const AboutSectionCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoCard = styled.div`
  background: black;
  padding: 5rem;
  border-radius: 35px;
  margin: 0rem 15rem;
`;

const Logo = styled.img`
  max-width: 25rem;

  @media (max-width: 320px) {
    max-width: 18rem;
  }
`;

const AboutTextContainer = styled.div`
  max-width: 700px;
`;

const AboutHeading = styled.h3`
  color: var(--primary-color);
  font-size: 8rem;
  text-decoration: underline;

  @media (max-width: 1023px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 5rem;
    margin: 2rem auto;
  }
`;

const AboutText = styled.p`
  color: white;
  font-size: 2.3rem;

  @media (max-width: 1023px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

export default AboutSection;
