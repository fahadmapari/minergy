import React from "react";
import styled from "styled-components";

function ContactSeperator() {
  return (
    <div>
      <Heading>
        <Span>OR</Span>
      </Heading>
    </div>
  );
}

const Heading = styled.h2`
  width: 90%;
  text-align: center;
  border-bottom: 8px solid var(--primary-color);
  line-height: 0.1em;
  margin: 5rem auto;
  font-size: 3rem;
  color: white;
`;

const Span = styled.span`
  background: #2b2a29;
  padding: 0 10px;
`;

export default ContactSeperator;
