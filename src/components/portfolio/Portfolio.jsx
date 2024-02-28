import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Assignment Tracking Application in ASP.net MVC, C#, JavaScript",
		github: "https://github.com/abiasV/My-Passion-Project.git",
		demo: "https://github.com/abiasV/My-Passion-Project.git",
	},
	{
		id: 2,
		image: IMG2,
		title: "Travel Website CRUD APPlication in NodeJS, MongoDB, and Express",
		github: "https://github.com/abiasV/Node.js-Express-app.git",
		demo: "https://github.com/abiasV/Node.js-Express-app.git",
	},
	{
		id: 3,
		image: IMG3,
		title: "The Rick and Morty API in ReactJs",
		github: "https://github.com/abiasV/Rick-and-Morty.git",
		demo: "https://github.com/abiasV/Rick-and-Morty.git",
	},
	{
		id: 4,
		image: IMG4,
		title: "Egg-Cook Timer in JavaScript, CSS, HTML",
		github: "https://github.com/abiasV/Cook-Timer.git",
		demo: "https://github.com/abiasV/Cook-Timer.git",
	},
	{
		id: 5,
		image: IMG5,
		title: "Taskify App in TypeScript",
		github: "https://github.com/abiasV/TASKIFY-Typescript.git",
		demo: "https://github.com/abiasV/TASKIFY-Typescript.git",
	},
	{
		id: 6,
		image: IMG6,
		title: "Recreating and Redesigning(UX Design) an E-Commerce Website in Figma",
		figma: "https://www.figma.com/file/n0Hu66Q7cnjjBHVcRFHAhd/IXD-Assignment-Tee-On.com-MidFiWireframe?type=design&node-id=2-2&mode=design&t=MJq8Pkvrnfk2Zzz7-0",
		demo: "https://www.figma.com/file/n0Hu66Q7cnjjBHVcRFHAhd/IXD-Assignment-Tee-On.com-MidFiWireframe?type=design&node-id=2-2&mode=design&t=MJq8Pkvrnfk2Zzz7-0",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}

				{/* END OF IMAGE1 */}
			</div>
		</section>
	);
};

export default Portfolio;
