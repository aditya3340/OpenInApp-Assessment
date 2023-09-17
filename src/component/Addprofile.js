import React, { useState } from "react";
import { GrUserAdd } from "react-icons/gr";
import UserAdd from "./UserAdd";

const Addprofile = () => {
    const [click, setClick] = useState(false);
    console.log(click);

    const handleClickEvent = () => {
        setClick(prev => !prev)
    }

  return (
    <>
    <div className="mt-5 mx-9 min-h-[325px] rounded-2xl flex flex-col items-center justify-center border-2 drop-shadow">
      <div className="bg-zinc-200 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer"
        onClick={handleClickEvent}
      >
        <GrUserAdd className="w-[50%] h-[50%] "/>
      </div>
      <h1 className="text-xl font-bold mt-2">Add Profile</h1>
    </div>
    {click && <UserAdd handleClick={handleClickEvent} />}
    </>
  );
};

export default Addprofile;
