import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      id="home"
      className="mt-24 max-sm:mt-4 max-md:mt-0 w-full bg-transparent rounded-3xl"
    >
      <div className="max-w-full px-8 mx-auto flex flex-col items-center justify-center">
        <p className="text-colorLight font-bold lg:text-center text-2xl mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl text-center sm:text-7xl font-bold text-[#ccd6f6]">
          ALABERE ABDULAZEEZ I.
        </h1>
        <h2 className="text-4xl text-center my-8 sm:text-7xl font-bold text-colorLight">
          I am an awesome Front End Developer.
        </h2>
      </div>
      <div className="text-center mx-auto mt-12  w-[25rem] h-[25rem] max-md:w-[20rem] rounded-t-full bg-gradient-to-b from-colorPrimary to-colorBgPrimary pt-4 opacity-60 hover:opacity-100 brightness-60 hover:brightness-100">
        <Image src="/smile2.png" width={500} height={500} alt="bg image" />
      </div>
    </div>
  );
};

export default Header;
