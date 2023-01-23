const Button = ({ text, classes, href }) => {
  return href ? (
    <a
      className={`text-green relative group/button mt-s4 ${classes}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-dark-green h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-s3 -z-10"></div>
      <span className="p-s2">{text}</span>
    </a>
  ) : (
    <button className={`text-green relative group/button mt-s4 ${classes}`}>
      <div className="bg-dark-green h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-s3 -z-10"></div>
      <span className="p-s2">{text}</span>
    </button>
  );
};

export default Button;
