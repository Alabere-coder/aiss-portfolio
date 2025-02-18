import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-colorBg h-fit w-full bg-neutral-300 py-8 text-center text-sm ">
      <Link href="#" className="font-medium text-3xl mb-8 inline-block">
        ALABERE INTEGRITY STRUCTURED SOLUTIONS
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
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16">
        <Link
          href="https://www.linkedin.com/in/abdulazeez-isiaq-84ba24259/"
          className="bg-colorBg text-white p-3 rounded-md flex border hover:bg-transparent hover:text-colorBg"
        >
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/AlabereIsiaq"
          className="bg-colorBg text-white p-3 rounded-md flex border hover:bg-transparent hover:text-colorBg"
        >
          Twitter
        </Link>
        <Link
          href="https://github.com/Alabere-coder"
          className="bg-colorBg text-white p-3 rounded-md flex border hover:bg-transparent hover:text-colorBg"
        >
          Github
        </Link>
      </div>

      <div>
        &copy; ALABERE INTEGRITY STRUCTURED SOLUTIONS. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
