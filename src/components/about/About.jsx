import "./about.css";
import ME from "../../assets/About-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I am curious and motivated to learn how to leverage industry leading
            frameworks and approaching everyday as an opportunity to extend my
            knowledge. Shaping ideas, strong attention to details and bringing
            them alive all the way from brainstorming stage to implementing on
            browsers is something I can not say no to! <br />I have designed and
            developed multiple fully responsive websites and web applications
            using these technologies: JavaScript, Reactjs & Redux, HTML, CSS3
            frameworks such as Bootstrap, Tailwind, and Material UI.
            <br /> 
            • Passion: I love and live what I do <br />
            • Determination: I always find a way to 'figure it out' <br />
            • Unity: I win and lose as a team and the team hold each other accountable <br /> 
            • Agility: I anticipate the unexpected, embrace and adapt to change <br />
            • Courage: I dare to think unconventionally
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets' Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
