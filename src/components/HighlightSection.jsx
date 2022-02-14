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
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga saepe aperiam sit mollitia deserunt perspiciatis doloremque natus, quo quis?"
        />
        <HighlightCard
          img={supplyChain}
          text="Supply Chain Specialization"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga saepe aperiam sit mollitia deserunt perspiciatis doloremque natus, quo quis?"
        />
        <HighlightCard
          img={warehouse}
          text="Always Stocked"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga saepe aperiam sit mollitia deserunt perspiciatis doloremque natus, quo quis?"
        />
        <HighlightCard
          img={rupee}
          text="Best Rates"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga saepe aperiam sit mollitia deserunt perspiciatis doloremque natus, quo quis?"
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
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0rem;
  flex-wrap: wrap;
`;

export default HighlightSection;
