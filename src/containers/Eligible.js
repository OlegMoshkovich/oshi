import React from 'react';
import styled from 'styled-components'
import { Link } from "@reach/router"
import { Nav } from '../components/Nav'
import { Title } from '../components/PageTitle'

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
height: 100px;
// border: 1px solid red;
`



export const Eligible = () => {
    return (
        <Container>
            <Nav />
            <Title> Eligible</Title>
            <LocalContainer>
                <div>
                    Welcome to Oshi Health
            </div>
                {/* <button >sign up</button> */}
                <button>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/signup">
                        Signup
                    </Link>
                </button>
            </LocalContainer>
        </Container >
    )
}