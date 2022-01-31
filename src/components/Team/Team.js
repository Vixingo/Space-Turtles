import { Typography, Box } from "@mui/material";

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
                        {teamData.map((data, i, row) => {
                            return (
                                <Teamcard
                                    imgsrc={data.imgsrc}
                                    name={data.name}
                                    desi={data.desi}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
