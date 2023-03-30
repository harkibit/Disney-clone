import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";

import Movies from "../components/Movies";
import Viewers from "../components/Viewers";

export default function Home() {
  return (
    <HomeContainer>
      <ImgSlider />
      <Viewers />
      <Movies />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 0 var(--side-padding);
  margin-top: 80px;
  min-height: calc(100vh - 80px);
`;
