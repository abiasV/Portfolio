import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/meee.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <section className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Abbas Vaziri</h1>
        <h2 className="text-light">A Frontend Developer</h2>
        <h5 className="text-light">I'm a Frontend developer specializing in building and occasionally designing exceptional digital experiences. Currently, I'm focused on building responsive Frontend applications while learning up-to-date technologies.</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </section>
    </header>
  )
}

export default Header;