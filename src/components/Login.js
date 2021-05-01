import React from "react";
import styled from "styled-components";
import background from "../assets/images/login-background.jpg";
import logoOne from "../assets/images/cta-logo-one.svg";
import logoTwo from "../assets/images/cta-logo-two.png";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src={logoOne}/>
        <Signup>Get all there</Signup>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoOne src={logoTwo}/>
      </CTA>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

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
  max-width: 650px;
  width: 80%;
  flex-direction: column;
  padding: 80px 40px;
`;

const CTALogoOne = styled.img``;

const Signup = styled.button`
  width: 100%;
  background: #0063e5;
  color: #f9f9f9;
  border-radius: 5px;
  text-align: center;
`;

const Description = styled.p`
  font-size : 11px;
  letter-spacing : 1.1px
`;
