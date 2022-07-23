import edu from "../images/education.svg";
import bag from "../images/bags.svg";
import calendar from "../images/calendar.svg";
import { useState } from "react";

const educations = [
  {
    flexRow: "flex-row",
    school: "TK Kasih Ananda",
    location: "Tangerang Selatan, sektor 2",
    year: "2008 - 2010",
    border: "w-[2px] sm:h-[110px] h-[140px] ml-[6px] bg-black",
    rounder: "-translate-x-[7px]",
  },
  {
    flexRow: "flex-row-reverse",
    justify: "justify-start",
    school: "SD Pembangunan Jaya",
    location: "Tangerang Selatan, sektor 3a",
    year: "2011 - 2017",
    border: "w-[2px] h-[175px] sm:mr-[27.5px] mr-[20.5px] bg-black",
    rounder: "translate-x-[30px] mr-[22px]",
  },
  {
    flexRow: "flex-row",
    school: "SMP Pembangunan Jaya",
    location: "Tangerang Selatan, sektor 3a",
    year: "2017 - 2020",
    border: "w-[2px] h-[167px] ml-[6px] bg-black",
    rounder: "-translate-x-[7px]",
  },
  {
    flexRow: "flex-row-reverse",
    justify: "justify-start",
    school: "SMA Plus Pembangunan Jaya",
    location: "Tangerang Selatan, sektor 9",
    year: "2021 - 2023",
    border: "sm:mr-[27.5px] mr-[20.5px] w-[2px] h-[167px] bg-black",
    rounder: "translate-x-[30px] mr-[22px]",
  },
];

const programmers = [
  {
    flexRow: "flex-row",
    language: "Python",
    year: "2021 - 2021",
    border: "w-[2px] h-[110px] ml-[6px] bg-black",
    rounder: "-translate-x-[7px]",
  },
  {
    flexRow: "flex-row-reverse",
    language: "HTML",
    year: "2021 - 2022",
    border: "w-[2px] h-[175px] sm:mr-[27.5px] mr-[20.5px] bg-black",
    rounder: "translate-x-[30px] mr-[22px]",
  },
  {
    flexRow: "flex-row",
    language: "CSS",
    year: "2021 - 2022",
    border: "w-[2px] h-[167px] ml-[6px] bg-black",
    rounder: "-translate-x-[7px]",
  },
  {
    flexRow: "flex-row-reverse",
    language: "JavaScript",
    year: "2021 - 2022",
    border: "sm:mr-[27.5px] mr-[20.5px] w-[2px] h-[167px] bg-black",
    rounder: "translate-x-[30px] mr-[22px]",
  },
  {
    flexRow: "flex-row",
    language: "React",
    year: "2021 - 2022",
    border: "w-[2px] h-[167px] ml-[6px] bg-black",
    rounder: "-translate-x-[7px]",
  },
  {
    flexRow: "flex-row-reverse",
    language: "Golang",
    year: "2021 - 2022",
    border: "sm:mr-[27.5px] mr-[20.5px] w-[2px] h-[167px] bg-black",
    rounder: "translate-x-[30px] mr-[22px]",
  },
];

const Qualification = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showProgrammer, setShowProgrammer] = useState(false);

  const educationButton = () => {
    setShowEducation(true);
    setShowProgrammer(false);
  };

  const programmerButton = () => {
    setShowEducation(false);
    setShowProgrammer(true);
  };

  return (
    <div className="mt-5 pt-20">
      <h1 className="font-Poppins transition-all dark:text-gray-200 font-bold text-2xl text-center">
        Qualification
      </h1>
      <p className="font-Poppins transition-all dark:text-gray-300 text-center text-gray-500 text-sm">
        My personal journey
      </p>

      <div className="w-[300px] sm:w-[375px] m-auto px-2">
        <div className="flex items-center w-full justify-around my-10">
          <button onClick={educationButton} className="group flex items-center">
            <img
              className={`${
                showEducation ? "scale-[1.1]" : "scale-100"
              } transition-all w-[30px]`}
              src={edu}
              alt="education"
            />
            <div
              className={`${
                showEducation
                  ? "text-blue-500 scale-[1.1]"
                  : "text-gray-500 dark:text-gray-400"
              } font-semibold ml-2 transition-all group-hover:text-blue-500 font-Poppins`}
            >
              Education
            </div>
          </button>
          <button
            onClick={programmerButton}
            className="group flex items-center"
          >
            <img
              className={`${
                showProgrammer ? "scale-[1.1]" : "scale-100"
              } transition-all w-[30px]`}
              src={bag}
              alt="bag"
            />
            <div
              className={`${
                showProgrammer
                  ? "text-blue-500 scale-[1.1]"
                  : "text-gray-500 dark:text-gray-400"
              } font-semibold ml-2 transition-all group-hover:text-blue-500 font-Poppins`}
            >
              Programmer
            </div>
          </button>
        </div>

        <div>
          {showEducation &&
            educations.map((eduaction, index) => (
              <div
                key={index}
                className={`flex ${eduaction.flexRow} ${eduaction.justify} w-full items-center`}
              >
                <div className="w-[45%]">
                  <p className="font-Poppins transition-all dark:text-gray-200 font-semibold text-lg">
                    {eduaction.school}
                  </p>
                  <p className="font-Poppins transition-all dark:text-gray-300 text-gray-500 text-sm">
                    {eduaction.location}
                  </p>
                  <div className="flex items-center mt-5">
                    <img className="w-[20px]" src={calendar} alt="calendar" />
                    <p className="font-Poppins text-sm text-gray-500 dark:text-gray-300 transition-all ml-2">
                      {eduaction.year}
                    </p>
                  </div>
                </div>
                <div className={`${eduaction.border}`}></div>
                <div
                  className={`${eduaction.rounder} w-[13px] h-[13px] bg-blue-500 rounded-full`}
                ></div>
              </div>
            ))}
        </div>
        <div>
          {showProgrammer &&
            programmers.map((programmer, index) => (
              <div
                key={index}
                className={`flex ${programmer.flexRow} w-full items-center`}
              >
                <div className="w-[45%]">
                  <p className="font-Poppins transition-all dark:text-gray-200 font-semibold text-lg">
                    {programmer.language}
                  </p>
                  <div className="flex items-center mt-5">
                    <img className="w-[20px]" src={calendar} alt="calendar" />
                    <p className="font-Poppins transition-all dark:text-gray-300 text-sm text-gray-500 ml-2">
                      {programmer.year}
                    </p>
                  </div>
                </div>
                <div className={`${programmer.border}`}></div>
                <div
                  className={`${programmer.rounder} w-[13px] h-[13px] bg-blue-500 rounded-full`}
                ></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
