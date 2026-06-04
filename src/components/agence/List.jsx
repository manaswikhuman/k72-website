import React from "react";

const List = (props) => {
  return (
    <div>
      <div className="">
        <li className="font-[font2] text-x text-white">
          <ul className="flex items-center justify-between px-10 py-5 hover:bg-[#D3FD50] hover:text-black border-b transition duration-500 ease-in-out">
            <p>{props.position}</p>
            <p className="text-5xl font-bold uppercase">{props.name}</p>
          </ul> 
        </li>
      </div>
    </div>
  );
};

export default List;
