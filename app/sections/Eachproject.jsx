import React from "react";
import Image from "next/image";
const EachProject = ({
  name,
  description,
  lang1,
  lang2,
  lang3,
  lang4,
  lang5,
  flex_Dir,
  abs_pos,
  end,
  text_pos,
  img,
  live,
  github,
  top,
}) => {
  return (
    <div
      className={`projectW flex justify-between w-full lg:gap-10 lg:space-y-0 space-y-4 gap-0 lg:h-[26rem]  h-auto lg:items-center lg:p-4 p-0 rounded-lg ${flex_Dir}`}
    >
      <div
        className="lg:w-[55%] lg:h-[25rem] h-auto w-full grid place-items-center brightness-75 hover:brightness-100"
        data-aos="fade-right"
      >
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-full h-[15rem] lg:mt-0 mt-4"
        >
          <Image
            src={img}
            width={400}
            height={300}
            alt={"Project view"}
            className="w-full h-full border-[3px] rounded-lg border-colorPrimary relative"
          />
        </a>
      </div>

      <div
        className="lg:w-[45%] w-full relative lg:h-full h-auto flex flex-col justify-between lg:px-8 lg:py-0 p-0"
        data-aos="flip-left"
      >
        <div className="projectTitle">
          <p className={`${text_pos} text-primary1 text-[13px] mb-2`}>
            Featured Project
          </p>
          <h1
            className={`text-var_color font-[700] ${text_pos} text-[1.5rem] lg:mb-0 mb-4`}
          >
            {name}
          </h1>
        </div>
        <div
          className={`description lg:w-[110%] w-full bg-primary_bg2 lg:absolute ${abs_pos} ${top} text-[15px] p-4 rounded-lg border border-colorPrimary `}
        >
          {" "}
          {description}
        </div>
        <div className="flex flex-col gap-4">
          <div className="materialUsed text-[13px] flex justify-around lg:mt-0 mt-2">
            <p>{lang1}</p>
            <p>{lang2}</p>
            <p>{lang3}</p>
            <p>{lang4}</p>
            <p>{lang5}</p>
          </div>
          <div className={`clickales flex gap-4 ${end}`}>
            <a href={live} target="_blank">
              <div className="px-4 place-content-center bg-cover border border-colorPrimary rounded-sm hover:text-primary1 hover:text-lg">
                Live Demo
              </div>
            </a>
            <a href={github} target="_blank">
              <div
                className={`bg-[url(/github-line.png)] hover:bg-[url(/github-lineh.png)] w-8 h-8 gird place-content-center bg-cover`}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
