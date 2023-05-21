import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, link, className }) => {
  return (
    <Link to={link} className={"font-roboto text-black " + className}>
      {name}
    </Link>
  );
};

export default Button;
