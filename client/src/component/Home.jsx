import React from "react";
import SingleCourse from "./SingleCourse";

const Home = () => {
  return (
    <div>
      <div className='w-full h-2/5 flex gap-5 border-black mt-5'>
        <SingleCourse />
        <SingleCourse />
        <SingleCourse />
        <SingleCourse />
        <SingleCourse />
      </div>
    </div>
  );
};

export default Home;
