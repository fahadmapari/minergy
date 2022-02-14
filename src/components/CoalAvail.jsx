import React from "react";
import styled from "styled-components";
import checklist from "../assets/checklist.svg";

function CoalAvail() {
  return (
    <CoalAvalConatiner>
      <CoalText>
        <span>Coal</span> can be supplied according to the <br /> specifications
        of the <br />
        production team or the client.
      </CoalText>
      <Image src={checklist} />
    </CoalAvalConatiner>
  );
}

const CoalAvalConatiner = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  margin: 25rem 0rem;
  margin-bottom: 5rem;
`;
const CoalText = styled.h2`
  font-size: 3.3rem;
  word-spacing: 5px;
  color: white;
  margin: 8rem;
  position: relative;
  z-index: 2;

  span {
    color: var(--primary-color);
    font-size: 4.5rem;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 35%;
  z-index: 1;
  opacity: 0.5;
`;

export default CoalAvail;