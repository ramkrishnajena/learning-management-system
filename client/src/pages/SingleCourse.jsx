import React, { useState } from "react";
import { Link } from "react-router-dom";
const SingleCourse = ({
  courseName,
  courseImg,
  description,
  price,
  instructorID,
  rating,
}) => {
  return (
    <>
      <div className='w-3/12 h-auto relative'>
        <img
          loading='lazy'
          src={courseImg}
          alt={courseName}
          className='cursor-pointer'
        />
        <div className='pt-3 px-1 font-popins'>
          <Link to={"course/" + courseName}>
            <h3 className='font-bold'>{courseName}</h3>
          </Link>
          <Link to={"author/" + instructorID}>
            <p className=' text-xs pt-1'>{instructorID}</p>
          </Link>
          <p className='text-sm pt-1'>{rating}</p>
          <p className='text-base font-bold pt-1 font-sans'>₹{price}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
