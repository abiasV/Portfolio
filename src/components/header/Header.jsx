import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Profile.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header id="home">
			<section className="container header__container">
				<h5>Hi, I'm</h5>
				<h1>Abbas Vaziri</h1>
				<h2 className="text-light">A Full Stack Developer</h2>
				<h5 className="text-light">
					Experienced Full stack developer (Nodejs, Reactjs) with a demonstrated
					history of working in the information technology and manufacturing
					industry. Skilled in Node.js, React.js, GraphQL, REST, Jest, HTML,
					CSS, JavaScript, MongoDB, and MySQL.
				</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</section>
		</header>
	);
};

export default Header;
