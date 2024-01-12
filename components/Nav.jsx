"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="">
      <Link
        href="#"
        onClick={() => setActiveNav("#")}
        className={
          activeNav === "#"
            ? "bg-colorPrimary rounded-full text-white hover:bg-colorPrimary hover:rounded-full"
            : ""
        }
      >
        <FaHome />
      </Link>
      <Link
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={
          activeNav === "#about"
            ? "bg-colorPrimary rounded-full text-white hover:bg-colorPrimary"
            : ""
        }
      >
        <FaUser />
      </Link>
      <Link
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={
          activeNav === "#skills"
            ? "bg-colorPrimary rounded-full text-white hover:bg-colorPrimary"
            : ""
        }
      >
        <SiSkillshare />
      </Link>
      <Link
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={
          activeNav === "#portfolio"
            ? "bg-colorPrimary rounded-full text-white hover:bg-colorPrimary"
            : ""
        }
      >
        <RiContactsBook2Fill />
      </Link>
      <Link
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={
          activeNav === "#contact"
            ? "bg-colorPrimary rounded-full text-white hover:bg-colorPrimary"
            : ""
        }
      >
        <MdEmail />
      </Link>
    </nav>
  );
};

export default Nav;
