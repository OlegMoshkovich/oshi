import React from 'react';
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.div`
position:absolute;
top:40px;
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
width:100vw;
// border: 1px solid red;
`


export const Title = (props) => {
    return (
        <Container>
            <div>{props.children}</div>
        </Container>

    )
}