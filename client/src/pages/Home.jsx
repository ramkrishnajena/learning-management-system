import React from "react";
import SingleCourse from "./SingleCourse";
import Hero from "../component/Hero";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { courseData } from "../lmsdata";
const Home = () => {
  return (
    <div className='w-full h-auto'>
      <Hero />
      <section className='mt-10 px-16'>
        <h4 className='font-bold font-roboto text-2xl '>
          Best Course Suggestion according to Your Search
        </h4>
        <div className='w-full h-fit  flex gap-5 my-5 relative'>
          <div className='btn absolute top-2/4 -left-10 text-3xl xs:hidden'>
            <BsArrowLeftSquareFill />
          </div>
          {Object.values(courseData.courses).map((data, i) => (
            <SingleCourse {...data} key={i} courseView='hello' />
          ))}

          <div className='btn absolute top-2/4 -right-10 text-3xl xs:hidden'>
            <BsArrowRightSquareFill />
          </div>
        </div>
      </section>
      <section className='mt-10 px-16'>
        <h4 className='font-bold font-roboto text-2xl '>Best Seller Courses</h4>
        <div className='w-full h-fit  flex gap-5 my-5 relative'>
          <div className='btn absolute top-2/4 -left-10 text-3xl xs:hidden'>
            <BsArrowLeftSquareFill />
          </div>
          {Object.values(courseData.courses).map((data, i) => (
            <SingleCourse {...data} key={i} courseView='hello' />
          ))}

          <div className='btn absolute top-2/4 -right-10 text-3xl xs:hidden'>
            <BsArrowRightSquareFill />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
