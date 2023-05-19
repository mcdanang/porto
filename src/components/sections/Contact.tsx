export default function Contact() {
  return (
    <section>
      <h1 className="text-5xl font-bold text-white pt-12 pb-4 text-center">
        Get In Touch
      </h1>
      <p className="text-gray text-lg text-center">
        My inbox is always open for you! <br /> Want to send me a message? Don't
        hesitate.
      </p>
      <div className="flex justify-center pt-8">
        <a href="mailto:mdanangpriambodo@gmail.com" target="_blank">
          <div className="cursor-pointer w-fit">
            <div className="transition bg-donker py-5 px-8 border rounded-md font-roboto-mono hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px]">
              Say Hello
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
