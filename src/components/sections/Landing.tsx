"use client";

import Link from "next/link";
import Typewriter from "react-ts-typewriter";

export default function Landing() {
	return (
		<div className="h-[calc(100vh)] flex items-center">
			<div className="">
				<h3 className="text-xl font-roboto-mono pb-6 pt-28">Hi, my name is</h3>
				<h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-roboto text-white leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
					M Danang Priambodo.
				</h1>
				<h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-roboto text-gray leading-tight md:leading-tight lg:leading-tight xl:leading-tight capitalize">
					<Typewriter
						text={["Full Stack Web Developer.", "Back End Developer.", "Engineer."]}
						loop
						delay={1000}
						speed={50}
					/>
				</h2>
				<p className="text-lg font-roboto text-gray md:w-2/3 my-8 max-w-2xl">
					I am an engineer and a full-stack web developer. I started programming in 2021 and have
					been continuously improving my skills and knowledge. I am currently open to new work
					opportunities. For more details, you can check out my work on{" "}
					<span className="relative">
						<a
							href="https://github.com/mcdanang/"
							target="_blank"
							className="text-teal relative before:z-10 before:content-[''] before:w-0 before:h-[1px] before:absolute before:bottom-0 before:left-0 before:bg-teal before:hover:w-full before:transition-all before:duration-300"
						>
							GitHub
						</a>
					</span>
					. Have a nice day!
				</p>
				<div className="md:flex gap-10">
					<div className="my-6 flex justify-center">
						<a href="#projects" className="cursor-pointer">
							<div className="transition text-center bg-donker py-2 px-4 md:py-5 md:px-8 border rounded-md font-roboto-mono hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px]">
								Check out my work!
							</div>
						</a>
					</div>
					<div className="my-6 flex justify-center">
						<Link href="/resume" target="_blank" rel="noreferrer">
							<div className="transition cursor-pointer text-center bg-donker py-2 px-4 md:py-5 md:px-8 border rounded-md font-roboto-mono hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px]">
								Resume
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
