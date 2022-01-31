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
                    autoplayTimeout={1000}
                    autoplaySpeed={1000}
                    {...options}
                >
                    <div className="item">
                        <img src="../img/slide1/Optimized-ALBANIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img
                            src="../img/slide1/Optimized-ARGENTINA.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/slide1/Optimized-AUSTRALIA.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-BELGIUM.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-BOSNIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-BRAZIL.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-CHILE.png" alt="" />
                    </div>
                    <div className="item">
                        <img
                            src="../img/slide1/Optimized-COLOMBIA.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-CROATIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-DENMARK.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-ENGLAND.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-INDIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-IRAN.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-ITALY.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-SWEDEN.png" alt="" />
                    </div>
                    <div className="item">
                        <img
                            src="../img/slide1/Optimized-SWITZERLAND.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/slide1/Optimized-THAILAND.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-TURKEY.png" alt="" />
                    </div>
                    <div className="item">
                        <img
                            src="../img/slide1/Optimized-UNITED KINGDOM.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/Optimized-USA.png" alt="" />
                    </div>
                </OwlCarousel>
            </section>
        </>
    );
}

export default Slider1;
