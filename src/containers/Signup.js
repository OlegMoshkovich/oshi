import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from "@reach/router"
import { Nav } from '../components/Nav'
import { Title } from '../components/PageTitle'
import { useFormik } from 'formik';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
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
height: ${props => props.height || '100px'};
margin: 20px 0px 0px 0px;
border: 1px solid ${props => props.borderColor || 'white'};;
`
const Form = styled.form`
display:flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
width:100vw;
height: 200px;
// border: 1px solid red;
`
const Unit = styled.div`
display:flex;
flex-direction:${props => props.direction || 'column'};
justify-content: space-between;
align-items: ${props => props.align || 'flex-start'};
width: ${props => props.width || '200px'}; 
// height: 100px;
// border: 1px solid red;
`

const Input = styled.input`
width:100%;
`

const Label = styled.div`
font-size:10px;
margin:0px 0px 5px 0px ;
`
const Answer = styled.div`
font-size:20px;
margin:0px 0px 0px 0px ;
`

export const Signup = () => {
    const [status, setStatus] = useState('')
    const [employer, setEmployer] = useState('')

    const [radioYes, setRadioYes] = useState('')
    const [radioNo, setRadioNo] = useState('')


    const handleRadio = (status) => {
        if (status === 'yes') {
            setRadioYes('yes')
            setRadioNo('')
        }
        if (status === 'no') {
            setRadioNo('no')
            setRadioYes('')
        }
    }

    const handleSubmit = () => {
        if (radioYes === 'yes') {
            setStatus('diagnosed')
            console.log('radio yes from the handle submit', status)
        }

        if (radioNo === 'no') {
            setStatus('')
            console.log('radio yes from the handle submit', status)
        }

        if (formik.values.employer === 'oshi') {
            // alert('employer is oshi - validated')
        }

        console.log('submit is clicked')
        console.log('status', status)
        console.log(formik.values.name)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            employer: ''
        },
        onSubmit: values => {
            if (values.employer === 'oshi') {
                alert('qualified')
            } else {
                alert('not qualified')
            }
        },
    });




    return (
        <Container>
            <Nav />
            <Title>Sign up</Title>

            <LocalContainer height={'450px'} borderColor={'white'}>

                {/* FORM container */}
                <LocalContainer height={'120px'} borderColor={'white'}>
                    <Form onSubmit={formik.handleSubmit}>
                        <Unit>
                            <Label htmlFor="name">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </Unit>
                        <Unit>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Unit>
                        <Unit>
                            <Label htmlFor="employer">Employer</Label>
                            <Input
                                id="employer"
                                name="employer"
                                type="employer"
                                onChange={formik.handleChange}
                                value={formik.values.employer}
                            />
                        </Unit>

                        {/* <button type="submit" >Submit</button> */}
                    </Form>
                </LocalContainer>

                {/* RadioButton group */}
                <LocalContainer borderColor={'white'} height={'60px'}>
                    <Unit direction={'row'} width={'250px'} align={'flex-end'}>
                        <Label htmlFor="name">Have you been Diagnosed</Label>
                        <Unit direction={'row'} width={'100px'}>
                            <Unit direction={'column'} align={'center'}>
                                <Label htmlFor="name">Yes</Label>
                                <input
                                    type="radio"
                                    value="small"
                                    checked={radioYes}
                                    onChange={() => handleRadio('yes')}
                                />
                            </Unit>
                            <Unit direction={'column'} align={'center'}>
                                <Label htmlFor="name">No</Label>
                                <input
                                    type="radio"
                                    value="small"
                                    checked={radioNo}
                                    onChange={() => handleRadio('no')}
                                />
                            </Unit>
                        </Unit>
                    </Unit>
                </LocalContainer>
                <button type="submit" onClick={() => handleSubmit()}>Submit</button>

                {/* diagnosis */}
                <LocalContainer borderColor={'white'}>
                    <LocalContainer width={'30px'} borderColor={'white'}>
                        {/* <Answer>diagnosed</Answer> */}
                        {radioYes === 'yes' ? <Answer>diagnosed</Answer> : <Answer>{' '}</Answer>}
                    </LocalContainer>
                    <LocalContainer width={'30px'} borderColor={'white'}>
                        {/* <Answer>diagnosed</Answer> */}
                        {formik.values.employer === 'oshi' ? <Answer>employer matched</Answer> : <Answer>{' '}</Answer>}
                    </LocalContainer>
                </LocalContainer>

            </LocalContainer>




        </Container >
    )
}