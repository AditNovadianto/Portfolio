import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import golang from "../images/golang.png";
import python from "../images/python.png";
import tailwind from "../images/tailwind.png";
import nodejs from "../images/nodejs.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const languages = [
  [
    {
      img: html,
      width: "w-[80px]",
      margin: "-mt-1.5",
    },
    {
      img: react,
      width: "w-[70px]",
      margin: "mt-10",
    },
  ],
  [
    {
      img: css,
      width: "w-[70px]",
    },
    {
      img: golang,
      width: "w-[70px]",
      margin: "mt-10",
    },
  ],
  [
    {
      img: javascript,
      width: "w-[60px]",
    },
    {
      img: python,
      width: "w-[70px]",
      margin: "mt-10",
    },
  ],
  [
    {
      img: tailwind,
      width: "w-[60px]",
      margin: "mt-5",
    },
    {
      img: nodejs,
      width: "w-[70px]",
      margin: "mt-14",
    },
  ],
];

const Languages = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 1000 });
  }, []);

  return (
    <div className="pt-20 mt-5">
      <h1 className="font-Poppins transition-all dark:text-gray-200 font-bold text-2xl text-center">
        Languages & Tools
      </h1>
      <p className="font-Poppins transition-all dark:text-gray-300 text-sm text-gray-500 text-center">
        Languages and tools that i used
      </p>

      <div className="mt-10 overflow-x-hidden sm:flex-row flex-col flex items-center justify-around">
        <div
          data-aos="fade-right"
          className="flex items-center w-full justify-around"
        >
          <div className="flex flex-col justify-around items-center">
            {languages[0].map((language, index) => (
              <img
                key={index}
                className={`${language.width} ${language.margin} grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer`}
                src={language.img}
                alt={language.img}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-around">
            {languages[1].map((language, index) => (
              <img
                key={index}
                className={`${language.width} ${language.margin} grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer`}
                src={language.img}
                alt={language.img}
              />
            ))}
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex items-center sm:mt-0 mt-10 justify-around w-full"
        >
          <div className="flex flex-col items-center justify-center">
            {languages[2].map((language, index) => (
              <img
                key={index}
                className={`${language.width} ${language.margin} grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer`}
                src={language.img}
                alt={language.img}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            {languages[3].map((language, index) => (
              <img
                key={index}
                className={`${language.width} ${language.margin} grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer`}
                src={language.img}
                alt={language.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
