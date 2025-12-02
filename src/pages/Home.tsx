import flowerImage from "../images/photo-flower.avif";

const Home = () => {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ paddingTop: "80px" }}>
      <div className="container flex-grow-1">
        <div className="row align-items-center">
          <div className="col-md-6 mt-5">
            <h1 className="mb-custom custom-heading text-start mb-5">
              
              Hello, I'm Justyna, a Junior Frontend Developer
              
            </h1>
            <p className="text-start">
              While my professional journey is just beginning,
              I've spent countless hours crafting elegant, user-centric
              applications that merge form and function. My background in
              journalism and hands-on experience in diverse fields have honed my
              problem-solving skills and creative vision. Join me as I bring
              innovative web solutions to life, one pixel at a time.
            </p>
            <div className="text-center mt-4 d-flex gap-3 justify-content-center flex-wrap">
              <button
                className="btn-home-light"
                onClick={() => handleScrollTo("projects")}
              >
                My Projects
              </button>
              <button
                className="btn-home-dark"
                onClick={() => handleScrollTo("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <img src={flowerImage} alt="Creative Work" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
