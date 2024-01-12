import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-colorBg h-fit w-full bg-colorPrimary py-12 text-center text-sm ">
      <Link href="#" className="font-medium text-3xl mb-8 inline-block">
        ALABERE INTEGRITY DTRUCTURED SOLUTIONS
      </Link>
      <ul className="flex flex-wrap justify-center gap-8 mx-auto mb-12">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#portfolio">Portfokio</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16">
        <Link
          href="#"
          className="bg-colorBg text-white p-3 rounded-md flex border hover:bg-transparent hover:text-colorBg"
        >
          Facebook
        </Link>
        <Link
          href="#"
          className="bg-colorBg text-white p-3 rounded-md flex border hover:bg-transparent hover:text-colorBg"
        >
          Twitter
        </Link>
        <Link
          href="#"
          className="bg-colorBg text-white p-3 rounded-md flex border hover:bg-transparent hover:text-colorBg"
        >
          Github
        </Link>
      </div>

      <div>
        &copy; ALABERE INTEGRITY DTRUCTURED SOLUTIONS. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
