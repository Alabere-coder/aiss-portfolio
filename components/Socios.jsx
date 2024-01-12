"use client";

import React, { useEffect } from "react";

const Socios = () => {
  const socioArr = [
    {
      link: "https://github.com/Alabere-coder",
      ima1: `bg-[url("/github-line.png")]`,
      ima2: `hover:bg-[url("/github-lineh.png")]`,
      alter: "Github icon",
    },
    {
      link: "https://twitter.com/AlabereIsiaq",
      ima1: `bg-[url("/twitter-line.png")]`,
      ima2: `hover:bg-[url("/twitter-lineh.png")]`,
      alter: "Twitter icon",
    },
    {
      link: "https://www.linkedin.com/in/isiaq-abdul-azeez-84ba24259/",
      ima1: `bg-[url("/linkedin-fill.png")]`,
      ima2: `hover:bg-[url("/linkedin-fillh.png")]`,
      alter: "Linkedin icon",
    },
  ];

  return (
    <div className="lg:w-screen w-full flex flex-col gap-6 z-50 socios">
      <div className="lg:fixed relative top-24 flex lg:flex-col flex-row lg:left-[4%] left-0 items-center lg:gap-7 gap-0 lg:w-8 w-full lg:justify-start justify-around lg:mb-0 mb-4">
        {socioArr.map((so, i) => (
          <a
            href={so.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            className="hover:animate-spin"
          >
            <div className={`${so.ima1} ${so.ima2} w-5 h-5 flex gird`}></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socios;
