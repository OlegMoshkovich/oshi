import React from 'react';
import styled from 'styled-components';
import flowDiagram from '../img/flow.png';
import { Nav } from '../components/Nav';
import { Title } from '../components/PageTitle';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
width:100vw;
height: 100vh;
// border: 1px solid red;
`
const LocalContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
width:100vw;
height: 100px;
// border: 1px solid red;
`

const Image = styled.img`
display:block;
width:100%;
// border: 1px solid red;
`

export const Flow = () => {
    return (
        <Container>
            <Nav />
            <Title>Flow Diagram</Title>
            <LocalContainer>
                <Image src={flowDiagram} />

            </LocalContainer>
        </Container>
    )
}