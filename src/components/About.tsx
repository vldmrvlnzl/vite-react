import './About.css'

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <h1>About</h1>
                <p className="about-text">A third-year Information Technology student specializing in web development.
                    Dedicated to designing and developing responsive, user-friendly websites. Continuously exploring
                    modern frameworks, best practices, and emerging technologies to deliver efficient and scalable web
                    solutions.</p>
            </section>
            <section className="tech-skills">
                <h2>Technology</h2>
                <div className="tech-icons">
                    <i className="fab fa-python"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-django"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                </div>
            </section>
        </>
    )
}
export default About
