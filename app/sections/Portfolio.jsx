import React from "react";
import Headings from "../../components/Headings";
import Eachproject from "./Eachproject";

const Portfolio = () => {
  return (
    <div id="portfolio" className="max-lg:px-2">
      <div className="w-full h-auto pt-20 bg-transparent rounded-3xl" id="work">
        <Headings
          text={"Some of my projects"}
          position={"start"}
          width={"w-0"}
        />
        <div className="h-auto w-full flex flex-col lg:space-y-20 space-y-4 ">
          <Eachproject
            img={"/portf-img1.jpg"}
            name={"Rolex Wristwatch"}
            description={
              "I used this project to practice my frontEnd skills, I built the whole structure with HTML/CSS and JavaScript, Using JavaScript loop to create multiple element in HTML, and reduces the HTML code a lot."
            }
            abs_pos={"right-[2rem]"}
            text_pos={"text-right"}
            lang1={"Html"}
            lang2={"CSS"}
            lang3={"Vanilla Js"}
            lang4={"Netlify"}
            lang5={""}
            end={"justify-end"}
            flex_Dir={"lg:flex-row flex-col-reverse"}
            live={"https://visionary-cactus-89f6e7.netlify.app/"}
            github={"https://github.com/Intelligence247/rolexWristWatch"}
            top={"top-[28%]"}
          />
          <Eachproject
            img={"/portf-img2.jpg"}
            name={"Weather App"}
            description={
              "This is a weather app that gives users the opportunity to search for any city or country in the world and get the forcast for the next five days. The interval can be daily or 3hours. It can also access the location of the user and give the forcast of that city."
            }
            text_pos={"text-left"}
            lang1={"React.js"}
            lang3={"Chart.js"}
            lang4={"API"}
            lang5={"TailWindCss"}
            flex_Dir={"lg:flex-row-reverse flex-col-reverse"}
            live={"https://phenomenal-sunshine-547717.netlify.app/"}
            github={"https://github.com/Intelligence247/Weather_Forcast_App"}
            top={"top-[28%]"}
          />

          <Eachproject
            img={"/jobcard.png"}
            name={"Job-Registration Website"}
            description={
              "Job-Registration Website is a dynamic web application developed for Gadget Technicians to enhance user experience and engagement. By leveraging modern front-end technologies and responsive design, the project aimed to provide seamless access and optimal usability across devices. This project uses Firebase (firestore) BaaS with nextjs for the FrontEnd"
            }
            abs_pos={"right-[2rem]"}
            text_pos={"text-right"}
            lang1={"React"}
            lang2={"Nextjs"}
            lang3={"Shadcn"}
            lang4={"Tailwind CSS"}
            lang5={"Firebase"}
            end={"justify-end"}
            flex_Dir={"lg:flex-row flex-col-reverse"}
            live={"https://webopt.netlify.app/"}
            github={"https://github.com/Alabere-coder/job-registration.git"}
            top={"top-[20%]"}
          />

          <Eachproject
            img={"/blogpost.png"}
            name={"Blog-Posts"}
            description={
              "I participated in a three days hackathon with over 5000 other developers across the globe. We worked alongside designers and backend developers thereby implementing an eye-cacthing, responsive and dynamic website."
            }
            text_pos={"text-left"}
            lang1={"React.js"}
            lang3={"Axios"}
            lang4={"API"}
            lang5={"TailWindCss"}
            flex_Dir={"lg:flex-row-reverse flex-col-reverse"}
            live={"https://blogposts-six.vercel.app/"}
            github={"https://github.com/Alabere-coder/blogposts.git"}
            top={"top-[28%]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
