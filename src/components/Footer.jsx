import React from "react";
import logo from "../assets/Minergy-Logo.png";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo} />
      <FooterText>© Minergy Tradelinks LLP, All Rights Reserved</FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: white;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterLogo = styled.img`
  width: 30rem;
`;

const FooterText = styled.p`
  color: grey;
  font-size: 3rem;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`;

export default Footer;
