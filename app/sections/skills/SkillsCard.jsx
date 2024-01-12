import React from "react";
import Image from "next/image";

const SkillsCard = ({ img, skillName }) => {
  return (
    <div className="border-2 border-colorPrimary w-32 h-40 rounded-lg flex flex-col justify-center items-center gap-4 hover:scale-[1.05]">
      <Image
        className="w-20 h-20"
        src={img}
        alt="expertise"
        width={100}
        height={100}
      />
      <p className="nameOfLang text-colorPrimary">{skillName}</p>
    </div>
  );
};

export default SkillsCard;
