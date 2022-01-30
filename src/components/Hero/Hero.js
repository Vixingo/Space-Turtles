import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Hero() {
    return (
        <>
            <Box
                id="hero"
                sx={{
                    paddingTop: "250px",
                    marginBottom: "180px",
                    "@media (max-width: 991px)": {
                        paddingTop: "130px",
                    },
                    "@media (max-width: 767px)": {
                        paddingTop: "130px",
                    },
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img
                                src="../img/logo.png"
                                alt=""
                                width="100%"
                                className="mb-5"
                            />
                        </div>
                        <div className="col-lg-6">
                            <Box sx={{ color: "#fff" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700",
                                        "@media (max-width: 767px)": {
                                            fontSize: "20px",
                                        },
                                    }}
                                >
                                    WELCOME TO SPACETURTLES COLLECTIONS
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mt: 4,
                                        mb: 3,
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700",
                                        "@media (max-width: 767px)": {
                                            fontSize: "18px",
                                        },
                                    }}
                                >
                                    Privatesale ends in:
                                </Typography>
                                <Stack
                                    sx={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-evenly",
                                        textAlign: "center",
                                        "& > :not(style)": {
                                            fontWeight: "700",
                                            fontSize: "25px",
                                            "@media (max-width: 767px)": {
                                                fontSize: "18px",
                                            },
                                        },
                                    }}
                                >
                                    <Typography>
                                        Days{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            00
                                        </Typography>
                                    </Typography>
                                    :
                                    <Typography>
                                        Hours{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            00
                                        </Typography>
                                    </Typography>
                                    :
                                    <Typography>
                                        Minutes{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            00
                                        </Typography>
                                    </Typography>
                                    :
                                    <Typography>
                                        Seconds{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            00
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Hero;
