"use client";

import { navItems } from "@/data";

import Grid from "@/components/Grid";

import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pb-[100px] pt-20">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
