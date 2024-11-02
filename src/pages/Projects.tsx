import screen1 from "../images/logo bs.png";
import screen2 from "../images/weather icon.png";
import screen3 from "../images/imgeshop.png";

const Projects = () => {
  return (
    <div className="container mb-3">
      <h1>
        <em>My Projects</em>
      </h1>
      <p>Here you can find a list of my projects.</p>
      <div className="projects-container">
        <div className="project-card">
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
          <div className="project-details">
            <h2>Beauty Salon Website</h2>
            <p>A responsive website designed for a beauty salon.</p>
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://weather-app--ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={screen2}
              alt="Weather Application"
              className="project-image"
            />
          </a>
          <div className="project-details">
            <h2>Weather Application</h2>
            <p>
              An application providing real-time weather updates and forecasts.
            </p>
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://ecommerce3-dusky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={screen3}
              alt="The every day shop"
              className="project-image"
            />
          </a>
          <div className="project-details">
            <h2>E-commerce Application</h2>
            <p>
              An online store application where various products are available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
