import React from "react";
import coalBurn from "../assets/fire coal.png";
import styled from "styled-components";

function CoalBurn() {
  return (
    <CoalSizeContainer>
      <Heading>Coal Size</Heading>
      <CoalImage src={coalBurn} />
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
`;

const CoalImage = styled.img`
  width: 90%;
  display: block;
  margin: 2rem auto;
`;

export default CoalBurn;
