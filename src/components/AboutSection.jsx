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
          Minergy Tradelinks LLP, based in Belagavi (Belagaum), Karnataka, is a
          company that provides production companies with high-quality natural
          resources. Minergy Tradelinks LLP is committed to providing only
          high-quality resources to its clients and ensuring that the entire
          process runs smoothly from order to delivery. We have a quality
          control team to ensure that the order's exact specifications are met,
          and we specialise in supply chain management, so we have complete
          control over everything from receiving the order to delivery, ensuring
          that the entire process runs smoothly and on time.
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
