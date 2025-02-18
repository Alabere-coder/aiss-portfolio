"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function PopUp() {
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPop(true);
    }, 10000);
  }, []);

  const handleCancel = () => {
    setPop(false);
  };
  return (
    <div
      className={`fixed grid place-content-center right-4 top-4 m-auto h-full w-full bg-primary_bg2/[1%] backdrop-blur-[5px] z-20 duration-200 ease-in-out ${
        pop ? "scale-1" : "scale-0"
      }`}
    >
      <div className="popW lg:w-[100%] w-[90%] m-auto lg:h-60 bg-primary_bg2 p-6 rounded-xl border-4 border-primary_bg2 border-dashed cursor-auto relative">
        <h1 className="text-center lg:text-xl text-lg cursor-auto text-[#99d9ee]">{`Do you mind saying Hi?, Let's talk business.`}</h1>
        <div>
          <div
            onClick={() => handleCancel()}
            className="cursor-pointer bg-primary_bg2 border-[#99d9ee] border absolute -right-1 -top-12 w-10 h-10 rounded-full flex justify-center items-center"
          >
            <X className="text-[#99d9ee] font-extrabold" size={28} />
          </div>

          <div className="whatsapp flex mt-12 justify-center items-center">
            <Link
              href="https://api.whatsapp.com/send?phone=2349044348459&text=Hi%20Alabere"
              target="blank"
              rel="noopener noreferrer"
              className="block w-full h-[2.5rem] bg-primary1 rounded-md relative "
            >
              <Button className="text-primary1 bg-primary_bg2 border-[1px] rounded-md border-primary1 absolute w-full h-full grid place-content-center">
                WhatsApp
              </Button>
            </Link>
          </div>

          <div className="email flex mt-4 justify-center">
            <Link
              href="mailto:alabere007@gnail.com?subject=Let%20do%20something%20together&body="
              className="block w-full h-[2.5rem] bg-primary1 rounded-md relative "
              target="blank"
            >
              <Button className="text-primary1 bg-primary_bg2 border-[1px] rounded-md border-primary1 absolute w-full h-full grid place-content-center">
                Email Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
