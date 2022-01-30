import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
function Navbar() {
    return (
        <>
            <section
                className="Navbar"
                style={{
                    backgroundColor: "#000123",
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
                                                href="#Story"
                                            >
                                                <IconButton
                                                    sx={{
                                                        color: "#fff",
                                                        ":hover": {
                                                            color: "#7da275",
                                                        },
                                                    }}
                                                >
                                                    <TwitterIcon />
                                                </IconButton>
                                            </a>
                                            <a
                                                className="nav-link"
                                                href="#Story"
                                            >
                                                <IconButton
                                                    sx={{
                                                        color: "#fff",
                                                        ":hover": {
                                                            color: "#7da275",
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
                                                    ":hover": {
                                                        borderColor: "#fff",
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
