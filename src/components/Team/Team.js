import { Typography, Box } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import React from "react";
import Teamcard from "./Teamcard";
const teamData = [
    {
        imgsrc: "../img/Slide1/Optimized-SWEDEN.png",
        name: "LYFT",
        desi: "Director & Visionary of SpaceTurtles NFT",
    },
    {
        imgsrc: "../img/Slide1/Optimized-JAPAN.png",
        name: "CLIFF",
        desi: "Director of Community & Marketing of SpaceTurtles NFT",
    },
    {
        imgsrc: "../img/Slide1/Optimized-INDIA.png",
        name: "SAJAL",
        desi: "Community leader of SpaceTurtles NFT",
    },
    {
        imgsrc: "../img/Slide1/Optimized-UNITED KINGDOM.png",
        name: "MR. MOORE",
        desi: "Artist of SpaceTurtles NFT",
    },
    {
        imgsrc: "../img/Slide1/Optimized-AUSTRALIA.png",
        name: "ABUBLACK",
        desi: "Smart Contract Engineer & Developer of SpaceTurtles NFT",
    },
];
function Team() {
    return (
        <>
            <section className="Team" id="Team" style={{ paddingTop: "100px" }}>
                <div className="conitainer">
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            fontWeight: "700",
                            fontFamily: "Montserrat",
                            mb: 5,
                        }}
                    >
                        THE TEAM
                    </Typography>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Box>
                                <img
                                    src="../img/Slide1/Optimized-SWEDEN.png"
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
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mt: 2,
                                    mb: 1,
                                }}
                            >
                                LYFT <StarRateIcon fontSize="40px" />
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
                                Director & Visionary of SpaceTurtles NFT
                            </Typography>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Box>
                                <img
                                    src="../img/Slide1/Optimized-JAPAN.png"
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
                                CLIFF
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
                                Director of Community & Marketing of
                                SpaceTurtles NFT
                            </Typography>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Box>
                                <img
                                    src="../img/Slide1/Optimized-UNITED KINGDOM.png"
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
                                MR. MOORE
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
                                Artist of SpaceTurtles NFT
                            </Typography>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Box>
                                <img
                                    src="../img/Slide1/Optimized-AUSTRALIA.png"
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
                                ABUBLACK
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
                                Smart Contract Engineer & Developer of
                                SpaceTurtles NFT
                            </Typography>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Box>
                                <img
                                    src="../img/Slide1/Optimized-INDIA.png"
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
                                SAJAL
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
                                Community leader of SpaceTurtles NFT
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
