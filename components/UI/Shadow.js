const Shadow = ({ children, classes }) => {
  return (
    <div
      className={`shadow rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] ${classes}`}
    >
      {children}
    </div>
  );
};

export default Shadow;
