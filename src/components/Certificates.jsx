import { useState } from "react";
import certificateJavascript from "../images/certificate-javascript.png";
import certificateReact from "../images/certificate-react.png";
import close from "../images/close.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Certificates = () => {
  const [showImageJs, setShowImageJs] = useState(false);
  const [showImageReact, setShowImageReact] = useState(false);

  const javascriptButton = () => {
    setShowImageJs(true);
  };

  const reactButton = () => {
    setShowImageReact(true);
  };

  const closeImage = () => {
    setShowImageJs(false);
    setShowImageReact(false);
  };

  const certificates = [
    {
      img: certificateJavascript,
      title: "Certificate Javascript",
      from: "sololearn",
      button: javascriptButton,
      aos: "fade-up-right",
    },
    {
      img: certificateReact,
      title: "Certificate React & Redux",
      from: "sololearn",
      button: reactButton,
      aos: "fade-up-left",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 1000 });
  }, []);

  return (
    <div className="mt-5 pt-20">
      <h1 className="font-Poppins font-bold text-center text-2xl">
        Certificates
      </h1>
      <p className="font-Poppins text-sm text-gray-500 text-center">
        Certificate that i haved
      </p>

      <div className="flex overflow-hidden items-center flex-col sm:flex-row mt-20 gap-10 justify-center">
        {certificates.map((certificate, index) => (
          <div
            data-aos={certificate.aos}
            key={index}
            className="w-[270px] h-[300px] border-[1px] border-gray-300 shdw3 rounded-xl overflow-hidden"
          >
            <button
              onClick={certificate.button}
              className="h-max overflow-hidden"
            >
              <img
                className="hover:scale-[1.1] duration-300 transition-all"
                src={certificate.img}
                alt={certificate.title}
              />
            </button>

            <div className="px-2 py-4 w-full">
              <h1 className="font-Poppins font-semibold text-xl">
                {certificate.title}
              </h1>
              <p className="font-Poppins text-gray-600 mt-2 text-sm">
                from: {certificate.from}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showImageJs && (
        <div className="fixed p-10 flex items-center justify-center top-0 z-[2000] flex-col bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50">
          <div>
            <button
              onClick={closeImage}
              className="flex translate-x-3 justify-end w-full"
            >
              <img className="w-[50px]" src={close} alt="close-icon" />
            </button>
            <img src={certificateJavascript} alt="certificate-javascript" />
          </div>
        </div>
      )}

      {showImageReact && (
        <div className="fixed p-10 flex items-center justify-center top-0 z-[2000] flex-col bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50">
          <div>
            <button
              onClick={closeImage}
              className="flex translate-x-3 justify-end w-full"
            >
              <img className="w-[50px]" src={close} alt="close-icon" />
            </button>
            <img src={certificateReact} alt="certificate-react" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
