import React from "react";

import Typography from "@mui/material/Typography";

import Faqmain from "./Faqmain";

const faqData = [
    {
        title: "HOW DO I GET A SPACETURTLE?",
        detail: "You mint it at our website https://spaceturtles.vip",
    },
    {
        title: "HOW DO I GET A SPACETURTLE?",
        detail: "You mint it at our website https://spaceturtles.vip",
    },
    {
        title: "HOW DO I GET A SPACETURTLE?",
        detail: "You mint it at our website https://spaceturtles.vip",
    },
];

function Faq() {
    return (
        <>
            <section className="Faq" style={{ marginTop: "150px" }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        mb: 3,
                        color: "#fff",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                    }}
                >
                    FAQS
                </Typography>{" "}
                {faqData.map((data) => {
                    return <Faqmain title={data.title} detail={data.detail} />;
                })}
            </section>
        </>
    );
}

export default Faq;
