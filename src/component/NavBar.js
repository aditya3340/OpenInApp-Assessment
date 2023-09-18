import React, { useState, useEffect } from "react";
import Image from "next/image";
import user from "../../public/user.png";
import { BsBell } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const session = useSession();
  const [image, setImage] = useState("");

  const [flage, setFlage] = useState(false);

  useEffect(() => {
    if (session.status == "authenticated") {
      setImage(session.data.user.image);
    }
  }, [session.status]);

  return (
    <>
      <div className="max-w-[90%] m-auto md:min-w-[100%]  flex justify-between px-5 items-center py-2 rounded  ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div id="user" className=" flex items-center">
          <input
            placeholder="search"
            className="hidden md:block mx-2 rounded-md px-2 py-1 border "
          />
          <BsBell className="w-5 h-5 mx-2 " />
          <Image
            src={image ? image : user}
            width={32}
            height={32}
            id="userImage"
            alt="user"
            className="rounded-full mx-2 "
            onClick={() => setFlage((prev) => !prev)}
          />
        </div>

        {flage && (
          <div className="absolute z-10 flex flex-col p-5 border rounded-xl drop-shadow-xl top-20 right-10">
            <button
              className="bg-black text-white rounded p-2 mb-2 font-bold text-sm"
              onClick={() => setFlage((prev) => !prev)}
            >
              Dashboard
            </button>
            <button
              className="bg-red-500 rounded p-2 text-white font-bold text-sm"
              onClick={() => signOut("google")}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
