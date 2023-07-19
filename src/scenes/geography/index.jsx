import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Total Sales" subtitle="Since 2018" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;