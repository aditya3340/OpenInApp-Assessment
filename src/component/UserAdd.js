import useUser from "@/hooks/useUser";
import React, { useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const UserAdd = ({ handleClick }) => {
  
  
  const [nextForm, setNextForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  const person = useUser();

  const handleSubmit = useCallback(() => {
    person.addName(name);
    person.addEmail(email);
    person.addPhone(phone);
    person.addInsta(insta);
    person.addYoutube(youtube);

    person.onOpen()
  }, [person, name,email,phone,insta,youtube]);

  return (
    <div className="fixed top-0 left-0 w-[100%] min-h-[100vh] z-40 bg-black/50 flex justify-center items-center">
      <div className="flex flex-col items-center bg-white min-w-[80%] md:min-w-[40%] lg:min-w-[35%] p-5 rounded-xl">
        <div className="flex justify-between w-full">
          <h1 className=" font-bold">Add New Profile</h1>
          <button onClick={handleClick} className="text-zinc-400 p-1 text-xs">
            <RxCross2 className="w-3 h-3" />
          </button>
        </div>

        {/* Buttons to change between basic and Contact information  */}
        {/* Basic */}
        <div className="flex justify-between w-full mt-5">
          <div
            className={`text-center  w-full p-2 cursor-pointer font-bold ${
              !nextForm
                ? "border-b-2 border-sky-300"
                : "border-b-2 border-zinc-400"
            } `}
            onClick={() => setNextForm(false)}
          >
            <h1>Basic</h1>
          </div>
          <div
            className={`text-center w-full p-2 cursor-pointer font-bold ${
              nextForm
                ? "border-b-2 border-sky-300"
                : "border-b-2 border-zinc-400"
            }`}
            onClick={() => setNextForm(true)}
          >
            <h1>Social</h1>
          </div>
        </div>

        {!nextForm ? (
          <>
            {/*input forms*/}
            <div className=" w-full mt-5">
              <form>
                <div className="mt-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Enter Name*
                  </label>
                  <br />
                  <input
                    placeholder="eg. Aditya"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="w-full border border-zinc-300 p-1 px-4  rounded mt-2"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-3 ">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Enter Email*
                  </label>
                  <br />
                  <input
                    placeholder="eg. 1125@gmail.com"
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    className="w-full p-1 px-4 border border-zinc-300 rounded mt-2"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="phone" className="text-sm font-semibold ">
                    Enter Phone*
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="eg. 911 251 2124"
                    id="phone"
                    name="phone"
                    value={phone}
                    className="w-full p-1 px-4 border border-zinc-300 rounded mt-2"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </form>
              {/* next form button */}
              <div className="w-full my-4 flex justify-end">
                <button
                  onClick={() => setNextForm(true)}
                  type="text"
                  className="bg-[#3E84F8] text-white font-semibold py-1 px-4 text-sm rounded-md "
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          // Social Form
          <div className=" w-full mt-5 flex flex-col">
            <form>
              <div className="mt-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  Intagram Link{" "}
                  <span className="text-zinc-400 font-light">(optional)</span>
                </label>
                <br />
                <input
                  placeholder="eg. instagram.com/username"
                  type="text"
                  name="instagramLink"
                  value={insta}
                  className="w-full border border-zinc-300 p-1 px-4  rounded mt-2"
                  onChange={(e) => setInsta(e.target.value)}
                />
              </div>

              <div className="mt-3 ">
                <label htmlFor="email" className="text-sm font-semibold ">
                  Youtube Link{" "}
                  <span className="text-zinc-400 font-light">(optional)</span>
                </label>
                <br />
                <input
                  placeholder="eg. youtube.com/username"
                  name="youtubeLink"
                  value={youtube}
                  type="text"
                  className="w-full p-1 px-4 border border-zinc-300 rounded mt-2"
                  onChange={(e) => setYoutube(e.target.value)}
                />
              </div>
            </form>
            {/* next form button */}
            <div className="flex w-full justify-end  mt-4">
              <button
                onClick={() => setNextForm(false)}
                type="text"
                className="mr-2 text-black border border-zinc-400 font-semibold py-1 px-4 text-sm rounded-md "
              >
                Back
              </button>

              <button
                onClick={() => {
                  handleClick();
                  handleSubmit();
                }}
                type="text"
                className="bg-[#3E84F8] text-white font-semibold py-1 px-4 text-sm rounded-md "
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAdd;
