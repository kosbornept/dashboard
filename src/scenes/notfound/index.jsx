import { Box } from "@mui/material";
import Header from "../../components/Header";

const NotFound = () => {
    return (
        <Box m="20px">
            <Header title="Error 404" subtitle="Page Not Found" />
            <Box height="75vh">
                <p>Please ensure you have typed the correct URL.</p>
            </Box>
        </Box>
    )
}

export default NotFound;