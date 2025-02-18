import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const AboutMe = () => {
  return (
    <section className="mt-16 max-lg:px-4" id="about">
      <h1 className="text-[2rem] max-lg:text-[1rem] text-center font-bold text-var_color mb-4">
        Get to Know About Me
      </h1>

      <div className="w-full grid grid-cols-2 about__container gap-8 border-colorBgVariant bg-colorBgVariat">
        <div
          className=""
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Image
            width={200}
            height={416}
            src="/silver-mac.jpg"
            className="w-full h-[26rem]"
            alt="about img"
          />
        </div>
        <div className="flex flex-col justify-center px-4">
          <h2 className="text-3xl font-semibold text-var_color pb-4">
            About Me
          </h2>
          <p className="text-base mb-2">
            I'm a passionate developer, that loves building open source
            applications for the general developer society. With expertise in
            both frontend development and artificial intelligence, I enjoy
            building interactive and superb UIs that are highly efficient,
            convenient and friendly to the users. I am experienced in web
            development especially JavaScript and Typescript and i have built
            projects during this period of time and i found them interesting.
          </p>
          <p className="text-base mb-4">
            I am also passionate about writing tech articles and technology
            including programming which are clearly open source. My approach
            combines clean code, intuitive design, and cutting-edge AI
            technologies to build solutions that make a difference.
          </p>
          <div>
            <Link
              href="#portfolio"
              className=" w-fit text-primary1 group border-2 border-colorPrimary px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-primary1"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
