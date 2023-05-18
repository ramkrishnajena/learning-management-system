import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h2 className='font-roboto text-7xl'>{error.status}</h2>
      <p className='font-popins text-2xl'>{error.statusText}</p>
      <Link
        to='/'
        className='font-popins text-xl mt-5 bg-slate-600 text-white p-2'
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
