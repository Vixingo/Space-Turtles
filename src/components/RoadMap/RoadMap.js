import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import Road from "./Road";

const useStyles = makeStyles({
    normal: {
        borderRadius: "0",
        color: "#fff ",
        fontFamily: "Montserrat",
        fontSize: "20px",
        fontWeight: "600",
        "&:hover": {
            color: "#7da275",
        },
    },
    activated: {
        fontSize: "20px",
        background: "#F7941D !important",
        borderRadius: "0 !important",
        borderRadius: "10px !important",
        fontWeight: "600",
        color: "#000",
        "& > :not(style)": {
            color: "#fff",
        },
        "&:hover": {
            color: "#000",
        },
    },
    content: {
        display: "none",
    },
    activeContent: {
        display: "block",
    },
});
const roadData = [
    {
        title: "START",
        sec: "The Roadmap is divided into 10 parts which are 10% each.",
        detail: "Most of the flags are placed in the Turtlemint (presale) where we as creators guarantee that if you get one of them that we will happily rebuy the art for 1 ETH. But if you decide to hold the same art until we reach the end of the 10% of the roadmap then you will be guaranteed 1.2 ETH if resold to us. And all the members holding 3 random SpaceTurtles at the end of the Turtlemint will be in our giveaway where we airdrop 20 Space Turtles.",
    },
    {
        title: " 10% REACHED",
        sec: "",
        detail: "The rares without flags are increased and half of the US state flags are in this part of the roadmap, so if you're good at math then you know that there is a great chance of getting one! At the end of this part of the road map we will as previously offer 1.2 ETH for every US state flag as there are not many of them. And as previously If you wish to HODL the artwork with the flag it will be rebought for 1.5 ETH by the creators when we reach 20% of the roadmap. We finish the round with a giveaway of 20 SpaceTurtles to members holding 3 SpaceTurtles. (Those holding Space Turtles from the first round have a greater chance of receiving the giveaway airdrop)",
    },
    {
        title: " 20% REACHED",
        sec: "",
        detail: "We will use our community wallet to promote the project and do certain promotions which we cannot yet disclose but those have been confirmed and agreed on verbally between the lawyers handling it and this will skyrocket the project and this is our biggest confidence that the project will go to the moon. Meanwhile, we continue our journey we start this round by doing a giveaway of 20 Space Turtles to those holding 5 SpaceTurtles in total and 10 of those in the giveaway will be rare, not a bad way to start the round. Other SpaceTurtles with flags are of course in this round as well and after the giveaway, we will reveal the exact amount left in this round and give you a sneak peek.",
    },
    {
        title: " 30% REACHED",
        sec: "",
        detail: "When we reach 30% we will further engage ourselves in an indebt promotion whilst waiting to finalize the papers for the promotion we already have a verbal agreement to. And we start this round by an airdrop giveaway of 20 Turtles which contains 2 super rare SpaceTurtles with flags that we as the owners will rebuy for 1.5 ETH at the spot, but since we've come this far that would be a cheap price to get it for but that's our offer guaranteed. And only those who hold a total of 10 SpaceTurtles will be given a spot in the airdrop giveaway.",
    },
    {
        title: " 40% REACHED",
        sec: "",
        detail: "Wow almost halfway, here is where we've put the second part of the US state flags, so imagine the chance of getting one! There is a total of 25 flags and a lot of rares in this collection. And after we have reached halfway to 50% we will reveal the amount of rares left. And at the end of the round, we will be doing another airdrop giveaway of 20 Space Turtles containing 5 SpaceTurtles with national flags! And this giveaway will only be to those HODLing a SpaceTurtles art with a flag.",
    },
    {
        title: " 50% REACHED",
        sec: "",
        detail: "BIG BANG! This will blow your mind, we are going to the moon! Why? You will understand because this is where we launch our Roadmap 2.0 and our partnerships are revealed and the SpaceTurtles community becomes something very special. At this point it already is, but now that we have passed all the known planets, let's enjoy the ride through the galaxy with a more powerful spaceship that will take us further into the galaxy, and when we look down all we see is those who missed this journey. Suckers",
    },
    {
        title: "ROADMAP 2.0",
        sec: "",
        detail: "Future developments will be announced in Roadmap 2.0.",
    },
];

function RoadMap() {
    const classes = useStyles();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
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
                    {/* <Typography
                        sx={{
                            mt: 5,
                            color: "#fff",
                            mb: 3,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Future developments will be announced in Roadmap 2.0.
                    </Typography> */}
                    <Stack
                        sx={{
                            mt: 5,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton
                            className={
                                toggleState === 1
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(1)}
                        >
                            START{" "}
                        </IconButton>
                        <IconButton
                            className={
                                toggleState === 2
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(2)}
                        >
                            10% REACHED
                        </IconButton>{" "}
                        <IconButton
                            className={
                                toggleState === 3
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(3)}
                        >
                            20% REACHED
                        </IconButton>{" "}
                        <IconButton
                            className={
                                toggleState === 4
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(4)}
                        >
                            30% REACHED
                        </IconButton>
                        <IconButton
                            className={
                                toggleState === 5
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(5)}
                        >
                            40% REACHED
                        </IconButton>
                        <IconButton
                            className={
                                toggleState === 6
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(6)}
                        >
                            50% REACHED
                        </IconButton>
                        <IconButton
                            className={
                                toggleState === 7
                                    ? classes.activated
                                    : classes.normal
                            }
                            onClick={() => toggleTab(7)}
                        >
                            ROADMAP 2.0
                        </IconButton>
                    </Stack>
                </div>{" "}
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-xl-6">
                            {/* <OwlCarousel
                                className="owl-theme"
                                loop
                                items={1}
                                margin={20}
                                autoplay={true}
                                autoplayTimeout={3000}
                                {...options}
                                // animateOut={"fadeOut"}
                                // autoplayHoverPause={true}
                            >
                                {roadData.map((data) => {
                                    return (
                                        <div className="item">
                                            <Road
                                                title={data.title}
                                                sec={data.sec}
                                                detail={data.detail}
                                            />
                                        </div>
                                    );
                                })}
                            </OwlCarousel> */}
                            <Box>
                                {" "}
                                <div
                                    className={
                                        toggleState === 1
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[0].title}
                                        sec={roadData[0].sec}
                                        detail={roadData[0].detail}
                                    />
                                </div>
                                <div
                                    className={
                                        toggleState === 2
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[1].title}
                                        sec={roadData[1].sec}
                                        detail={roadData[1].detail}
                                    />
                                </div>
                                <div
                                    className={
                                        toggleState === 3
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[2].title}
                                        sec={roadData[2].sec}
                                        detail={roadData[2].detail}
                                    />
                                </div>
                                <div
                                    className={
                                        toggleState === 4
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[3].title}
                                        sec={roadData[3].sec}
                                        detail={roadData[3].detail}
                                    />
                                </div>
                                <div
                                    className={
                                        toggleState === 5
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[4].title}
                                        sec={roadData[4].sec}
                                        detail={roadData[4].detail}
                                    />
                                </div>
                                <div
                                    className={
                                        toggleState === 6
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[5].title}
                                        sec={roadData[5].sec}
                                        detail={roadData[5].detail}
                                    />
                                </div>
                                <div
                                    className={
                                        toggleState === 7
                                            ? classes.activeContent
                                            : classes.content
                                    }
                                >
                                    <Road
                                        title={roadData[6].title}
                                        sec={roadData[6].sec}
                                        detail={roadData[6].detail}
                                    />
                                </div>
                            </Box>
                        </div>
                        <div className="col-xl-6">
                            <Box sx={{ width: "100%" }}>
                                {" "}
                                <img
                                    src="../img/butt2.png"
                                    alt=""
                                    width="100%"
                                />
                            </Box>
                        </div>
                    </div>{" "}
                </div>
            </section>
        </>
    );
}

export default RoadMap;
