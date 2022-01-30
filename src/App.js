import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Slider1 from "./components/Slider1/Slider1";
import Slider2 from "./components/Slider2/Slider2";
import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Story/Story";
import RoadMap from "./components/RoadMap/RoadMap";
import Team from "./components/Team/Team";
import Faq from "./components/FAQ/Faq";
function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Slider1 />
            <About />
            <RoadMap />
            <Faq />
            <Team />
            <Slider2 />
            <Story />
        </>
    );
}

export default App;
