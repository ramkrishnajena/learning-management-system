import React from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
import Button from "../component/Button";
import CourseContent from "../component/CourseContent";

const Course = () => {
  const { id } = useParams();
  return (
    <div className='w-full '>
      <p className='text-xl font-sans px-16 mt-5 flex items-center text-indigo-900'>
        <span className='mr-2 border rounded-full p-1 flex items-center justify-center bg-slate-600'>
          <BiArrowFromLeft size={20} color='white' />
        </span>
        Web Development
      </p>
      <div className='flex flex-wrap xs:flex-col px-16 mt-2 justify-between'>
        <div className='w-6/12'>
          <h2 className='text-3xl font-bold font-popins'>
            Devops Tools and AWS for Java Microservice Developers
          </h2>
          <p className='w-8/12 mt-2 text-slate-700'>
            Master Docker , Kubernetes, Maven, Jenkins ,GIT , AWS EC2 ,Elastic
            Beanstalk,ELB,Auto Scaling and more in easy steps
          </p>
          <p className='pt-3'>
            Created By
            <Link to='/' className='text-sky-700 pl-2'>
              Ramkrishna
            </Link>
          </p>
        </div>
        <div className='w-6/12 flex items-center flex-col gap-3'>
          <img src='https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg'></img>
          <p className='font-sans text-lg font-semibold'>₹933</p>
          <Button
            name='Buy this Course'
            className='bg-green-400 p-3 rounded-lg font-bold text-black hover:text-white'
          />
        </div>
      </div>
      <div className='px-16 mt-5'>
        <h3 className='text-2xl font-bold'>Course Content</h3>
        <p>31 sections • 286 lectures • 20h 22m total length</p>
      </div>
      <CourseContent
        chapterHeading={"Introduction"}
        chapterNames={[
          {
            name: "Course outline",
            length: "02:00",
          },
          {
            name: "Join Our Online Classroom",
            length: "02:00",
          },
        ]}
      />
    </div>
  );
};

export default Course;
