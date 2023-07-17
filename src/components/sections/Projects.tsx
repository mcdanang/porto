import Image from "next/image";
import Github from "../../../public/svgs/Github";
import ExternalLink from "../../../public/svgs/ExternalLink";

const projects = [
	{
		name: "Groseria",
		desc: "Groseria is a full-featured online grocery web application including authentication, product recommendation, cart, voucher discount, order management, reporting, admin dashboard, etc",
		// url: "https://jcwdol0901.purwadhikabootcamp.com/",
		url: "https://github.com/purwadhikafullstack/JCWDOL0901",
		github: "https://github.com/purwadhikafullstack/JCWDOL0901",
		techs: ["ReactJs", "Tailwind", "NodeJS", "MySQL"],
		image: "/images/groseria.png",
	},
	{
		name: "Qurban Kuy!",
		desc: "Qurban Kuy! is a simple and robust website for a small business that sell livestock (sheep & cow) for Idul Adha Event",
		url: "https://qurban-kuy.vercel.app/",
		github: "https://github.com/mcdanang/qurban-kuy",
		techs: ["NextJS", "Tailwind", "Typescript"],
		image: "/images/qurban-kuy.png",
	},
	{
		name: "Teman Sejati",
		desc: "Teman Sejati is a digital business that provides services to create a visually appealing web-based digital invitation for weddings",
		url: "https://teman-sejati.com/dina-faiz/",
		github: "",
		techs: ["Wordpress", "HTML", "CSS", "JavaScript"],
		image: "/images/teman-sejati.png",
	},
];

export default function Projects() {
	return (
		<section>
			<div className="w-full flex pt-10 h-fit justify-end flex-col gap-16">
				{projects.map((project, index) => {
					return (
						<div className="relative group/project" key={index}>
							<div
								className={`w-full lg:w-2/3 min-h-[360px] flex items-center relative ${
									index % 2 == 0 ? "lg:mr-auto" : "lg:ml-auto"
								}`}
							>
								<Image src={project.image} fill alt="tes" style={{ objectFit: "cover" }} />
							</div>
							<div
								className={`bg-donker/90 lg:bg-[#398470]/50 lg:group-hover/project:bg-donker/0 transition duration-300 w-full lg:w-2/3 h-full absolute top-0 ${
									index % 2 == 0 ? "lg:left-0" : "lg:right-0"
								}`}
							></div>
							<div
								className={`absolute top-0 px-8 pt-8 w-full ${
									index % 2 == 0 ? "lg:right-0" : "lg:left-0"
								}`}
							>
								<h3
									className={`text-sm font-roboto-mono w-fit ${
										index % 2 == 0 ? "ml-auto" : "mr-auto"
									}`}
								>
									Featured Project
								</h3>
								<a className=" cursor-pointer group" href={project.url} target="_blank">
									<h2
										className={`text-3xl font-bold text-white font-roboto-mono mb-6 w-fit group-hover:text-teal transition duration-300 ${
											index % 2 == 0 ? "ml-auto" : "mr-auto"
										}`}
									>
										{project.name}
									</h2>
								</a>
								<div
									className={`lg:bg-[#112240] lg:rounded lg:px-6 md:py-6 lg:w-[480px] ${
										index % 2 == 0 ? "ml-auto text-right" : "mr-auto text-left"
									}`}
								>
									<h3 className="text-sm text-gray font-roboto font-light">{project.desc}</h3>
								</div>
								<div className={`flex w-fit gap-4 py-6 ${index % 2 == 0 ? "ml-auto" : "mr-auto"}`}>
									{project?.techs.map((tech, index) => {
										return (
											<p key={index} className="text-sm text-white font-roboto font-light">
												{tech}
											</p>
										);
									})}
								</div>
								<div className={`flex w-fit gap-4 py-6 ${index % 2 == 0 ? "ml-auto" : "mr-auto"}`}>
									{project.github && (
										<a href={project.github} target="_blank">
											<div className="h-6 group">
												<Github className="stroke-white group-hover:stroke-teal w-5 h-5 group-hover:-translate-y-2 duration-300 transition" />
											</div>
										</a>
									)}
									{project.url && (
										<a href={project.url} target="_blank">
											<div className="h-6 group">
												<ExternalLink className="stroke-white group-hover:stroke-teal w-5 h-5 group-hover:-translate-y-2 duration-300 transition" />
											</div>
										</a>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
