import React from "react";
import styled from "styled-components";

export default function Viewers() {
  return (
    <Container>
        <Wrap>
            hey
        </Wrap>
        <Wrap>
            hey
        </Wrap>
        <Wrap>
            hey
        </Wrap>
        <Wrap>
            hey
        </Wrap>
        <Wrap>
            hey
        </Wrap>
    </Container>
  );
}
const Container = styled.div`
  margin-top : 30px;
  display : grid;
  grid-template-columns : repeat(5, minmax(0, 1fr));
  grid-gap : 25px;
  padding : 30px 0 26px;
`;

const Wrap = styled.div`
    border : 3px solid rgba(249, 249, 249, 0.1);
    border-radius : 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px )10px
    transition : all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;

    img{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 40px 58px -16px;    
        border-color: rgba(249, 249, 249, 0.8);
    }
`
