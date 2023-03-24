import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

function Accordian(props) {
    return (
        <div>
            <Accordion style={{ width: 600 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 10,
                        }}
                    >
                        {props.un_name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography><Accordion style={{ width: 580 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography
                                style={{
                                    fontWeight: 10,
                                }}
                            >
                                {props.depart_name}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography><button>{props.sem}</button></Typography>
                        </AccordionDetails>
                    </Accordion></Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian

