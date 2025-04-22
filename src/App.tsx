import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Project from "./components/Project.tsx";
import Contact from "./components/Contact.tsx";

function App() {


    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Project/>
            <Contact/>
        </>
    )
}

export default App
