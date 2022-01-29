import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Slider1 from "./components/Slider1/Slider1";
import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Story/Story";
function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Slider1 />
            <About />
            <Story />
        </>
    );
}

export default App;
