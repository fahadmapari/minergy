import React from "react";
import styled from "styled-components";

function DeliveryCard({ icon, text }) {
  return (
    <DeliveryCardContainer>
      <Icon src={icon} />
      <Text>{text}</Text>
    </DeliveryCardContainer>
  );
}

const DeliveryCardContainer = styled.div`
  background: black;
  padding: 2rem 5rem;
  max-width: 40%;
  border-radius: 35px;

  @media (max-width: 425px) {
    max-width: 90%;
    margin: 2rem auto;
  }
`;

const Icon = styled.img`
  width: 80%;
  display: block;
  margin: auto;
`;

const Text = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-top: 4rem;
`;

export default DeliveryCard;
