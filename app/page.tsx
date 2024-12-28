"use client";
import React from 'react';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import ServicesSection from "@/components/Services";
import ContactSection from '@/components/Contact';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    // Function to check the current theme
    const checkTheme = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDarkMode ? 'dark' : 'light');
    };

    // Initial check when component mounts
    checkTheme();

    // Set up event listener to detect theme changes
    const themeChangeListener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Listen for theme change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChangeListener);

    // Cleanup listener on component unmount
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeChangeListener);
    };
  }, []);
  return (
    <>
      <nav className="fixed w-full bg-white dark:bg-zinc-900 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-auto relative">
                <img src={theme==="dark"?"/favicon.png":"/logo.png"} alt="Business Promoz" width={theme==="dark"?40:150} height={20} />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                Our Services
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                Contact Us
              </button>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-900">
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                Our Services
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-cyan-500"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home">
        <div className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 min-h-screen pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between py-20">
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <h1>
                  <span className="text-5xl text-black dark:text-gray-100 md:text-5xl font-bold leading-tight">
                    Business{' '}
                  </span>
                  <span className="text-5xl text-cyan-500 md:text-5xl font-bold leading-tight">
                    Promoz
                  </span>
                </h1>
                <h2 className="text-2xl text-black dark:text-gray-300 md:text-2xl leading-tight pr-20">
                  carries a rich experience of more than 16 years in Events and
                  Advertisements in Insin Market and has stepped its feet in the
                  International Market for the last few years.
                </h2>
              </div>

              {/* Video Player */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl aspect-video">
                  <video
                    className="w-full h-full rounded-lg"
                    controls
                    poster="/videoframe.png"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
        <div className="bg-white dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-5">
                <h1>
                  <span className="text-3xl text-black dark:text-gray-100 md:text-5xl font-bold leading-tight">
                    About{' '}
                  </span>
                  <span className="text-3xl text-cyan-500 md:text-5xl font-bold leading-tight">
                    Company
                  </span>
                </h1>
                <div className="space-y-2">
                  <p className="text-gray-400 dark:text-gray-300 text-lg leading-relaxed">
                    Business Promoz is engaged in promoting and gathering leads for
                    your products and services by customizing and prioritizing yours
                    with quality delivery. We work with experienced and trained
                    professionals.
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 text-lg leading-relaxed">
                    The results that we deliver have been disseminated through various
                    media globally. We help resolve your problems and the best
                    possible solutions.
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="w-full md:w-1/2">
                <Image
                  src="/aboutpng1.png"
                  alt="Business Promoz Solutions"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">
              {/* Profile Image and Details */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <div className="bg-cyan-500 dark:bg-cyan-600 rounded-2xl border-4 border-cyan-500 dark:border-cyan-600 mb-6 w-fit">
                  <Image
                    src="/aboutpng2.png"
                    alt="Upal Chakraborty"
                    width={200}
                    height={200}
                    className="rounded-2xl"
                  />
                </div>
                <h3 className="text-cyan-500 dark:text-cyan-400 text-2xl font-bold mb-2">
                  Upal Chakraborty
                </h3>
                <p className="text-gray-400 dark:text-gray-300">Founder & CEO</p>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-8">
                <h1>
                  <span className="text-3xl text-black dark:text-gray-100 md:text-5xl font-bold leading-tight">
                    About{' '}
                  </span>
                  <span className="text-3xl text-cyan-500 dark:text-cyan-400 md:text-5xl font-bold leading-tight">
                    Upal
                  </span>
                </h1>
                <p className="text-gray-400 dark:text-gray-300 text-lg leading-relaxed">
                  He is a Content Creator and a Digital Coach possessing expertise in
                  SEO with experience of more than 18 years and has the ability to
                  make a difference in the crowd. As a marketing expert, he has led
                  various famous and successful campaign projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
        <ServicesSection />
      </section>

      <section id="contact" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
        <ContactSection />
      </section>
      <div className="bg-white dark:bg-zinc-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2025 <a href="https://businesspromoz.vercel.app/" className="hover:underline">BusinessPromoz™</a>. All Rights Reserved.
          </span>
          {/* <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">Developed by Parth K.</span> */}
        </div>
      </div>

    </>
  );
}
