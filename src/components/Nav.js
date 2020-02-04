import React from 'react';
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.div`
position:absolute;
top:10px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width:100vw;
// border: 1px solid red;
`
const LocalContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: ${props => props.position || 'space-around'};
align-items: center;
width:${props => props.width || '200px'};
height: 100 %;
// border: 1px solid red;
`

export const Nav = () => {
    return (
        <Container>
            <LocalContainer width={'150px'} position={'center'}>
                <div>OSHI Health</div>
            </LocalContainer>
            <LocalContainer width={'300px'} >
                <Link to='/flow'>flow</Link>
                <Link to='/'>welcome</Link>
                <Link to='/signup'>sign up</Link>
                <Link to='/animation'>animation</Link>
            </LocalContainer>

        </Container>

    )
}