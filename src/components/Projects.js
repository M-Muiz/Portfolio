import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "NFT LandingPage",
      image: "/img/nft.png",
      link: "https://m-muiz.github.io/NFT-MArketPlace-LandingPage/",
      code: "https://github.com/M-Muiz/NFT-MArketPlace-LandingPage",
    },

    {
      id: 2,
      name: "Grilli Master",
      image: "/img/grill.png",
      link: "https://m-muiz.github.io/Grilli-Master/",
      code: "https://github.com/M-Muiz/Grilli-Master",
    },

    {
      id: 3,
      name: "Travel Agency",
      image: "/img/agency.png",
      link: "https://m-muiz.github.io/Agency-website/index.html",
      code: "https://github.com/M-Muiz/Agency-website",
    },

    {
      id: 4,
      name: "Mern Estate",
      image: "/img/mern.png",
      link: "https://mern-stack-estate-app-ieba.vercel.app/",
      code: "https://github.com/M-Muiz/MERN_STACK_ESTATE_APP",
    },
  ];

  return (
    <section
      id="projects"
      className=" bg-black text-white p-8 flex flex-col justify-center items-center tallscreen:section-min-height widescreen:section-min-height"
    >
      <h1 className="font-itim text-4xl font-bold text-center py-4">
        My Projects
      </h1>
      <div className="p-1 my-12 flex flex-col flex-wrap justify-center items-center sm:flex-row gap-10">
        {projects.map((project) => (
          <div
            className="max-w-xs p-5 border border-orange-500 bg-black rounded-3xl shadow-inner flex flex-col shadow-orange-500"
            key={project.id}
          >
            <img
              className="w-full h-48 rounded-2xl"
              src={project.image}
              alt={project.name}
            />
            <h2 className="font-itim text-2xl pt-6 font-bold">
              {project.name}
            </h2>
            <div className="font-jaldi w-full flex justify-between items-center pt-4">
              <Link
                className="w-1/2 text-xl font-medium bg-black border border-orange rounded-full text-white text-center py-3 hover:bg-orange-500 hover:text-blackcursor-pointer"
                to={project.link}
                target="_blank"
              >
                Demo
              </Link>
              <Link
                className="font-medium text-4xl py-3"
                to={project.code}
                target="_blank"
              >
                <IoLogoGithub className="text-4xl text-orange-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
