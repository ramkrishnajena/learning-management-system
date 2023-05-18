import React from "react";
import Button from "./Button";
import BottomNav from "./BottomNav";
import { categories } from "../lmsdata";

const Header = () => {
  return (
    <header className='w-full'>
      <div className='w-full h-16 bg-white border-b flex justify-between items-center px-8 font-popins'>
        <div className='w-4/12'>Logo</div>
        <div className='w-8/12 flex items-center justify-end gap-5'>
          <Button name='Login' />
          <Button name='Signup' />
        </div>
      </div>
      <BottomNav categories={categories} />
    </header>
  );
};

export default Header;
