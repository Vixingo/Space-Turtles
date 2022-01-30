import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

let my = setInterval(function () {
    var bd = new Date("feb 5, 2022 7:59:59").getTime();
    var now = new Date().getTime();
    var rem = bd - now;

    console.log(rem);

    var days = Math.floor(rem / (1000 * 60 * 60 * 24));
    console.log(days);

    var hour = Math.floor((rem / (1000 * 60 * 60)) % 24);
    console.log(hour);

    var minute = Math.floor((rem / 1000 / 60) % 60);
    console.log(minute);

    var second = Math.floor((rem / 1000) % 60);
    console.log(second);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
}, 1000);
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
                        <div className="col-lg-6 align-self-center">
                            <Box sx={{ color: "#fff" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        maxWidth: "400px",
                                        margin: "0 auto",
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
                                    variant="h5"
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
                                            fontSize: "21px",
                                            "@media (max-width: 767px)": {
                                                fontSize: "16px",
                                            },
                                        },
                                    }}
                                >
                                    <Typography>
                                        Days{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            <span id="day"></span>
                                        </Typography>
                                    </Typography>
                                    :
                                    <Typography>
                                        Hours{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            <span id="hour"></span>
                                        </Typography>
                                    </Typography>
                                    :
                                    <Typography>
                                        Minutes{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            <span id="min"></span>
                                        </Typography>
                                    </Typography>
                                    :
                                    <Typography>
                                        Seconds{" "}
                                        <Typography sx={{ fontSize: "40px" }}>
                                            <span id="sec"></span>
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
