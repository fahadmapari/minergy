import React from "react";
import styled from "styled-components";
import coalSize from "../assets/coal-size.png";

function CoalSize() {
  return (
    <CoalSizeContainer>
      <Heading>Coal Size</Heading>
      <CoalImage src={coalSize} />
    </CoalSizeContainer>
  );
}

const CoalSizeContainer = styled.div`
  margin-top: 5rem;
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

export default CoalSize;
