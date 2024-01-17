const Footer = () => {

  return (
    <footer className="font-jaldi p-10 text-center text-xl">
      <div className="mx-auto bg-orange-500 mb-10 w-full h-[2px] rounded-full"></div>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>

  );
};

export default Footer;
