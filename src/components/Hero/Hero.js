import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Hero() {
    return (
        <>
            <section
                id="hero"
                style={{ marginTop: "250px", marginBottom: "180px" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="../img/logo.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-6">
                            <Box sx={{ color: "#fff" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700",
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
            </section>
        </>
    );
}

export default Hero;
