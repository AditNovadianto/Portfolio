import weatherProject from "../images/weather-project.png";
import adviceGeneratorProject from "../images/advice-generator-project.png";
import expensesChartProject from "../images/expenses-chart-project.png";
import insureLandingPageProject from "../images/insure-landing-page-project.png";
import timeTrackingDashboardProject from "../images/time-tracking-dashboard-project.png";
import socialMediaDashboardProject from "../images/social-media-dashboard-project.png";
import projectTrackingIntro from "../images/project-tracking-intro.png";
import sunnysideLandingPageProject from "../images/sunnyside-landing-page-project.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    img: weatherProject,
    title: "Umang Weather",
    github: "https://github.com/AditNovadianto/API-Weathers",
    livePreview: "http://api-weathers.vercel.app/",
    aos: "fade-right",
  },
  {
    img: adviceGeneratorProject,
    title: "Advice Generator",
    github: "https://github.com/AditNovadianto/advice-generator-app-main",
    livePreview: "https://advice-generator-app-main-ochre.vercel.app/",
    aos: "fade-right",
  },
  {
    img: expensesChartProject,
    title: "Expenses Chart",
    github: "https://github.com/AditNovadianto/expenses-chart-component-main",
    livePreview: "https://expenses-chart-component-main.vercel.app/",
    aos: "fade-right",
  },
  {
    img: insureLandingPageProject,
    title: "Insure Landing Page",
    github: "https://github.com/AditNovadianto/insure-landing-page-master",
    livePreview: "https://insure-landing-page-master-xi.vercel.app/",
    aos: "fade-right",
  },
  {
    img: timeTrackingDashboardProject,
    title: "Time Tracking",
    github: "https://github.com/AditNovadianto/time-tracking-dashboard-main",
    livePreview: "https://time-tracking-dashboard-main-eight.vercel.app/",
    aos: "fade-left",
  },
  {
    img: socialMediaDashboardProject,
    title: "Social Media Dashboard",
    github:
      "https://github.com/AditNovadianto/social-media-dashboard-with-theme-switcher-master",
    livePreview:
      "https://social-media-dashboard-with-theme-switcher-master-xi.vercel.app/",
    aos: "fade-left",
  },
  {
    img: projectTrackingIntro,
    title: "Project Tracking Intro",
    github:
      "https://github.com/AditNovadianto/project-tracking-intro-component-master",
    livePreview:
      "https://project-tracking-intro-component-master-brown.vercel.app/",
    aos: "fade-left",
  },
  {
    img: sunnysideLandingPageProject,
    title: "Sunnyside Landing Page",
    github:
      "https://github.com/AditNovadianto/sunnyside-agency-landing-page-main",
    livePreview: "https://sunnyside-agency-landing-page-main-sooty.vercel.app/",
    aos: "fade-left",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 1000 });
  }, []);

  return (
    <div className="mt-5 pt-20">
      <h1 className="font-Poppins font-bold text-center text-2xl">Projects</h1>
      <p className="font-Poppins text-sm text-gray-500 text-center">
        My projects
      </p>

      <div className="flex overflow-x-hidden flex-wrap mt-16 gap-10 items-center justify-center p-5">
        {projects.map((project) => (
          <div
            data-aos={project.aos}
            className="w-[270px] h-[350px] border-[1px] border-gray-300 shdw3 rounded-xl overflow-hidden"
          >
            <div className="h-max cursor-pointer overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-300 transition-all"
                src={project.img}
                alt="weather-project"
              />
            </div>

            <div className="px-2 py-4 w-full border-b-[1px] border-gray-400">
              <h1 className="font-Poppins font-semibold text-xl">
                {project.title}
              </h1>
            </div>
            <div className="px-2 py-3 w-max">
              <a
                className="flex items-center group transition-all"
                href={project.github}
                target="_blank"
              >
                <img
                  className="w-[20px] group-hover:rotate-[30deg] transition-all"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                />
                <p className="font-Poppins hover:text-blue-500 transition-all text-sm ml-3">
                  Github Repository
                </p>
              </a>
              <a
                className="mt-2 flex items-center group transition-all"
                href={project.livePreview}
                target="_blank"
              >
                <img
                  className="w-[30px] -translate-x-1 group-hover:rotate-[30deg] transition-all"
                  src="https://www.creative-tim.com/assets/icon-vite-f0eb8f14d3ba1b47beeb44734ff11f3c4bf84b9a731892f2fbc34fc0442a8421.jpg"
                  alt="vite"
                />
                <p className="font-Poppins -translate-x-[9px] hover:text-blue-500 transition-all text-sm ml-3">
                  Live Preview
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center font-Poppins font-semibold text-md">
        And many more projects that i made, to see them again you can click the
        following link{" "}
        <a
          className="text-blue-500 underline ml-2"
          href="https://www.frontendmentor.io/profile/AditNovadianto"
          target="_blank"
        >
          Click Me!!!
        </a>
      </p>
    </div>
  );
};

export default Projects;
