import React from "react";

const SingleCourse = () => {
  return (
    <div className='w-3/12 h-36'>
      <img
        src='https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg'
        alt='course'
      />
      <div className='pt-3 px-1 font-popins'>
        <h3 className='font-bold'>Build Responsive Real World Website</h3>
        <p className=' text-xs pt-1'>Cold Steel</p>
        <p className='text-sm pt-1'>4.7</p>
        <p className='text-base font-bold pt-1 font-sans'>₹399</p>
      </div>
    </div>
  );
};

export default SingleCourse;
