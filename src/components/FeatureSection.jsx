import React from "react";
import styled from "styled-components";
import leadImage from "../assets/lead time.jpg";

function FeatureSection() {
  return (
    <FeatureContainer>
      <FeatureImageContainer>
        <FeatureImage src={leadImage} />
      </FeatureImageContainer>

      <FeatureTextContainer>
        <FeatureHeading>We Always Meet Lead Time</FeatureHeading>
        <FeatureText>
          We specialise in{" "}
          <HighlightText>supply chain management</HighlightText>, so we have
          complete control over the entire process, from receiving an order to
          delivery. We're also <HighlightText>always in stock</HighlightText>,
          so you can count on us to meet your order's lead time.
        </FeatureText>
      </FeatureTextContainer>
    </FeatureContainer>
  );
}

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15rem;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const FeatureImageContainer = styled.div`
  width: 50%;
  /* height: 60vh; */
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 10%;
`;

const FeatureTextContainer = styled.div`
  width: 50%;
  padding: 0rem 5rem;

  @media (max-width: 1023px) {
    width: 100%;
    margin: 3rem auto;
  }

  @media (max-width: 425px) {
    padding: 0rem 3rem;
  }

  @media (max-width: 320px) {
    padding: 0rem 1rem;
  }
`;

const FeatureHeading = styled.h2`
  color: var(--primary-color);
  font-size: 5rem;

  @media (max-width: 1023px) {
    font-size: 3.5rem;
  }
`;

const FeatureText = styled.p`
  color: white;
  font-size: 3rem;

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

const HighlightText = styled.span`
  color: var(--primary-color);
`;

export default FeatureSection;
