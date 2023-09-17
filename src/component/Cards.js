import React from "react";
import revenue from "../../public/revenue.png";
import users from "../../public/users.png";
import transaction from "../../public/transaction.png";
import likes from "../../public/likes.png";
import Image from "next/image";

const Cards = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center mt-10 py-2 px-2" >
      <div id="first-box" className="card ">
        <Image src={revenue} width={35} height={35} id="card-icon" alt="Card" />
        <div className="mt-2 ">
          <p className="text-sm">Total Revenues</p>
          <div className="flex justify-between mt-1">
            <h2 className="text-xl font-bold">$ 2,129,430</h2>
            <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
              +2.5%
            </button>
          </div>
        </div>
      </div>
      <div id="second-box" className="card ">
        <Image
          src={transaction}
          width={35}
          height={30}
          id="card-icon"
          alt="Card"
        />
        <div className="mt-2">
          <p className="text-sm">Total Transaction</p>
          <div className="flex justify-between mt-1">
            <h2 className="text-xl font-bold">1,520</h2>
            <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
              +1.7%
            </button>
          </div>
        </div>
      </div>
      <div id="third-box" className="card">
        <Image src={likes} width={35} height={35} id="card-icon" alt="Card" />
        <div className="mt-2">
          <p className="text-sm">Total Likes</p>
          <div className="flex justify-between mt-1">
            <h2 className="text-xl font-bold">9,721</h2>
            <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
              +1.4%
            </button>
          </div>
        </div>
      </div>
      <div id="fourth-box" className="card">
        <Image src={users} width={36} height={24} id="card-icon" alt="Card" />
        <div className="mt-2">
          <p className="text-sm">Total Users</p>
          <div className="flex justify-between mt-1">
            <h2 className="text-xl font-bold">9,721</h2>
            <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
              +1.7%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
