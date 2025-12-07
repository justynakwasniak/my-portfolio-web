import cvFile from "../assets/JustynaKwasniakCV.pdf";
import ava from "../images/zdjp.jpg";

const AboutMe = () => {
  return (
    <div className="container about-me" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-3 section-title">
            About Me
          </h1>
          <h4>WHO AM I?</h4>
          <p>
            Hello! I’m Justyna, a Front-End Developer with a background in
            Journalism and a passion for creating beautiful, functional web
            experiences. My journey began with a Bachelor's degree in
            Journalism, where I honed my storytelling skills. Driven by a desire
            to craft engaging digital experiences, I completed an intensive
            course in front-end development.
          </p>
          <h4>EXPERIENCE</h4>
          <p>
            Though my professional experience includes roles in the medical and
            hospitality sectors, these diverse roles have sharpened my
            problem-solving abilities and attention to detail. I’m excited to
            apply these skills to the tech world, where I specialize in HTML,
            CSS, JavaScript, TypeScript, and React.
          </p>
          <h4>INTERESTS</h4>
          <p>
            Beyond coding, I’m deeply interested in UX/UI design and committed
            to creating not only visually appealing but also highly functional
            and user-centric websites and applications. Outside of tech, you’ll
            find me practicing yoga and Pilates, exploring Slavic mythology,
            embarking on new adventures, and continually learning about the
            latest technologies.
          </p>
          <h4>RESUME</h4>
          <p>
            Curious to learn more about my professional journey and skills?
            Click the button below to view my CV. It provides a detailed
            overview of my education, experience, and technical skills.
          </p>
          <a href={cvFile} target="_blank" rel="noopener noreferrer">
            <button className="btn-custom mb-5">View My CV</button>
          </a>
        </div>

        <div className="col-md-6 text-center d-flex justify-content-center align-items-start">
        <img src={ava} alt="Justyna's Profile" className="img-fluid" style={{ maxWidth: "80%" }} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
