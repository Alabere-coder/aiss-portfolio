import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div
      id="home"
      className=" mt-24 max-sm:mt-4 max-md:mt-14 w-full bg-transparent rounded-3xl"
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
            <h1 className=" mt-2 text-center max-md:text-4xl text-5xl font-bold text-neutral-400">
              Alabere Abdulazeez I.
            </h1>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 mt-4 text-neutral-200">
              Frontend & AI Engineer
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
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
      <div className="text-center mx-auto mt-12  w-[25rem] h-[25rem] max-md:w-[20rem] rounded-t-full bg-gradient-to-b from-colorPrimary to-colorBgPrimary pt-4 opacity-60 hover:opacity-100 brightness-60 hover:brightness-100">
        <Image src="/smile2.png" width={500} height={500} alt="bg image" />
      </div>
    </div>
  );
};

export default Header;
