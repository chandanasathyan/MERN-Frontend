import React, { useState } from 'react'
import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import {
    MainWrapper,
    WrapperBox,
    HeaderItems,
} from "./style";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from '../LoginComponent/Login';
import Register from '../RegisterComponent/Register';
import Dashboard from '../DashboardComponent/Dashboard';
import ProtectedRoute from '../ProtectedRoute';

const pages = [
    { name: 'Dashboard', path: '/dashboard' },
];

const Navbar = () => {
    const [navbarMenu, setNavbarMenu] = useState(null);
    const [navUser, setnavUser] = useState(null);
    const navigate = useNavigate()

    const handleCloseNavMenu = () => {
        setNavbarMenu(null);
    };
    const findUser = localStorage.getItem("userName") || null

    const userLogout = () => {
        localStorage.removeItem("userName")
        localStorage.removeItem("userToken")
        navigate('/')
    }

    const handleOpenUserMenu = (event) => {
        setnavUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setnavUser(null);
    };

    return (
        <div>
            <MainWrapper position='static'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <WrapperBox>
                            {pages.map((page) => (
                                <HeaderItems
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page.name}
                                </HeaderItems>
                            ))}
                        </WrapperBox>
                        <Box>
                            <Tooltip>
                                {findUser && <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                                }
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={navUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(navUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu} sx={{ display: "block" }}>
                                    <Typography>{findUser}</Typography>
                                    <Button onClick={userLogout} sx={{
                                        background: "#00796B",
                                        color: "#fff",
                                        '&:hover': {
                                            background: "#00796B",
                                            color: "#fff"
                                        },
                                        mt: 2
                                    }}>logout</Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </MainWrapper >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute Component={Dashboard} />}
                />
            </Routes>
        </div >
    )
}

export default Navbar

