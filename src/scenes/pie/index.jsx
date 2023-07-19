import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Sales Split" subtitle="2023 YTD" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;