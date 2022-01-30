import React from "react";
import { Typography, Box } from "@mui/material";

function Teamcard(props) {
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-5">
                <Box>
                    <img
                        src={props.imgsrc}
                        alt=""
                        width={"100%"}
                        style={{
                            padding: "10px",
                            borderRadius: "30px",
                        }}
                    />
                </Box>
                <Typography
                    variant="h4"
                    sx={{
                        color: "#ff0f7b",
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        textAlign: "center",
                        mt: 2,
                        mb: 1,
                    }}
                >
                    {props.name}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "400",
                        color: "#fff",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                    }}
                >
                    {props.desi}
                </Typography>
            </div>
        </>
    );
}

export default Teamcard;
