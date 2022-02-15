import React from "react";
import styled from "styled-components";

function HighlightCard({ img, text, info }) {
  return (
    <Card>
      <div>
        <Icon src={img} />
      </div>
      <div>
        <CardText>{text}</CardText>
      </div>
      <Overlay>
        <OverlayText>{info}</OverlayText>
      </Overlay>
    </Card>
  );
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(14, 14, 14, 1) 87%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(14, 14, 14, 1) 87%
  );
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(14, 14, 14, 1) 87%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#0e0e0e",GradientType=1);
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 250ms ease-in-out;
`;

const OverlayText = styled.p`
  color: white;
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
`;

const Card = styled.div`
  background: black;
  width: 40%;
  /* flex-basis: 500px; */
  border-radius: 35px;
  padding: 2rem 1rem;
  margin: 5rem;
  position: relative;
  overflow: hidden;
  transition: all 150ms ease;

  &:hover {
    transform: scale(1.06);
  }

  &:hover ${Overlay} {
    opacity: 1;
    transform: translateY(0%);
  }

  @media (max-width: 768px) {
    margin: 3rem;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;
const Icon = styled.img`
  width: 50%;
  display: block;
  margin: 0rem auto;
`;

const CardText = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-top: 3rem;
`;

export default HighlightCard;
