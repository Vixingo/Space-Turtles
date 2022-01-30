import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

function Slider2() {
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
            <section className="Slider2 " style={{ marginBottom: "100px" }}>
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
                        <img src="../img/Slide2/Optimized-270.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-295.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-821.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-824.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-960.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-1085.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-1217.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-1626.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-2234.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-2443.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-2450.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-2632.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-3579.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-3909.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-6861.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-7483.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-7929.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-8402.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-8729.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/Optimized-9573.png" alt="" />
                    </div>
                </OwlCarousel>
            </section>
        </>
    );
}

export default Slider2;
