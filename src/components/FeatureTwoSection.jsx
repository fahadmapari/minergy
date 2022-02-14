import React from "react";
import styled from "styled-components";
import qualityImage from "../assets/jobquality_featured.jpg";

function FeatureTwoSection() {
  return (
    <FeatureContainer>
      <FeatureImageContainer>
        <FeatureImage src={qualityImage} />
      </FeatureImageContainer>

      <FeatureTextContainer>
        <FeatureHeading>Top Quality Control Team</FeatureHeading>
        <FeatureText>
          Your order's quality is always guaranteed with us because we have a
          <HighlightText> top quality control</HighlightText> team that inspects
          each order to ensure that it meets the order's exact specifications
          before shipping. You can be sure that you'll get exactly what you
          ordered when you work with us.
        </FeatureText>
      </FeatureTextContainer>
    </FeatureContainer>
  );
}

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 15rem;
`;

const FeatureImageContainer = styled.div`
  width: 50%;
  height: 50vh;
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
`;

const FeatureHeading = styled.h2`
  color: var(--primary-color);
  font-size: 5rem;
`;

const FeatureText = styled.p`
  color: white;
  font-size: 3rem;
`;

const HighlightText = styled.span`
  color: var(--primary-color);
`;

export default FeatureTwoSection;
