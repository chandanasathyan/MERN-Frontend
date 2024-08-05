import styled from "@emotion/styled";
import { Box, AppBar, Button } from "@mui/material";

const MainWrapper = styled(AppBar)(() => ({
    backgroundColor: "#00796B",
}));

const WrapperBox = styled(Box)(() => ({
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const HeaderItems = styled(Button)(() => ({
    color: "#ffffff",
    display: "block",
    justifyContent: "space-between",
}));

export {
    MainWrapper,
    WrapperBox,
    HeaderItems,
};
