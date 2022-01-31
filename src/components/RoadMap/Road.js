import { Typography, Box } from "@mui/material";
import React from "react";

function Road(props) {
    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    color: "#F7941D",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                }}
            >
                {" "}
                {props.title}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "500",
                        fontFamily: "Montserrat",
                    }}
                >
                    {props.sec}
                </Typography>
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    color: "#fff",
                    fontFamily: "Montserrat",
                }}
            >
                {props.detail}
            </Typography>
        </>
    );
}

export default Road;
