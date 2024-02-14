import { Link } from "react-scroll";
import resume from "../cv.pdf";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-12 flex flex-col-reverse items-center justify-center gap-5 text-white p-8 sm:flex-row tallscreen:section-min-height widescreen:section-min-height"
    >
    <img className="sm:w-2/6" src="/img/main.webp" alt="Hero" />
      <article className="sm:w-2/4 flex flex-col justify-center items-center text-center gap-4 py-5 sm:items-start sm:text-left sm:ml-24">
        <span className="font-kavoon max-w-md sm:w-full text-orange-500 font-medium text-5xl lg:text-7xl">
          Hello I'm
        </span>
        <h1 className="font-itim md:w-full text-white font-medium text-3xl lg:text-5xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Frontend Developer","Backend Developer", "React Js Developer"],
            }}
          />
        </h1>
        <p className="font-jaldi md:w-full text-white lg:text-xl">
          I'm a FullStack Developer with a passion for creating interactive and
          user-friendly web applications.
        </p>
        <div className="font-jaldi w-full md:max-w-md flex flex-col items-center gap-4 sm:flex-row sm:items-start pt-3">
          <Link
            to="contact"
            smooth="true"
            offset={-100}
            duration={500}
            className="w-full sm:w-2/5 border-2 border-solid border-orange-500 rounded-full text-xl p-3 font-semibold text-center hover:bg-orange-500 hover:text-black cursor-pointer"
          >
            Hire Me
          </Link>
          <a
            href={resume}
            download="Resume"
            className="w-full text-center cursor-pointer sm:w-3/5 border-2 border-solid border-orange-500 rounded-full text-xl p-3 font-semibold  hover:bg-orange-500 hover:text-black"
          >
            Download CV
          </a>
        </div>
      </article>
    </section>
  );
};

export default Hero;
