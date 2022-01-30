import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Faqmain(props) {
    return (
        <>
            <div className="container">
                <Accordion
                    sx={{
                        background: "transparent",
                        color: "#fff",
                        borderColor: "#fff",
                        boxShadow: "none",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant="h5"
                            fontWeight={"600"}
                            fontFamily={"Montserrat"}
                        >
                            {props.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography fontFamily={"Montserrat"}>
                            {props.detail}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}

export default Faqmain;
