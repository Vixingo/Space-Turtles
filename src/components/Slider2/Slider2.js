import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

function Slider2() {
    return (
        <>
            <section className="Slider2 " style={{ marginBottom: "100px" }}>
                {" "}
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    items={7}
                    autoplay={true}
                    autoplayTimeout={2000}
                >
                    <div className="item">
                        <img src="../img/Slide2/270.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/295.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/821.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/824.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/960.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/1085.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/1217.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/1626.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/2234.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/2443.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/2450.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/2632.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/3579.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/3909.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/6861.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/7483.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/7929.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/8402.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/8729.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="../img/Slide2/9573.png" alt="" />
                    </div>
                </OwlCarousel>
            </section>
        </>
    );
}

export default Slider2;
