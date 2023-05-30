import Image from "next/image";
import Codepen from "../../../public/svgs/Codepen";
import Linkedin from "../../../public/svgs/LinkedIn";
import Github from "../../../public/svgs/Github";

export default function Footer() {
  return (
    <footer className="w-screen px-24 pt-6">
      <div className="flex-col items-center text-center">
        <div className="hidden md:block">
          <a
            href="mailto:mdanangpriambodo@gmail.com"
            target="_blank"
            className="font-roboto-mono text-[14px] tracking-widest text-white font-light sm:fixed sm:bottom-[15rem] sm:-right-[5.3rem]  group peer"
          >
            <div className="w-64 group-hover:text-teal group-hover:-translate-y-2 duration-500 transition sm:rotate-90">mdanangpriambodo@gmail.com</div>
          </a>
          <div className="border-r-[3px] h-36 border-r-gray sm:fixed sm:-bottom-12 sm:right-12 peer-hover:-translate-y-2 duration-500"></div>
        </div>
        <div>
          <div className="flex justify-center gap-6 gap-y-8 md:flex-col md:fixed md:bottom-32 md:left-6">
            <a href="https://www.linkedin.com/in/mdanangp/" target="_blank">
              <div className="h-6 group">
                <Linkedin className="fill-white group-hover:fill-teal w-6 h-6 group-hover:-translate-y-2 duration-300 transition" />
              </div>
            </a>
            <a href="https://codepen.io/mcdanang" target="_blank">
              <div className="h-6 group">
                <Codepen className="stroke-white group-hover:stroke-teal w-6 h-6 group-hover:-translate-y-2 duration-300 transition" />
              </div>
            </a>
            <a href="https://github.com/mcdanang/" target="_blank">
              <div className="h-6 group">
                <Github className="stroke-white group-hover:stroke-teal w-6 h-6 group-hover:-translate-y-2 duration-300 transition" />
              </div>
            </a>
          </div>
          <div className="hidden md:block border-r-[3px] h-36 border-r-gray sm:fixed sm:-bottom-12 sm:left-9 peer-hover:-translate-y-2 duration-300"></div>
        </div>
        <p className=" py-6">
          <span className="font-roboto-mono text-white">
            Designed & Built by{" "}
          </span>
          <a href="#" className="font-roboto">
            M Danang Priambodo
          </a>
        </p>
      </div>
    </footer>
  );
}
