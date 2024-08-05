import React, { useState } from 'react'
import {
    ContainerBox,
    LoginBtn,
    LoginContainer,
    MainWrapper,
    WelcomeText
} from '../style'
import { Box, TextField, Typography } from '@mui/material'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signup', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <MainWrapper>
                <LoginContainer maxWidth="sm" >
                    <ContainerBox
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <WelcomeText> Register Here </WelcomeText>
                        <TextField id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 5 }}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 3 }}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 3 }}
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <LoginBtn onClick={handleSubmit}> Submit </LoginBtn>
                        <Box sx={{ display: "flex", mt: 4 }}>
                            <Typography sx={{ marginRight: "10px" }}>Already have an account?</Typography>
                            <Link to={"/"} >Login</Link>
                        </Box>
                    </ContainerBox>
                </LoginContainer >
            </MainWrapper >
        </div >
    )
}

export default Register