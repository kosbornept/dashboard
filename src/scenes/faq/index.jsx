import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography color={colors.redAccent[500]} variant="h5">
                        Why can't I see the dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Please ensure that you have the correct access required to view company sales data. If you feel like there has been a mistake and you are prevented from access, contact your line manager who can discuss your concerns with you.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography color={colors.redAccent[500]} variant="h5">
                        My personal details are wrong.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contact your line manager if you are unable to edit these details yourself, otherwise please use the edit button on your profile. Maintaining correct contact details is your own responsibility.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography color={colors.redAccent[500]} variant="h5">
                        Holiday Requests
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Holidays can be requested in the month of January, with all allocations being completed in February on a first come first served basis. If you do not book your holidays, they will be allocated to you as the company see's fit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography color={colors.redAccent[500]} variant="h5">
                        When are paydays?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We pay every first Monday of the month. Advances can be requested in exceptional circumstances and must be approved.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography color={colors.redAccent[500]} variant="h5">
                        How are sales kept updated?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We use SalesForce for all accounts. If you are unfamiliar with the software and wish to be trained for future development, we can assist your growth.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;