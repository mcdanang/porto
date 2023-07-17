import Image from "next/image";

const technologies = [
	{
		name: "TypeScript",
		logo: "/svgs/technologies/TypeScript.svg",
	},
	{
		name: "TypeScript",
		logo: "/svgs/technologies/TypeScript.svg",
	},
	{
		name: "TypeScript",
		logo: "/svgs/technologies/TypeScript.svg",
	},
	{
		name: "TypeScript",
		logo: "/svgs/technologies/TypeScript.svg",
	},
	{
		name: "TypeScript",
		logo: "/svgs/technologies/TypeScript.svg",
	},
];

export default function Projects() {
	return (
		<section>
			<div className="w-full flex justify-center pt-10 h-fit">
				<div className="relative">
					<Image src="/images/qurban-kuy.png" width={800} height={800} alt="tes" />
					<div className="bg-donker/90 lg:bg-teal/50 lg:hover:bg-teal/0 transition duration-300 w-full h-full absolute top-0"></div>
				</div>
			</div>
		</section>
	);
}
