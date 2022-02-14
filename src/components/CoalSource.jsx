import React from "react";
import styled from "styled-components";
import india from "../assets/india.png";
import earth from "../assets/earth.png";

function CoalSource() {
  return (
    <CoalSourceContainer>
      <Heading>Coal Source</Heading>
      <CoalSourceCards>
        <CoalSourceCard>
          <CoalSourceImage src={india} />

          <CoalSourceText>Indian</CoalSourceText>
        </CoalSourceCard>
        <CoalSourceCard>
          <CoalSourceImage src={earth} />
          <CoalSourceText>Imported</CoalSourceText>
        </CoalSourceCard>
      </CoalSourceCards>
    </CoalSourceContainer>
  );
}

const CoalSourceContainer = styled.div``;

const Heading = styled.h2`
  color: white;
  text-align: center;
  font-weight: 300;
  font-size: 6rem;
`;

const CoalSourceCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const CoalSourceCard = styled.div`
  width: 40%;
  background: black;
  border-radius: 35px;
  padding: 2rem 5rem;
  margin: 5rem;
`;
const CoalSourceImage = styled.img`
  width: 70%;
  display: block;
  margin: 0rem auto;
`;

const CoalSourceText = styled.p`
  color: white;
  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  margin-top: 2rem;
`;

export default CoalSource;
