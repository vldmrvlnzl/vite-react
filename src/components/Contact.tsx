import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className="contact-section" id="contact">
                <h2>Contact Me</h2>

                <div className="social-icons">
                    <a href="https://www.facebook.com/vladimir.valenzuela.566321/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/_daaalv/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/vldmrvlnzl" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/valenzuela-vladimir-62785b27a/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your Gmail" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </>
    )
}
export default Contact
