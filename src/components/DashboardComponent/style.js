import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

const CreateBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "column",
    marginTop: "50px",
}));

const ContainerBox = styled(Box)(() => ({
    padding: "40px",
    border: "2px solid #00796B",
    margin: "20px",
}));

const ContainerText = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: "center",
    fontSize: "20px",
    color: "#00796B",
    textTransform: 'uppercase',
}));

const CreateButton = styled(Button)(() => ({
    marginTop: "50px",
    marginLeft: "24px",
    background: "#00796B",
    color: "#fff",
    '&:hover': {
        background: "#00796B",
        color: "#fff"
    }
}));

export {
    CreateBox,
    ContainerBox,
    ContainerText,
    CreateButton,
};
