import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div
      id="home"
      className="bg-neutralBg-100 h-fit w-full mt-14 max-sm:mt-4 max-md:mt-14 bg-transparent rounded"
    >
      <div className="max-w-full mx-auto flex flex-col items-center justify-center">
        <div className="max-w-4xl mt-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-colorLight font-bold lg:text-center text-2xl mb-4">
              Hello, I'm
            </p>
            <h1 className=" mt-2 text-center max-md:text-4xl text-5xl font-bold text-neutralBg-200">
              Alabere Abdulazeez I.
            </h1>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 mt-4 text-neutral-300">
              Frontend & AI Engineer
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Crafting beautiful user interfaces and building intelligent
              systems
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#contact">
                <Button variant="secondary">Get in touch</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="text-center mx-auto mt-12  w-[25rem] h-[26rem] max-md:w-[20rem] rounded-t-full bg-gradient-to-b from-colorPrimary to-colorBgPrimary pt-4 brightness-60 ">
        <Image src="/smile2.png" width={500} height={500} alt="bg image" />
      </div>
    </div>
  );
};

export default Header;
