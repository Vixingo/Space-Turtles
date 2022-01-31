import React from "react";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
function Navbar() {
    return (
        <>
            <section
                className="Navbar"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(36,4,69,1) 0%, rgba(2,0,21,1) 100%)",
                    boxShadow: "0 2px 8px 0 hsla(0,0%,98%,.2)",
                    position: "fixed",
                    width: "100%",
                    top: "0",
                    zIndex: "1000",
                }}
            >
                <div className="container">
                    <nav className="navbar navbar-expand-xl navbar-dark p-0">
                        <div className="container-fluid">
                            <a className="navbar-brand p-0" href="#">
                                <img
                                    src="../img/navlogo.png"
                                    alt=""
                                    width="90px"
                                />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center ">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            aria-current="page"
                                            href="#hero"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#RoadMap">
                                            Roadmap
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#faq">
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Team">
                                            Team
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Story">
                                            Story
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Stack sx={{ flexDirection: "row" }}>
                                            <a
                                                className="nav-link"
                                                href="https://twitter.com/SpaceTurtlesNFT"
                                            >
                                                <IconButton
                                                    sx={{
                                                        color: "#fff",
                                                        borderRadius: "10px",
                                                        transition: "0.2s",
                                                        ":hover": {
                                                            color: "#7da275",
                                                            backgroundColor:
                                                                "#fff",
                                                            boxShadow:
                                                                " 0 0 10px #fff",
                                                        },
                                                    }}
                                                >
                                                    <i class="fab fa-twitter"></i>
                                                </IconButton>
                                            </a>
                                            <a
                                                className="nav-link"
                                                href="https://discord.gg/6h5PFSUkFu"
                                            >
                                                <IconButton
                                                    sx={{
                                                        color: "#fff",
                                                        borderRadius: "10px",
                                                        transition: "0.2s",
                                                        ":hover": {
                                                            color: "#7da275",
                                                            backgroundColor:
                                                                "#fff",
                                                            boxShadow:
                                                                " 0 0 10px #fff",
                                                        },
                                                    }}
                                                >
                                                    <i class="fab fa-discord"></i>
                                                </IconButton>
                                            </a>
                                        </Stack>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Story">
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    color: "#fff",
                                                    borderColor: "#fff",
                                                    fontWeight: "bold",
                                                    fontSize: "16px",
                                                    fontFamily: "Montserrat",
                                                    transition: "0.2s",

                                                    ":hover": {
                                                        borderColor: "#7da275",
                                                        color: "#7da275",
                                                        backgroundColor: "#fff",
                                                        boxShadow:
                                                            " 0 0 20px #fff",
                                                    },
                                                }}
                                            >
                                                Connect Wallet
                                            </Button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Navbar;
