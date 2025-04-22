import img1 from "../assets/images/CardImage1.png"
import img2 from "../assets/images/CardImage2.jpeg"
import img3 from "../assets/images/CardImage3.png"
import img4 from "../assets/images/CardImage4.png"
import Card from "./Card.jsx";
import './Project.css'

const Project = () => {
    const cardImages = [img1, img2, img3, img4]
    return (
        <>
            <section className="project" id="project">
                <h1>Projects</h1>
                <div className="card-grid">
                    {cardImages.map((img, index) => (
                        <Card key={index} image={img}/>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Project
