import React from "react";

const Footer = () => {
  return (
    <div className='w-full h-72 bg-gray-950 mt-5 h5-first:bg-red flex flex-col justify-between'>
      <h5 className='text-white font-roboto text-xl font-semibold w-full h-2/6 flex items-center px-16 border-b-[1px]'>
        Top Students Learn new Skills on LMS Platform
      </h5>
      <div className='w-3/6 flex justify-between pt-5 px-16 font-popins text-sm text-white cursor-default'>
        <ul>
          <li className='hover:text-blue-500'>About</li>
          <li className='hover:text-blue-500'>Contact</li>
          <li className='hover:text-blue-500'>Social Media</li>
          <li className='hover:text-blue-500'>Become and Instructor</li>
        </ul>
        <ul>
          <li className='hover:text-blue-500'>Career</li>
          <li className='hover:text-blue-500'>Blog</li>
          <li className='hover:text-blue-500'>Support</li>
          <li className='hover:text-blue-500'>Affiliate</li>
        </ul>
        <ul>
          <li className='hover:text-blue-500'>Privacy Policy</li>
          <li className='hover:text-blue-500'>Terms</li>
          <li className='hover:text-blue-500'>Sitemap</li>
        </ul>
      </div>
      <div className=' w-full h-2/6 flex items-center justify-between px-16'>
        <p className='text-white'>Logo</p>
        <p className='text-white'>@{new Date().getFullYear()} Fast Ready LMS</p>
      </div>
    </div>
  );
};

export default Footer;
