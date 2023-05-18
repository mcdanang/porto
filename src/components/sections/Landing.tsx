export default function Landing() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center">
      <div className="">
        <h3 className="text-xl font-roboto-mono pb-6">Hi, my name is</h3>
        <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-roboto text-white leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
          M Danang Priambodo.
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-roboto text-gray leading-tight md:leading-tight lg:leading-tight xl:leading-tight capitalize">
          I build stuff for the web.
        </h2>
        <p className="text-lg font-roboto text-gray md:w-2/3 my-8 max-w-2xl">
          I&apos;ve learned front-end development since I was 14. Now I&apos;m
          focusing on improving my skills and knowledge. You can see my work on{" "}
          <a
            href="https://github.com/youssef579"
            target="_blank"
            className="text-teal"
          >
            GitHub
          </a>{" "}
          for more details. Have a nice day!
        </p>

        <a href="#projects">
          <div className="group bg-teal w-fit h-fit rounded-md my-12 cursor-pointer">
            <div className="transition bg-donker py-5 px-8 border rounded-md font-roboto-mono group-hover:-translate-y-1 group-hover:-translate-x-1">
              Check out my work!
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
