"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col items-center my-20 gap-6" id="contact">
      <h1 className="text-[2rem] font-bold text-var_color">Get In Touch</h1>
      <p className="lg:w-[60%] text-center">
        {
          "I am excited about the potential of working together to create stunning web experiences that not only meet but exceed expectations. If you would be interested in exploring a collaboration or discussing potential projects, I would be thrilled to set up a time to chat. Please let me know if you would like to schedule a call or if there's any other way I can provide additional information. Thank you🥰😍"
        }
      </p>

      <div className="contact__items w-full flex justify-center items-center gap-16 ">
        <div className="w-[30%] contact__item  flex flex-col gap-5">
          <article className="bg-colorBgVariat p-5 rounded-2xl text-center border border-transparent hover:bg-transparent hover:border-colorPrimary">
            <MdOutlineEmail className="mx-auto text-2xl" />
            <h4>Email</h4>
            <h5>alabere007@gmail.com</h5>
            <Link
              target="_blank"
              href="mailto:alabere007@gmail.com"
              className="border p-2 rounded-md"
            >
              Send a message
            </Link>
          </article>

          <article className="bg-colorBgVariat p-5 rounded-md text-center border border-transparent hover:bg-transparent hover:border-colorPrimary">
            <MdOutlineWhatsapp className="mx-auto text-2xl" />
            <h4>WhatsApp</h4>
            <h5>+2349044348459</h5>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=2349044348459&text=Hello%20I%20will%20like%20to%20Hire%20You"
              className="border p-2 rounded-md"
            >
              Send Message
            </Link>
          </article>
        </div>
        <form className="w-[50%] form__items flex flex-col gap-5">
          <Input
            className="w-full p-6 bg-transparent "
            type="text"
            name="name"
            placeholder="Enter Your FullName"
          />
          <Input
            className="w-full p-6 bg-transparent "
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <Textarea
            className="w-full p-6 bg-transparent "
            name="message"
            row="7"
            placeholder="Your Message Please"
          />

          <Button>Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
