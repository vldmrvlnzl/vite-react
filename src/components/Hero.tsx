import HeroImage from '../assets/images/HeroImage.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className="hero-section" id="hero">
                <img className="hero-image" src={HeroImage} alt="HeroImage"/>
                <h1 className="hero-title">Vladimir</h1>
            </section>
        </>
    )
}
export default Hero
