import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
function Slider1() {
    const options = {
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
                    {...options}
                >
                    <div className="item">
                        <img src="../img/slide1/ALBANIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/ARGENTINA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/AUSTRALIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/BELGIUM.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/BOSNIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/BRAZIL.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/CHILE.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/COLOMBIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/CROATIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/DENMARK.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/ENGLAND.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/INDIA.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/IRAN.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/ITALY.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/SWEDEN.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/SWITZERLAND.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/THAILAND.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/TURKEY.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/UNITED KINGDOM.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/slide1/USA.png" alt="" />
                    </div>
                </OwlCarousel>
            </section>
        </>
    );
}

export default Slider1;
