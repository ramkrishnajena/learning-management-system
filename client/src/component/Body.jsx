import React from "react";
import { closeMenu } from "../utils/store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();
  return (
    <div
      onMouseEnter={() => dispatch(closeMenu(true))}
      className='w-full h-screen py-5'
    ></div>
  );
};

export default Body;
