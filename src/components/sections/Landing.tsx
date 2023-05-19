import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-[calc(100vh)] flex items-center">
      <div className="">
        <h3 className="text-xl font-roboto-mono pb-6 pt-28">Hi, my name is</h3>
        <h1 className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-roboto text-white leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
          M Danang Priambodo.
        </h1>
        <h2 className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-roboto text-gray leading-tight md:leading-tight lg:leading-tight xl:leading-tight capitalize">
          I build stuff for the web.
        </h2>
        <p className="text-lg font-roboto text-gray md:w-2/3 my-8 max-w-2xl">
          I&apos;ve learned front-end development since I was 14. Now I&apos;m
          focusing on improving my skills and knowledge. You can see my work on{" "}
          <span className="relative">
            <a
              href="https://github.com/mcdanang/"
              target="_blank"
              className="text-teal before:content-[''] before:w-0 before:h-[1px] before:absolute before:bottom-0 before:left-0 before:bg-teal before:hover:w-full before:transition-all before:duration-300"
            >
              GitHub
            </a>
          </span>{" "}
          for more details. Have a nice day!
        </p>
        <div className="flex gap-10">
          <a href="#projects">
            <div className="my-12 cursor-pointer">
              <div className="transition bg-donker py-5 px-8 border rounded-md font-roboto-mono hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px]">
                Check out my work!
              </div>
            </div>
          </a>
          <Link href="/resume" target="_blank" rel="noreferrer">
            <div className="my-12 cursor-pointer">
              <div className="transition bg-donker py-5 px-8 border rounded-md font-roboto-mono hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px]">
                Resume
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
