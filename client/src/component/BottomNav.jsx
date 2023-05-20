import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, setMenuItems } from "../utils/store/menuSlice";

const BottomNav = ({ categories }) => {
  const [hoverValue, setHoverValue] = useState(null);
  const { courses } = categories;
  const { menuItems, menu } = useSelector((store) => store.menuState);
  const store = useSelector((store) => store.menuState);

  const dispatch = useDispatch();
  const onRef = useRef(null);
  let [filteredSubCateogary] = courses.filter(
    (data) => data.main == store.menuItems
  );

  const onHover = (main) => {
    dispatch(closeMenu(false));
    dispatch(setMenuItems(main));
    const data = onRef.current.querySelectorAll("p");
    data.classList += "";
  };

  return (
    <div className='h-12 w-full drop-shadow-sm border-b flex items-center justify-center px-16 gap-5 font-sans text-sm relative'>
      {courses.map((data, i) => {
        return (
          <p
            ref={onRef}
            className='cursor-pointer h-full flex items-center justify-center px-1 hover:border-s-amber-300 transition delay-100 duration-500 ease-out'
            key={i + data.main}
            onMouseEnter={() => {
              onHover(data.main);
            }}
            onMouseLeave={() => dispatch(closeMenu(true))}
            onClick={() => onHover(data.main)}
          >
            {data.main}
          </p>
        );
      })}
      <div
        onMouseEnter={() => onHover(menuItems)}
        onMouseLeave={() => dispatch(closeMenu(true))}
        className={
          "w-full h-10 items-center justify-center flex flex-wrap gap-5 bg-zinc-950 cursor-pointer text-white absolute top-11 delay-100 duration-100 " +
          (menu && "translate opacity-0 hidden")
        }
      >
        {filteredSubCateogary?.subCategories.map((data, i) => {
          return (
            <p
              key={i}
              className='font-sans transition delay-100 hover:text-yellow-400'
            >
              {data?.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
