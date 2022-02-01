import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
function Slider1() {
    const options = {
        slideTransition: "linear",

        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            1200: {
                items: 7,
            },
        },
    };
    return (
        <>
            <section className="Slider1">
                {" "}
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    autoplay={true}
                    autoplayTimeout={2000}
                    autoplaySpeed={2000}
                    {...options}
                >
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-ALBANIA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-ARGENTINA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-AUSTRALIA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-BELGIUM.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-BOSNIA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-BRAZIL.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-CHILE.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-COLOMBIA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-CROATIA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-DENMARK.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-ENGLAND.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-INDIA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-IRAN.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-ITALY.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-SWEDEN.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-SWITZERLAND.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-THAILAND.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-TURKEY.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-UNITED KINGDOM.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/Slide1/Optimized-USA.png"
                            style={{
                                border: "1px solid #fff",
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                </OwlCarousel>
            </section>
        </>
    );
}

export default Slider1;
