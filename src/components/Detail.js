import React from 'react'
import styled from "styled-components";

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </Background>
            <ImageTitle>
                <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
            </ImageTitle>

            <Controls>
                <PlayButton></PlayButton>
                <TrailerButton></TrailerButton>
                <AddButton></AddButton>
                <GroupWatchButton></GroupWatchButton>
            </Controls>
        </Container>
    )
}

const Container = styled.div`
    min-height : calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position : relative;
`;

const Background = styled.div`
    position : fixed;
    top : 0;
    bottom : 0;
    right : 0;
    left : 0;
    z-index : -1;
    opacity : 0.8;

    img{
        height : 100%;
        width : 100%;
        object-fit : contain;
    }

`;

const ImageTitle = styled.div`
    height : 30vh;
    min-height : 130px;
    width : 35vw;
    min-width : 200px;

    img{
        height : 100%;
        width : 100%;
        object-fit : cover;
    }
`
const Controls = styled.div``
const PlayButton = styled.button``
const TrailerButton = styled.button``
const AddButton = styled.button``
const GroupWatchButton = styled.button``
