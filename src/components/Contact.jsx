import React from "react";
import styled from "styled-components";
import ContactDetail from "./ContactDetail";
import ContactSeperator from "./ContactSeperator";

function Contact() {
  return (
    <ContactSection>
      <Heading id="contact">Contact Us</Heading>
      <ContactContainer name="contact" method="POST" data-netlify="true">
        <ContactGroup>
          <Label>Name</Label>
          <TextInput name="Name" type="text" required />
          <input type="hidden" name="form-name" value="contact"></input>
        </ContactGroup>

        <ContactGroup>
          <Label>Mobile Number</Label>
          <TextInput name="Mobile Number" type="tel" required />
        </ContactGroup>

        <ContactGroup>
          <Label>Email</Label>
          <TextInput name="Email" type="email" required />
        </ContactGroup>

        <ContactGroup>
          <Label>Message</Label>
          <TextArea name="Message"></TextArea>
        </ContactGroup>

        <ContactGroup>
          <Submit type="submit">SEND</Submit>
        </ContactGroup>
      </ContactContainer>
      <ContactSeperator />
      <ContactDetail />
    </ContactSection>
  );
}

const ContactSection = styled.div``;

const Heading = styled.h2`
  color: var(--primary-color);
  font-size: 8rem;
  text-align: center;
  margin-top: 15rem;

  @media (max-width: 425px) {
    font-size: 5rem;
  }

  @media (max-width: 320px) {
    font-size: 4rem;
  }
`;

const ContactContainer = styled.form`
  width: 95%;
  padding: 5rem;
  margin: 2rem auto;
  background: black;
  border-radius: 35px;

  @media (max-width: 425px) {
    padding: 2rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 1rem;
  }
`;

const ContactGroup = styled.div`
  margin-bottom: 3rem;
`;

const Label = styled.p`
  color: white;
  font-size: 4rem;
  font-weight: 200;

  @media (max-width: 425px) {
    font-size: 2.6rem;
  }
`;

const TextInput = styled.input`
  width: 100%;
  font-size: 3rem;
  padding: 0.5rem 0.3rem;
  border: 3px solid transparent;
  outline: none;
  font-weight: 700;
  border-radius: 10px;
  background: #fbfbfb;

  &:focus {
    border: 3px solid var(--primary-color);
  }
`;

const TextArea = styled(TextInput).attrs({
  as: "textarea",
})`
  height: 20rem;
`;

const Submit = styled(TextInput).attrs({
  as: "button",
})`
  background: var(--primary-color);
  color: white;
  cursor: pointer;
  margin-top: 3rem;
  font-size: 4rem;
  padding: 0.8rem 0rem;
  font-weight: 700;
  transition: all 150ms ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 425px) {
    margin-top: 2rem;
    font-size: 3rem;
  }
`;

export default Contact;
