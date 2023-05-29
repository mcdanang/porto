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
      <div className="md:flex">
        <div className="text-gray text-md py-4">
          <p>
            Hello! My name is Youssef Ragaey, I&apos;m{" "}
            {new Date().getFullYear() - new Date("2007-05-01").getFullYear()}{" "}
            years old and Interested in computer science. I started programming
            by taking{" "}
            <a href="https://tinyurl.com/2kdaobma" target="_blank" className="">
              CS50
            </a>{" "}
            course from harvard in 2020 when I decided to learn how to code and
            make stuff out of the box.
          </p>
          <br />
          <p>
            In 2021, I started to think about the internet and how it works, so
            I focused on web development (especially front-end) and doing my
            best here.
          </p>
          <br />
          <p>Here are a few technologies I&apos;ve been working with:</p>
          <ul className="grid grid-cols-2 sm:max-md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] py-4">
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="flex bg-dark/5 py-2 px-3 rounded-lg items-center hover:-translate-y-2 duration-300 transition"
              >
                <div className="p-2 bg-[skyblue]/20 rounded-lg">
                  <Image
                    alt={tech.name}
                    src={tech.logo}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="pl-2 w-20">
                  <text className="text-white text-sm">{tech.name}</text>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center px-8 group">
          <div className="relative w-60 h-60 mr-4">
            <Image
              src="/logo.webp"
              fill
              className="rounded-lg"
              alt="mcdanang"
            />
          </div>
          <div className="absolute -z-10 mr-4 transition duration-300 translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 w-60 h-60 border rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
