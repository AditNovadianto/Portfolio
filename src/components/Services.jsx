import webGrid from "../images/web-grid.svg";
import checklist from "../images/checklist.svg";
import { useState } from "react";

const services = [
  "I develop the user interface.",
  "Web page development.",
  "I create ux element interactions.",
  "I position your company brand",
];

const Services = () => {
  const [showUiUx, setShowUiUx] = useState(false);
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBrandingDesigner, setShowBrandingDesigner] = useState(false);

  const UiUxButton = () => {
    setShowUiUx(true);
  };

  const frontendButton = () => {
    setShowFrontend(true);
  };

  const brandingDesignerButton = () => {
    setShowBrandingDesigner(true);
  };

  const closeButton = () => {
    setShowUiUx(false);
    setShowFrontend(false);
    setShowBrandingDesigner(false);
  };

  const sections = [
    {
      image: webGrid,
      paragraph: "Ui/Ux Designer",
      button: UiUxButton,
    },
    {
      image: webGrid,
      paragraph: "Frontend Developers",
      button: frontendButton,
    },
    {
      image: webGrid,
      paragraph: "Branding Designer",
      button: brandingDesignerButton,
    },
  ];

  return (
    <div id="services" className="mt-5 pt-20">
      <h1 className="font-Poppins px-5 font-bold text-2xl text-center">
        Services
      </h1>
      <p className="font-Poppins px-5 text-center text-gray-500 text-sm">
        What i offer
      </p>

      <div className="px-5 mt-20 flex items-center justify-center flex-wrap gap-5">
        {sections.map((section, index) => (
          <div key={index} className="w-[200px] shdw3 rounded-md p-5">
            <img className="w-[30px]" src={section.image} alt="web-grid" />
            <p className="font-Poppins font-semibold text-2xl mt-5">
              {section.paragraph}
            </p>
            <button
              onClick={section.button}
              className="group flex items-center mt-5"
            >
              <p className="font-Poppins font-semibold text-blue-500">
                View More
              </p>
              <svg
                className="ml-2 group-hover:translate-x-2 transition-all"
                id="SvgjsSvg1011"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <defs id="SvgjsDefs1012"></defs>
                <g id="SvgjsG1013">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M21.92,12.38a1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-7-7a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.92,12.38Z"
                      data-name="arrow right"
                      fill="#3975c4"
                      className="color000 svgShape"
                    ></path>
                  </svg>
                </g>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div
        className={`${
          showUiUx ? "top-0 bottom-0 opacity-100" : "opacity-0"
        } fixed left-0 right-0 bg-gray-500 z-[2000] px-10 bg-opacity-50 transition-all duration-300 w-full items-center flex flex-col justify-center`}
      >
        <div className="bg-white sm:w-[360px] p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-Poppins font-semibold text-xl">Ui/Ux Designer</p>
            <button onClick={closeButton}>
              <svg
                className="fill-gray-500 hover:fill-red-500 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-7">
            {services.map((service, index) => (
              <div key={index} className="mt-3 flex items-center">
                <img className="w-[30px]" src={checklist} alt="checklist" />
                <p className="font-Poppins ml-2 font-semibold text-gray-500">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${
          showFrontend ? "top-0 bottom-0 opacity-100" : "opacity-0"
        } fixed left-0 right-0 bg-gray-500 z-[2000] px-10 bg-opacity-50 transition-all duration-300 w-full items-center flex flex-col justify-center`}
      >
        <div className="bg-white sm:w-[360px] p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-Poppins font-semibold text-xl">
              Frontend Developer
            </p>
            <button onClick={closeButton}>
              <svg
                className="fill-gray-500 hover:fill-red-500 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-7">
            {services.map((service, index) => (
              <div key={index} className="mt-3 flex items-center">
                <img className="w-[30px]" src={checklist} alt="checklist" />
                <p className="font-Poppins ml-2 font-semibold text-gray-500">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${
          showBrandingDesigner ? "top-0 bottom-0 opacity-100" : "opacity-0"
        } fixed left-0 right-0 bg-gray-500 z-[2000] px-10 bg-opacity-50 transition-all duration-300 w-full items-center flex flex-col justify-center`}
      >
        <div className="bg-white sm:w-[360px] p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-Poppins font-semibold text-xl">
              Branding Designer
            </p>
            <button onClick={closeButton}>
              <svg
                className="fill-gray-500 hover:fill-red-500 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-7">
            {services.map((service, index) => (
              <div key={index} className="mt-3 flex items-center">
                <img className="w-[30px]" src={checklist} alt="checklist" />
                <p className="font-Poppins ml-2 font-semibold text-gray-500">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
