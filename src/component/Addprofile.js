"use client";
import React, { useState } from "react";
import { GrUserAdd } from "react-icons/gr";
import UserAdd from "./UserAdd";
import useUser from "@/hooks/useUser";
import AddedUser from "./AddedUser";


const Addprofile = () => {
  const user = useUser();
  console.log(user);
  const [click, setClick] = useState(false);

  const handleClickEvent = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      {user.isOpen ? (
        <AddedUser />
      ) : (
        <>
          <div className="mt-5 mx-9 min-h-[200px] lg:min-h-[87%] rounded-2xl flex flex-col items-center justify-center border-2 drop-shadow">
            <div
              className="bg-zinc-200 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer"
              onClick={handleClickEvent}
            >
              <GrUserAdd className="w-[50%] h-[50%] " />
            </div>
            <h1 className="text-xl font-bold mt-2">Add Profile</h1>
          </div>
          {click && <UserAdd handleClick={handleClickEvent} />}
        </>
      )}
    </>
  );
};

export default Addprofile;
