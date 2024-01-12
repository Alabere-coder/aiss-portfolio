"use client";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Skills from "./sections/skills/Skills";
import PopUp from "@/components/Popup";
import Socios from "@/components/Socios";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Navbar from "@/components/TopNav";
import Footer from "./sections/Footer";
import AboutMe from "./sections/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 600,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="lg:container">
        <PopUp />
        <Header />
        <Nav />
        <AboutMe />
        <Skills />
        <Socios />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
