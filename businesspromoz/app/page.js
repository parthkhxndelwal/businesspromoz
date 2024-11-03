"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { useEffect, useState } from "react";
export default function App() {
  const [mode, setMode] = useState("dark")
  useEffect(()=>{
    document.getElementById("bodyy").className.concat(mode)
  }, [mode])
  return (
    <>
      {/* Hero */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex justify-center items-center -z-10"
        >
          <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-50 rounded-full blur-3xl w-full h-full rotate-[-40deg] transform -translate-x-[10rem] " />
          <div className="bg-gradient-to-tl blur-3xl w-full h-full rounded-full origin-top-left -rotate-45 -translate-x-[15rem] from-cyan-500 via-white to-sky-50" />
        </div>

        <div className="container pt-10 px-auto z-10"> 
          {/* Announcement Banner */}
          {/* <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
              href="#"
            >
              Contact us
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div> */}
          {/* End Announcement Banner */}
          {/* Title */}
          
          <div className="mt-10 mb-2 w-80 text-center mx-auto">
            <img className="w-30" src="/logo.png" />
          </div>
          
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-muted-foreground">
            Business Promoz carries a rich experience of more than 16 years in Events and Advertisements in Insin Market and has stepped its feet in the International Market for the last few years.

            </p>
          </div>
          {/* Buttons */}
          {/* <div className="mt-5 gap-3 flex justify-center">
            <Button size={"lg"}>Get started</Button>
            
          </div> */}
          <div className="flex justify-center mt-10">
            <HeroVideoDialog
                    className="dark:hidden w-50"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/Jwq9w69oiDY"
                    thumbnailSrc="https://i9.ytimg.com/vi/Jwq9w69oiDY/mqdefault.jpg?v=672764f1&sqp=CMDLnbkG&rs=AOn4CLBBcVXRGdbGwGGiMBSEsW1LtvZP1g"
                    thumbnailAlt="Hero Video"
                  />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/Jwq9w69oiDY"
              thumbnailSrc="https://i9.ytimg.com/vi/Jwq9w69oiDY/mqdefault.jpg?v=672764f1&sqp=CMDLnbkG&rs=AOn4CLBBcVXRGdbGwGGiMBSEsW1LtvZP1g"
              thumbnailAlt="Hero Video"
            />
          </div>
          {/* End Buttons */}
          
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
