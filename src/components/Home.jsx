import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import adit from "../images/adit.png";
import send from "../images/send.svg";
import mouse from "../images/mouse.svg";
import arrowBottom from "../images/arrow-bottom.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Fullstack Developers",
        "Student at Senior high school Plus Pembangunan Jaya",
        "Student who loves coding",
        "People who live in Tangerang Selatan",
      ],
      startDelay: 1000,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="flex flex-col mt-5 w-full pt-24 p-5">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col gap-10 justify-between mr-10 items-center">
          <a href="https://github.com/AditNovadianto" target="_blank">
            <img
              className="hover:scale-[1.2] transition-all w-[25px] translate-x-1"
              src={github}
              alt="github"
            />
          </a>
          <a
            className="ml-2"
            href="https://www.instagram.com/aditya_novadianto/"
            target="_blank"
          >
            <img
              className="hover:scale-[1.2] transition-all w-[25px]"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>

        <svg
          className="block m-auto w-[320px] fill-blue-600"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image className="w-[150px]" x="25" y="-10" href={adit} />
          </g>
        </svg>
      </div>

      <div className="mt-14">
        <h1 className="font-Poppins transition-all text-2xl font-semibold text-black">
          Hi, I'am a <span className="font-bold text-blue-700" ref={el}></span>
        </h1>
        <p className="font-Poppins text-xl font-semibold text-blue-700"></p>
        <p className="font-Poppins mt-3 text-gray-600">
          I am a student in grade 11 high school who likes coding, and learning
          new things for a better future.
        </p>
        <a
          className="flex hover:bg-blue-400 font-semibold transition-all w-max px-5 py-4 text-center rounded-lg bg-blue-300 text-white mt-5 items-center"
          href="#"
        >
          Contact Me <img className="w-[25px] ml-2" src={send} alt="send" />
        </a>

        <a className="flex w-max items-center mt-10" href="#about">
          <img className="w-[25px]" src={mouse} alt="mouse" />
          <p className="font-Poppins ml-1 text-gray-600">scroll down</p>
          <img className="w-[20px] ml-1" src={arrowBottom} alt="arrow-bottom" />
        </a>
      </div>
    </div>
  );
};

export default Home;
