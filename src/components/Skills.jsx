import bracket from "../images/bracket.svg";
import arrowDown from "../images/arrow-down.svg";
import server from "../images/server.svg";
import swatchBook from "../images/swatchbook.svg";
import { useState } from "react";

const skillsFrontend = [
  {
    language: "HTML",
    percentage: "90%",
    width: "w-[90%]",
  },
  {
    language: "CSS",
    percentage: "85%",
    width: "w-[85%]",
  },
  {
    language: "JavaScript",
    percentage: "75%",
    width: "w-[75%]",
  },
  {
    language: "React",
    percentage: "85%",
    width: "w-[85%]",
  },
];

const skillsBackend = [
  {
    language: "Python",
    percentage: "85%",
    width: "w-[85%]",
  },
  {
    language: "Node Js",
    percentage: "80%",
    width: "w-[80%]",
  },
  {
    language: "Golang",
    percentage: "75%",
    width: "w-[75%]",
  },
  {
    language: "TypeScript",
    percentage: "55%",
    width: "w-[55%]",
  },
];

const skillsDesigner = [
  {
    application: "Figma",
    percentage: "80%",
    width: "w-[80%]",
  },
  {
    application: "Sketch",
    percentage: "75%",
    width: "w-[75%]",
  },
  {
    application: "Photoshop",
    percentage: "70%",
    width: "w-[70%]",
  },
];

const Skills = () => {
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(false);
  const [designer, setDesigner] = useState(false);

  const showFrontend = () => {
    setFrontend(!frontend);
    setBackend(false);
    setDesigner(false);
  };

  const showBackend = () => {
    setFrontend(false);
    setBackend(!backend);
    setDesigner(false);
  };

  const showDesigner = () => {
    setFrontend(false);
    setBackend(false);
    setDesigner(!designer);
  };

  return (
    <div id="skills" className="pt-20 p-5">
      <h1 className="font-Poppins font-bold dark:text-gray-200 transition-all text-2xl text-center">
        Skills
      </h1>
      <p className="font-Poppins text-center dark:text-gray-300 transition-all text-gray-500 text-sm">
        My technical level
      </p>

      <div className="mt-10 max-w-[800px] m-auto">
        <div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img className="w-[25px] mr-3" src={bracket} alt="bracket" />
              <div>
                <h1 className="font-Poppins font-bold transition-all dark:text-gray-200 text-2xl mt-2">
                  Frontend developer
                </h1>
                <p className="font-Poppins transition-all dark:text-gray-300 font-semibold text-gray-500 mt-2">
                  Less than 1 year
                </p>
              </div>
            </div>

            <button onClick={showFrontend}>
              <img
                className={`${
                  frontend ? "rotate-180" : "rotate-0"
                } transition-all w-[20px] ml-3 mt-2`}
                src={arrowDown}
                alt="arrow-down"
              />
            </button>
          </div>

          <div
            className={`${
              frontend
                ? "translate-y-0 opacity-100 relative"
                : "-translate-y-10 opacity-0 absolute"
            } transition-all`}
          >
            {skillsFrontend.map((skill, index) => (
              <>
                <div
                  key={index}
                  className="mt-10 flex items-center justify-between w-full"
                >
                  <p className="font-Poppins dark:text-gray-200 transition-all font-bold text-xl">
                    {skill.language}
                  </p>
                  <p className="font-Poppins transition-all dark:text-gray-300 font-semibold text-gray-500">
                    {skill.percentage}
                  </p>
                </div>
                <div className="w-full mt-3 h-2 overflow-hidden rounded-lg bg-blue-300">
                  <div className={`${skill.width} h-2 bg-blue-500`}></div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img className="w-[25px] mr-3" src={server} alt="server" />
              <div>
                <h1 className="font-Poppins transition-all dark:text-gray-200 font-bold text-2xl mt-2">
                  Backend developer
                </h1>
                <p className="font-Poppins transition-all dark:text-gray-300 font-semibold text-gray-500 mt-2">
                  Less than 1 year
                </p>
              </div>
            </div>

            <button onClick={showBackend}>
              <img
                className={`${
                  backend ? "rotate-180" : "rotate-0"
                } transition-all w-[20px] ml-3 mt-2`}
                src={arrowDown}
                alt="arrow-down"
              />
            </button>
          </div>

          <div
            className={`${
              backend
                ? "translate-y-0 opacity-100 relative"
                : "-translate-y-10 opacity-0 absolute"
            } transition-all`}
          >
            {skillsBackend.map((skill, index) => (
              <>
                <div
                  key={index}
                  className="mt-10 flex items-center justify-between w-full"
                >
                  <p className="font-Poppins transition-all dark:text-gray-200 font-bold text-xl">
                    {skill.language}
                  </p>
                  <p className="font-Poppins transition-all dark:text-gray-300 font-semibold text-gray-500">
                    {skill.percentage}
                  </p>
                </div>
                <div className="w-full mt-3 overflow-hidden h-2 rounded-lg bg-blue-300">
                  <div className={`${skill.width} h-2 bg-blue-500`}></div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                className="w-[25px] mr-3"
                src={swatchBook}
                alt="swatch-book"
              />
              <div>
                <h1 className="font-Poppins transition-all dark:text-gray-200 font-bold text-2xl mt-2">
                  Designer
                </h1>
                <p className="font-Poppins transition-all dark:text-gray-300 font-semibold text-gray-500 mt-2">
                  Less than 1 year
                </p>
              </div>
            </div>

            <button onClick={showDesigner}>
              <img
                className={`${
                  designer ? "rotate-180" : "rotate-0"
                } transition-all w-[20px] ml-2 mt-2`}
                src={arrowDown}
                alt="arrow-down"
              />
            </button>
          </div>

          <div
            className={`${
              designer
                ? "translate-y-0 opacity-100 relative"
                : "-translate-y-10 opacity-0 absolute"
            } transition-all`}
          >
            {skillsDesigner.map((skill, index) => (
              <>
                <div
                  key={index}
                  className="mt-10 flex items-center justify-between w-full"
                >
                  <p className="font-Poppins transition-all dark:text-gray-200 font-bold text-xl">
                    {skill.application}
                  </p>
                  <p className="font-Poppins transition-all dark:text-gray-300 font-semibold text-gray-500">
                    {skill.percentage}
                  </p>
                </div>
                <div className="w-full mt-3 overflow-hidden h-2 rounded-lg bg-blue-300">
                  <div className={`${skill.width} h-2 bg-blue-500`}></div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
