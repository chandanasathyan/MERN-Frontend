import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {
    MainWrapper,
    LoginContainer,
    ContainerBox,
    WelcomeText,
    LoginBtn,
} from "../style"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result)
                localStorage.setItem("userToken", result.data.token)
                localStorage.setItem("userName", result.data.name)
                navigate('/dashboard')
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
                        <WelcomeText> Welcome! </WelcomeText>
                        <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 5 }}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <TextField id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 3 }}
                            name="password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <LoginBtn onClick={handleSubmit} > Login </LoginBtn>
                        <Box sx={{ display: "flex", mt: 4 }}>
                            <Typography sx={{ marginRight: "10px" }}>Not Registered?</Typography>
                            <Link to={"/registration"}> Register</Link>
                        </Box>
                    </ContainerBox>
                </LoginContainer >
            </MainWrapper >
        </div >
    )
}

export default Login