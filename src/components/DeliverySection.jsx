import React from "react";
import styled from "styled-components";
import train from "../assets/train.png";
import road from "../assets/truck.png";
import DeliveryCard from "./DeliveryCard";

function DeliverySection() {
  return (
    <DeliverySectionContainer>
      <Heading>We Deliver PAN India</Heading>
      <SubHeading>modes of delivery</SubHeading>
      <CardContainer>
        <DeliveryCard icon={road} text="Roadways" />
        <DeliveryCard icon={train} text="Railways" />
      </CardContainer>
    </DeliverySectionContainer>
  );
}

const DeliverySectionContainer = styled.div``;

const Heading = styled.h2`
  color: var(--primary-color);
  font-size: 8rem;
  text-align: center;
`;

const SubHeading = styled.p`
  color: white;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export default DeliverySection;
