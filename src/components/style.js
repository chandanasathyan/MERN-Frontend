import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";

const MainWrapper = styled(Box)(() => ({
    background: "#E5F1F0",
    minHeight: "90vh",
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
}));

const LoginContainer = styled(Container)(() => ({
    borderRadius: "16px",
    background: "#fff",
    padding: "32px",
    border: "3px solid #00796B",
    margin: "10px"
}));

const ContainerBox = styled(Box)(() => ({
    padding: "40px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const WelcomeText = styled(Typography)(() => ({
    color: "#00796B",
    textTransform: 'uppercase',
    fontSize: "24px",
    fontWeight: 600
}));

const LoginBtn = styled(Button)(() => ({
    backgroundColor: "#00796B",
    color: "#fff",
    '&:hover': {
        background: "#00796B",
        color: "#fff"
    },
    marginTop: "24px",
    width: "204px"
}));

export {
    MainWrapper,
    LoginContainer,
    ContainerBox,
    WelcomeText,
    LoginBtn,
};
