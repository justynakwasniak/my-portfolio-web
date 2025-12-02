import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Explore My Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
