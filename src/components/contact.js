import React, { useState } from "react";
import classnames from "classnames";
import styled from 'styled-components';
import Input from "./input";
import TextArea from "./text-area";
import Button from './button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6em 0 3em 0;
`;

const ContactForm = styled.form`
  width: 100%;
  padding: 40px 1.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 600px;
    padding: 20px 0;
  }
`;

const ContactInput = styled(Input)`
  flex-grow: 1;
  width: 100%;
  margin-bottom: 10px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;

    &:first-child {
      padding-right: 5px;
    }

    &:nth-child(2) {
      padding-left: 5px;
    }
  }
`;

const ContactText = styled(TextArea)`
  width: 100%;
  min-height: 300px;
  flex-basis: 1;
`;

const Submit = styled(Button)`
  width: 100%;
  margin-top: 3px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: auto;
    float: right;
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e, setter) => {
    e.preventDefault();

    const { value } = e.target;
    setter(value)
  }

  return (
    <Container id="contact">
      <h2 className="feature-page-section-header">Contact us</h2>
      <ContactForm action="https://formspree.io/info@kibaktile.com" method="POST">
        <ContactInput label="Name" name="name" value={name} onChange={(e) => handleChange(e, setName)} />
        <ContactInput label="Email" name="email" value={email} onChange={(e) => handleChange(e, setEmail)}/>
        <ContactText label="Message" name="message" value={message} onChange={(e) => handleChange(e, setMessage)} />
        <Submit>Send</Submit>
      </ContactForm>
    </Container>
  );
};

export default Contact;
