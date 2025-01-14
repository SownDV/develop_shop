import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-2 mt-10 bg-yellow-100 rounded-3xl p-8" id="explore-menu">
      <h1 className="text-[#262626] font-semibold text-[30px] ">
        Khám phá đặc sản
      </h1>
      {/* <p className="explore-menu-text max-w-full col-[#808080]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab libero
        aperiam necessitatibus quisquam accusamus
      </p> */}
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center mt-5">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item max-sm:hidden max-md:hidden max-lg:hidden"
            >
              <img
                src={item.menu_image}
                alt=""
                className={
                  category === item.menu_name ? "active" : "cursor-pointer"
                }
              />
              <p className="mt-[10px] text-foreground font-medium  text-[15px] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
