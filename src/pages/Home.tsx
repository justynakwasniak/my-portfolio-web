import flowerImage from "../images/photo-flower.avif";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-5">
            <h1 className="mb-custom custom-heading text-center mb-5">
              <em>
                Welcome to my place - dedicated to delivering excellence and
                creativity
              </em>
            </h1>
            <p className="text-center">
              I’m Justyna, a passionate Front-End Developer with a keen eye for
              UX/UI design. While my professional journey is just beginning,
              I’ve spent countless hours crafting elegant, user-centric
              applications that merge form and function. My background in
              journalism and hands-on experience in diverse fields have honed my
              problem-solving skills and creative vision. Join me as I bring
              innovative web solutions to life, one pixel at a time.
            </p>
          </div>

          <div className="col-md-6 mt-5">
            <img src={flowerImage} alt="Creative Work" className="img-fluid" />
          </div>
        </div>
      </div>

      <footer className="py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2025 Justyna Kwaśniak </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
