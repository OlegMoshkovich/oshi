import React from 'react';

import { Link } from "@reach/router"
import { Nav } from '../components/Nav'
import { Title } from '../components/PageTitle'
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

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
justify-content: space-between;
align-items: center;
width:100vw;
height: 200px;
// border: 1px solid red;
`

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};
`;



export const Animation = () => {
    return (
        <Container>
            <Nav />
            <Title> Animation</Title>
            <LocalContainer>
                <div>
                    page to test animation library
            </div>
                {/* <button >sign up</button> */}
                <button>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                        <BouncyDiv>
                            welcome
                    </BouncyDiv>

                    </Link>
                </button>
                <a href='https://bit.dev/formidablelabs/react-animations'> animation</a>
            </LocalContainer>
        </Container >
    )
}