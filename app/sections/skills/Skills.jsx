"use client";
import React, { useEffect } from "react";
import Headings from "../../../components/Headings";
import Image from "next/image";
import ExpertiseCard from "./SkillsCard";

const Expertise = () => {
  const expertiseObjArr = [
    {
      src: "/html5.svg",
      alt: "HTML5 Logo",
    },
    {
      src: "/css3.svg",
      alt: "css3 Logo",
    },
    {
      src: "/javascript.svg",
      alt: "JavaScript Logo",
    },
    {
      src: "/tailwindcss.svg",
      alt: "tailwindcss Logo",
    },
    {
      src: "/reactjs.svg",
      alt: "reactjs Logo",
    },
    {
      src: "/redux.svg",
      alt: "redux Logo",
    },
    {
      src: "/vite.svg",
      alt: "vite Logo",
    },
    {
      src: "/npm.svg",
      alt: "vite Logo",
    },
    {
      src: "/next.svg",
      alt: "Nextjs Logo",
    },
  ];

  const eachExperties = [
    {
      img: `/expMedia/html2.png`,
      skillName: "HTML5",
    },
    {
      img: `/expMedia/css2.png`,
      skillName: "CSS3",
    },
    {
      img: `/expMedia/js2.png`,
      skillName: "JavaScript",
    },
    {
      img: `/expMedia/ts2.png`,
      skillName: "TypeScript",
    },
    {
      img: `/expMedia/react2.png`,
      skillName: "REACT",
    },
    {
      img: `/expMedia/redux2.png`,
      skillName: "REDUX",
    },
    {
      img: `/expMedia/next2.png`,
      skillName: "NEXTJS",
    },
    {
      img: `/expMedia/tail2.png`,
      skillName: "TAILWINDCSS",
    },
    {
      img: `/expMedia/git.png`,
      skillName: "GIT",
    },
    {
      img: `/expMedia/tailwind.png`,
      skillName: "TAILWIND",
    },
    {
      img: `/expMedia/node-js.png`,
      skillName: "NODE-JS",
    },
  ];
  return (
    <div
      className="py-[2rem] my-8 w-full grid place-items-center bg-tranparent rounded-3xl"
      id="skills"
    >
      <Headings position={"center"} text={"Some of my skills"} />
      <h3 className="text-center">{`Here are a few technologies I’ve been working with recently:`}</h3>
      <div className="exp flex lg:gap-8 mt-10 gap-4 flex-wrap w-full justify-center">
        {eachExperties.map((e, i) => (
          <div data-aos={i % 2 === 0 ? "fade-right" : "fade-up"} key={i}>
            <ExpertiseCard img={e.img} skillName={e.skillName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
