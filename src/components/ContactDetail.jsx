import React from "react";
import styled from "styled-components";

function ContactDetail() {
  return (
    <ContactDetailConatiner>
      <ContactLeft>
        <ContactHeading>email us at</ContactHeading>
        <ContactInfo>info@minergy.in</ContactInfo>
        <Spacer />
        <ContactHeading>call us at</ContactHeading>
        <ContactInfo>+91 9591305555</ContactInfo>
        <ContactInfo>+91 7066079453</ContactInfo>
      </ContactLeft>
      <ContactRight>
        <ContactHeading>Address</ContactHeading>
        <ContactInfo>
          Shop. No. 1A, Plot No. 465, CTS No 8893, Shivbasavnagar, MM, Ext Area,
          Belagavi, Belagavi (Belagaum), Karnataka - 590001
        </ContactInfo>
      </ContactRight>
    </ContactDetailConatiner>
  );
}

const ContactDetailConatiner = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    justify-content: center;
    text-align: center;
  }
`;
const ContactLeft = styled.div``;
const ContactRight = styled.div`
  width: 50%;

  @media (max-width: 425px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const ContactHeading = styled.p`
  color: var(--primary-color);
  font-size: 3rem;
  font-weight: 500;
`;
const ContactInfo = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const Spacer = styled.div`
  margin: 1.8rem 0rem;
`;

export default ContactDetail;
