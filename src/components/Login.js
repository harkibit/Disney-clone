import React from "react";
import styled from "styled-components";
import background from "../assets/images/login-background.jpg";
import topLogos from "../assets/images/cta-logo-one.svg";
import bottomLogos from "../assets/images/cta-logo-two.png";

import strings from "../assets/json/strings.json";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo src={topLogos} />
        <Signup>{strings.login.signup_button}</Signup>
        <Description>{strings.login.description}</Description>
        <CTALogo src={bottomLogos} />
      </CTA>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url(${background});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const CTA = styled.div`
  display: flex;
  max-width: 750px;
  width: 80%;
  flex-direction: column;
  padding: 80px var(--side-padding);

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const CTALogo = styled.img`
  margin-bottom: 10px;
`;

const Signup = styled.button`
  width: 100%;
  background: #0063e5;
  color: #f9f9f9;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2em;
  border: none;
  padding: 15px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 14px;
  letter-spacing: 1.1px;
  line-height: 1.3;
  padding: 20px 0;
  text-align: center;
`;
