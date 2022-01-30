import { Typography } from "@mui/material";
import React from "react";

function RoadMap() {
    return (
        <>
            <section
                className="RoadMap "
                id="RoadMap"
                style={{ paddingTop: "100px" }}
            >
                <div className="container">
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "center",

                            color: "#fff",
                            fontWeight: "700",
                            fontFamily: "Montserrat",
                        }}
                    >
                        ROADMAP
                    </Typography>{" "}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            fontFamily: "Montserrat",
                            maxWidth: "1000px",
                            margin: "10px auto",
                        }}
                    >
                        Space Turtles is a full-time project and it will
                        continue to be following the public sale. Below is what
                        we're working towards in the short term.
                    </Typography>
                    <Typography
                        sx={{
                            mt: 5,
                            color: "#fff",

                            fontFamily: "Montserrat",
                        }}
                    >
                        Future developments will be announced in Roadmap 2.0.
                    </Typography>
                </div>{" "}
                <img
                    src="../img/gree.jpg"
                    alt=""
                    width="100%"
                    style={{
                        borderTop: "2px solid #fff",
                        borderBottom: "2px solid #fff",
                    }}
                />
            </section>
        </>
    );
}

export default RoadMap;
