import React from "react";
import styled from "styled-components";
import CoalSize from "./CoalSize";
import CoalSource from "./CoalSource";
import CoalBurn from "./CoalBurn";
import CoalAvail from "./CoalAvail";

function CoalSection() {
  return (
    <CoalSectionConatiner>
      <Heading>Know About Our Coal</Heading>
      <CoalSource />
      <CoalSize />
      <CoalBurn />
      <CoalAvail />
    </CoalSectionConatiner>
  );
}

const CoalSectionConatiner = styled.div`
  background: #151515;
`;

const Heading = styled.h2`
  color: var(--primary-color);
  font-size: 8rem;
  text-align: center;
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 425px) {
    font-size: 4rem;
    padding: 1rem;
  }
`;

export default CoalSection;
