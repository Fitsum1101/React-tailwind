import React from "react";
import { FaCodiepie, FaFacebook, FaGithub } from "react-icons/fa";
const Profile = ({ fullName, image, postion }) => {
  return (
    <div className="w-[100%] sm:w-[20rem]
     p-5 rounded-[1rem]  text-white flex flex-col gap-2 justify-center items-center duration-300 cursor-pointer hover:bg-blue-600  ">
      <img
        className="rounded-full border-4 w-36 h-36"
        src={image}
        alt="myimage"
      />
      <h1 className="capitalize text-2xl font-semibold ">{fullName}</h1>
      <p className="text-gray-300 capitalize text-[1.1rem]">{postion}</p>
      <div className="flex align-middlen text-xl justify-center gap-5 ">
        <FaCodiepie />
        <FaGithub />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Profile;






