import React from "react";

const Button = ({ name, link, className }) => {
  return (
    <button className={"font-roboto text-black " + className}>{name}</button>
  );
};

export default Button;
