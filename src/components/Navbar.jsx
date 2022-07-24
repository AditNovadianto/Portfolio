import { useState } from "react";
import menu from "../images/menu.svg";
import close from "../images/close.svg";
import home from "../images/home.svg";
import profile from "../images/profile.svg";
import sheet from "../images/sheet.svg";
import bag from "../images/bags.svg";
import project from "../images/project.svg";
import send from "../images/send.svg";
import darkModeIcon from "../images/moon.svg";
import lightModeIcon from "../images/light-mode.svg";
import { useEffect } from "react";

const navbarMobiles = [
  [
    {
      image: home,
      text: "Home",
      id: "#home",
    },
    {
      image: bag,
      text: "Services",
      id: "#services",
      mt: "mt-7",
    },
  ],
  [
    {
      image: profile,
      text: "About",
      id: "#about",
    },
    {
      image: project,
      text: "Projects",
      id: "#project",
      mt: "mt-7",
    },
  ],
  [
    {
      image: sheet,
      text: "Skills",
      id: "#skills",
    },
    {
      image: send,
      text: "Contact Me",
      id: "#contact",
      mt: "mt-7",
    },
  ],
];

const navbarDesktop = [
  {
    text: "Home",
    id: "home",
  },
  {
    text: "About",
    id: "about",
  },
  {
    text: "Skills",
    id: "skills",
  },
  {
    text: "Services",
    id: "services",
  },
  {
    text: "Projects",
    id: "project",
  },
  {
    text: "Contact Me",
    id: "contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(false);
  const [bar, setBar] = useState({});
  const [dark, setDark] = useState(localStorage.theme == "dark" ? true : false);

  const darkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const navMobile = () => {
    setShow(!show);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    console.log(bar);
  }, [bar]);

  return (
    <>
      <header
        className={`${
          color ? "bg-blue-300 px-7" : "bg-blue-200 px-10"
        } fixed lg:hidden block z-[1000] group overflow-hidden top-0 transition-all duration-1000 pt-5 w-full rounded-b-2xl shdw`}
      >
        <nav
          className={`${
            show ? "h-max" : "h-[25px]"
          } transition-all relative flex z-50 items-center justify-between`}
        >
          <a
            className={`${
              color ? "text-blue-800" : "text-blue-600"
            } font-Poppins transition-all text-lg font-semibold`}
            href="#home"
          >
            Aditya
          </a>
          <div className="flex items-center">
            <button
              className="p-2 rounded-full bg-blue-400 transition-all dark:bg-blue-500"
              onClick={darkMode}
            >
              <img
                className="w-[25px] hover:scale-[1.2] transition-all"
                src={dark ? lightModeIcon : darkModeIcon}
                alt={dark ? "light mode icon" : "dark mode icon"}
              />
            </button>
            <button className="ml-5" onClick={navMobile}>
              <img
                className={`${
                  show
                    ? "w-[25px] hover:scale-[1.2]"
                    : "w-[20px] hover:scale-[1.1]"
                } transition-all`}
                src={show ? close : menu}
                alt="navbar"
              />
            </button>
          </div>
        </nav>

        <div
          className={`${
            show ? "opacity-100 mb-0" : "opacity-0 hdn"
          } w-full transition-all -z-50 flex items-center justify-between mt-5`}
        >
          <div className="mb-7 flex flex-col items-center">
            {navbarMobiles[0].map((section, index) => (
              <a
                key={index}
                href={section.id}
                className={`${section.mt} hover:scale-[1.2] transition-all flex flex-col justify-center items-center`}
              >
                <img
                  className="group w-[25px]"
                  src={section.image}
                  alt="home"
                />
                <p className="mt-1">{section.text}</p>
              </a>
            ))}
          </div>

          <div className="mb-7 flex flex-col items-center">
            {navbarMobiles[1].map((section, index) => (
              <a
                key={index}
                href={section.id}
                className={`${section.mt} hover:scale-[1.2] transition-all flex flex-col justify-center items-center`}
              >
                <img
                  className="group w-[25px]"
                  src={section.image}
                  alt="home"
                />
                <p className="mt-1">{section.text}</p>
              </a>
            ))}
          </div>

          <div className="mb-7 flex flex-col items-center">
            {navbarMobiles[2].map((section, index) => (
              <a
                key={index}
                href={section.id}
                className={`${section.mt} hover:scale-[1.2] transition-all flex flex-col justify-center items-center`}
              >
                <img
                  className="group w-[25px]"
                  src={section.image}
                  alt="home"
                />
                <p className="mt-1">{section.text}</p>
              </a>
            ))}
          </div>
        </div>
      </header>

      <header
        className={`${
          color
            ? "bg-blue-300 bg-opacity-70 px-7 backdrop-blur"
            : "bg-transparent px-10"
        } fixed lg:block hidden z-[1000] group overflow-hidden top-0 transition-all duration-1000 pt-5 w-full`}
      >
        <div className="flex pb-5 items-center justify-between w-full">
          <a
            className={`${
              color ? "text-blue-800" : "text-blue-600 dark:text-blue-400"
            } font-Poppins transition-all text-2xl font-semibold`}
            href="#home"
          >
            Aditya
          </a>

          <div className="flex flex-row">
            {navbarDesktop.map((section, index) => (
              <button
                className="ml-10"
                onClick={() => {
                  setBar(section);
                }}
              >
                <a
                  className={`${
                    color ? "text-blue-800" : "text-blue-600 dark:text-blue-400"
                  } ${
                    bar.id == section.id
                      ? "after:bg-white"
                      : "after:bg-transparent"
                  } hover:text-blue-300 after:content-[''] after:block after:h-1 after:rounded-lg after:w-full transition-all font-Poppins font-semibold`}
                  key={index}
                  href={`#${section.id}`}
                >
                  {section.text}
                </a>
              </button>
            ))}
          </div>
        </div>
      </header>
      <div className="fixed lg:block hidden right-0 z-[1000] rounded-l-full border-2 dark:border-gray-600 bg-white dark:bg-gray-700 transition-all shadow-md shadow-black overflow-hidden bottom-[200px]">
        <button onClick={darkMode} className="px-4 py-1">
          <img
            className="w-[50px] transition-all"
            src={dark ? lightModeIcon : darkModeIcon}
            alt={dark ? "light mode icon" : "dark mode icon"}
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
