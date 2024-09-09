import screen1 from "../images/img123.png";
import "../App.css";

const Projects = () => {
  return (
    <div className="container">
      <h1>
        <em>My Projects</em>
      </h1>
      <p>Here you can find a list of my projects.</p>
      <h2>Beauty Salon Website</h2>
      <a
        href="https://beauty-salon-murex.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={screen1}
          alt="Beauty Salon Website"
          className="project-image"
        />
      </a>
    </div>
  );
};

export default Projects;
