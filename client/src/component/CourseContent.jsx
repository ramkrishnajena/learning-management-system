import React, { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const CourseContent = ({ chapterHeading, chapterNames }) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div
      className='px-16 mt-1 w-2/4 h-3/4 max-h-fit'
      onClick={() => setOpen(!open)}
    >
      <div className='w-full border flex flex-col justify-center'>
        <div
          className={"flex items-center text-xl " + (!open && "border-b-[1px]")}
        >
          <span className='p-2'>
            {open ? <BiDownArrow size={15} /> : <BiUpArrow size={15} />}
          </span>
          <p className='p-2'>{chapterHeading}</p>
        </div>
        {chapterNames.map((data, i) => {
          return (
            <div
              key={data + i}
              className={
                "w-full h-4/5 flex justify-between px-5 py-2 items-center " +
                (open && "hidden")
              }
            >
              <p className=''>{i + 1 + "." + data.name}</p>
              <p className=''>{data.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
