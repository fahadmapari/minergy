import React from "react";
import styled from "styled-components";
import HighlightCard from "./HighlightCard";
import medal from "../assets/medal.png";
import supplyChain from "../assets/supply-chain.png";
import warehouse from "../assets/warehouse.png";
import rupee from "../assets/rupee.png";

function HighlightSection() {
  return (
    <HighlightSectionContainer>
      <Heading>Why Choose Us</Heading>
      <CardContainer>
        <HighlightCard
          img={medal}
          text="Quality Assurance"
          info="We have a quality control team that ensures that each order is exactly as per the order specification."
        />
        <HighlightCard
          img={supplyChain}
          text="Supply Chain Specialization"
          info="We specialise in supply chain management, so we have complete control over the entire process, from receiving an order to delivery."
        />
        <HighlightCard
          img={warehouse}
          text="Always Stocked"
          info="We are always in stock, so you won't have to worry about your orders being fulfilled."
        />
        <HighlightCard
          img={rupee}
          text="Best Rates"
          info="We are dedicated to providing high-quality natural resources at great prices."
        />
      </CardContainer>
    </HighlightSectionContainer>
  );
}

const HighlightSectionContainer = styled.div``;

const Heading = styled.h2`
  font-size: 8rem;
  text-align: center;
  color: var(--primary-color);

  @media (max-width: 425px) {
    font-size: 4.8rem;
  }

  @media (max-width: 320px) {
    font-size: 3.3rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0rem;
  flex-wrap: wrap;

  @media (max-width: 320px) {
    margin: 1rem 0rem;
  }
`;

export default HighlightSection;
