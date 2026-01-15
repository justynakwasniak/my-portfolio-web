import screen1 from "../images/beauty.png";
import screen2 from "../images/weatherwise.png";
import screen3 from "../images/imgeshop.png";
import screen4 from "../images/Memory-Game-03-17-2025_04_14_PM.png"

const Projects = () => {
  return (
    <div className="container mb-3" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <h1 className="section-title">
        My Projects
      </h1>
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
            <h2 className="text-center">Beauty Salon Website</h2>
            <p>A responsive website designed for a beauty salon.</p>
            <a
              className="project-github"
              href="https://github.com/justynakwasniak/beauty-salon"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            {/* Tech Badges */}
            <div style={{marginTop: "12px", marginBottom: "0", display: "flex", gap: "8px", justifyContent: "center"}}>
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Bootstrap</span>
            </div>
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
            <h2 className="text-center">Weather Application</h2>
            <p>
              An application providing real-time weather updates and forecasts.
            </p>
            <a
              className="project-github"
              href="https://github.com/justynakwasniak/apka-pogodowa"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            {/* Tech Badges */}
            <div style={{marginTop: "12px", marginBottom: "0", display: "flex", gap: "8px", justifyContent: "center"}}>
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Bootstrap</span>
            </div>
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
            <h2 className="text-center">E-commerce Application</h2>
            <p>
              An online store application where various products are available.
            </p>
            <a
              className="project-github"
              href="https://github.com/justynakwasniak/e-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            {/* Tech Badges */}
            <div style={{marginTop: "12px", marginBottom: "0", display: "flex", gap: "8px", justifyContent: "center"}}>
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <a
            href="https://memo-game-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={screen4}
              alt="Memory game"
              className="project-image"
            />
          </a>
          <div className="project-details">
            <h2 className="text-center">Memory game</h2>
            <p>
              Let's have some fun with a memory game !
            </p>
            <a
              className="project-github"
              href="https://github.com/justynakwasniak/memo-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            {/* Tech Badges */}
            <div style={{marginTop: "12px", marginBottom: "0", display: "flex", gap: "8px", justifyContent: "center"}}>
              <span className="tech-badge">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
