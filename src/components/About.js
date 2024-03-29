import { FaReact } from "react-icons/fa6";
import { GiCardExchange } from "react-icons/gi";
import { GiLaurelCrown } from "react-icons/gi";


const About = () => {
  return (
    <div id="about" className="flex justify-center items-center">
      <section className="w-4/5 my-12 border p-8 bg-gray border-6 border-solid rounded-2xl border-gray">
        <h1 className="font-itim text-4xl font-bold py-5 text-center">
          About Me
        </h1>
        <div className="my-9 flex flex-col gap-6 justify-center items-center lg:flex-row lg:justify-around">
          <div className="w-full sm:w-1/2 lg:w-2/6">
            <img className="w-full" src="/img/about.jpg" alt="About" />
          </div>
          <article className="lg:w-1/2">
            <div className="py-4">
              <div className="flex items-center gap-2 pb-2">
                <FaReact className="text-4xl text-orange-500" />
                <h2 className="font-itim max-w-md text-2xl font-medium">
                  Introduction
                </h2>
              </div>
              <p className="font-jaldi max-w-md">
                I am a FullStack Developer with a passion for creating
                responsive and interactive functional web applications.
              </p>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 pb-2">

              <GiLaurelCrown className="text-4xl text-orange-500" />
                <h2 className="font-itim max-w-md text-2xl font-medium">
                  Professional Qualities
                </h2>
              </div>
              <p className="font-jaldi max-w-md">
                I am a quick learner and I am always looking forward to
                expanding my knowledge and skill set.
              </p>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 pb-2">

                <GiCardExchange className="text-4xl text-orange-500" />
                <h2 className="font-itim max-w-md text-2xl font-medium">
                  Career Aspirations
                </h2>
              </div>
              <p className="font-jaldi max-w-md">
                I am excited to contribute to a professional team and work on
                meaningful projects as a Frontend Web Developer.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
