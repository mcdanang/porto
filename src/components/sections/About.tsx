import Image from "next/image";

const technologies = [
	{
		name: "HTML",
		logo: "/svgs/technologies/HTML.svg",
	},
	{
		name: "CSS",
		logo: "/svgs/technologies/CSS.svg",
	},
	{
		name: "JavaScript",
		logo: "/svgs/technologies/JavaScript.svg",
	},
	{
		name: "TypeScript",
		logo: "/svgs/technologies/TypeScript.svg",
	},
	{
		name: "React",
		logo: "/svgs/technologies/React.svg",
	},
	{
		name: "NodeJS",
		logo: "/svgs/technologies/NodeJS.svg",
	},
	{
		name: "Redux",
		logo: "/svgs/technologies/Redux.svg",
	},
	{
		name: "Redis",
		logo: "/svgs/technologies/Redis.svg",
	},
	{
		name: "MySQL",
		logo: "/svgs/technologies/MySQL.svg",
	},
	{
		name: "PostgreSQL",
		logo: "/svgs/technologies/PostgreSQL.svg",
	},
	{
		name: "MongoDB",
		logo: "/svgs/technologies/MongoDB.svg",
	},
	{
		name: "Git",
		logo: "/svgs/technologies/Git.svg",
	},
	{
		name: "NextJS",
		logo: "/svgs/technologies/NextJS.svg",
	},
	{
		name: "Tailwind",
		logo: "/svgs/technologies/Tailwind.svg",
	},
	{
		name: "Laravel",
		logo: "/svgs/technologies/Laravel.svg",
	},
	{
		name: "Go",
		logo: "/svgs/technologies/Golang.svg",
	},
	{
		name: "Docker",
		logo: "/svgs/technologies/Docker.svg",
	},
	{
		name: "Python",
		logo: "/svgs/technologies/Python.svg",
	},
	{
		name: "NestJS",
		logo: "/svgs/technologies/NestJS.svg",
	},
	{
		name: "Java",
		logo: "/svgs/technologies/java.svg",
	},
	{
		name: "Spring Boot",
		logo: "/svgs/technologies/spring.svg",
	},
];

export default function About() {
	return (
		<section>
			<div className="mt-8 lg:flex">
				<div className="text-gray text-md py-4 sm:pr-10">
					<p>
						Hello! My name is Muhamad Danang Priambodo, an engineering graduate with over three
						years of experience in designing, developing, and integrating both front-end and
						back-end applications. Proficient in web technologies and frameworks, including HTML,
						CSS, JavaScript, TypeScript, PHP, Java, and Go, as well as skilled in utilizing Next.js,
						Nest.js, Laravel, Spring Boot, and databases such as PostgreSQL and MongoDB.
					</p>
					<p>
						<br />I have successfully integrated securities crowdfunding applications with e-KYC,
						digital signature providers, and bank APIs for payment, thereby enhancing user
						workflows. I ensured compliance with Financial Services Authority regulations, which
						helped the company secure its business permit.
					</p>
					<br />
					<p>Here are a few technologies I&apos;ve been working with:</p>
					<br />
					<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] py-4">
						{technologies.map(tech => (
							<li
								key={tech.name}
								className="flex bg-dark/5 py-2 px-3 rounded-lg items-center hover:-translate-y-2 duration-300 transition"
							>
								<div className={`p-2 rounded-lg`}>
									<Image alt={tech.name} src={tech.logo} width={20} height={20} />
								</div>
								<div className="pl-2 w-20">
									<text className="text-white text-sm">{tech.name}</text>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="flex justify-center items-center px-8">
					<a
						className="flex cursor-pointer group"
						href="https://github.com/mcdanang/"
						target="_blank"
					>
						<div className="relative w-60 h-60 mr-4">
							<Image
								src="/logo_mcdanang.webp"
								fill
								className="rounded-lg"
								alt="mcdanang"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="absolute -z-10 mr-4 transition duration-300 translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 w-60 h-60 border rounded-lg"></div>
					</a>
				</div>
			</div>
		</section>
	);
}
