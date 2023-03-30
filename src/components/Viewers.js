import React from "react";
import styled from "styled-components";

import disney from "../assets/images/viewers-disney.png";
import marvel from "../assets/images/viewers-marvel.png";
import national from "../assets/images/viewers-national.png";
import pixar from "../assets/images/viewers-pixar.png";
import starWars from "../assets/images/viewers-starwars.png";

export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={disney} alt="disney viewer" />
      </Wrap>
      <Wrap>
        <img src={marvel} alt="marvel viewer" />
      </Wrap>
      <Wrap>
        <img src={national} alt="national viewer" />
      </Wrap>
      <Wrap>
        <img src={pixar} alt="pixar viewer" />
      </Wrap>
      <Wrap>
        <img src={starWars} alt="starWars viewer" />
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0 26px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px )10px
    transition : all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 40px 58px -16px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
