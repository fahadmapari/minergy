import React from "react";
import coalBurn from "../assets/fire coal.png";
import styled from "styled-components";

function CoalBurn() {
  return (
    <CoalSizeContainer>
      <Heading>Burning Capacity</Heading>
      <CoalImage src={coalBurn} />
    </CoalSizeContainer>
  );
}

const CoalSizeContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  z-index: 5;
`;

const Heading = styled.h2`
  color: white;
  font-weight: 300;
  font-weight: 300;
  font-size: 6rem;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 4rem;
  }
`;

const CoalImage = styled.img`
  width: 90%;
  display: block;
  margin: 2rem auto;
`;

export default CoalBurn;
