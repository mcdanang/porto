import Image from "next/image";
import Landing from "../components/sections/Landing";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Layout from "../components/Layout";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-24 ">
      <Navbar />
      <Landing />
      <Layout id="about" no="01." title="About Me">
        <About/>
      </Layout>
      <Layout id="projects" no="02." title="Some Things I've Built">
        <Projects/>
      </Layout>
      <Layout id="contact" no="03." title="What's Next?">
        <Contact/>
      </Layout>
      <Footer />
    </main>
  );
}
