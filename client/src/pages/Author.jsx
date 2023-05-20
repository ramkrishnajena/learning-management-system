import React from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();
  return <div>Author{id}</div>;
};

export default Author;
