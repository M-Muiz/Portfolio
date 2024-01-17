import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";


const InfoCard = () => {
  return (
    <div className="md:w-2/5 w-full flex flex-col justify-center items-center gap-3">
      <img src="img/main.webp" alt="Contact Me" />
      <h1 className="font-itim max-w-md text-2xl font-bold">M.Muiz</h1>
      <h2 className="font-jaldi max-w-md text-xl font-medium">
        Frontend Web Developer
      </h2>
      <h3 className="font-itim max-w-md text-xl font-medium ">
        Connect with me
      </h3>
      <div className="flex items-center gap-5 text-2xl">
        <Link
          to="https://github.com/M-Muiz"
          target="_blank"
          className="cursor-pointer hover:text-orange-500"
        >
          <IoLogoGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/muhammad-muiz-siddiqui-302287273/"
          target="_blank"
          className="cursor-pointer hover:text-orange-500"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
