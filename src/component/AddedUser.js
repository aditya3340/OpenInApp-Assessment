import useUser from "@/hooks/useUser";
import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";

const AddedUser = () => {
  const user = useUser();

  return (
    <div className="mt-5 mx-9 min-h-[200px] lg:min-h-[87%] rounded-2xl flex flex-col  border-2 drop-shadow py-10 px-10">
      <div className=" flex flex-col lg:justify-between lg:items-between h-[200px]">
        <h1 className="text-2xl font-bold mt-2">{user.name}</h1>

        <div className="flex flex-col justify-evenly lg:flex-row lg:justify-between  h-[100%] ">
          <div className="flex flex-col justify-between lg:justify-center  ">
            <div className="flex items-center my-2 font-semibold underline hover:font-light cursor-pointer">
              <BsWhatsapp className="w-5 h-5 mr-3 text-[#3CC952]" />
              {user.phone}
            </div>
            <div className="flex items-center my-2 font-semibold underline hover:font-light cursor-pointer ">
              <HiOutlineMail className="w-5 h-5 mr-3 text-[#5C33CF]" />
              {user.email}
            </div>
          </div>

          <div className=" flex flex-col justify-between lg:justify-center ">
            <div className="flex items-center my-2 font-semibold underline hover:font-light cursor-pointer">
              <BsInstagram className="w-5 h-5 mr-3 text-[#FF4E64]" />
              {user.insta}
            </div>
            <div className="flex items-center my-2 font-semibold underline hover:font-light cursor-pointer">
              <AiOutlineYoutube className="w-5 h-5 mr-3 text-[#FF0000]" />
              {user.youtube}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedUser;
