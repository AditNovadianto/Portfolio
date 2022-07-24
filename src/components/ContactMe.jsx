import { useState } from "react";
import callIcon from "../images/call.svg";
import emailIcon from "../images/email.svg";
import locationIcon from "../images/location.svg";
import swal from "sweetalert";

const contacts = [
  {
    title: "Call",
    paragraph: "999-000-222",
    image: callIcon,
  },
  {
    title: "Email",
    paragraph: "aditya.novadianto@gmail.com",
    image: emailIcon,
  },
  {
    title: "Location",
    paragraph: "Bintaro sektor 9, Tangerang Selatan",
    image: locationIcon,
  },
];

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ContactMe = () => {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputProject, setInputProject] = useState();
  const [error, setError] = useState({});

  const nameHandler = (e) => {
    setInputName(e.target.value);
    if (e.target.value === "") {
      setError({ ...error, inputName: "Masukkan Nama" });
    } else {
      setError({ ...error, inputName: "" });
    }
  };

  const emailHandler = (e) => {
    setInputEmail(e.target.value);
    if (e.target.value === "") {
      setError({ ...error, inputEmail: "Masukkan Email" });
    } else {
      setError({ ...error, inputEmail: "" });
    }
  };

  const projectHandler = (e) => {
    setInputProject(e.target.value);
    if (e.target.value === "") {
      setError({ ...error, inputProject: "Masukkan Project" });
    } else {
      setError({ ...error, inputProject: "" });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let isError = false;
    let newError = {};

    if (!inputName) {
      newError.inputName = "Masukkan Nama";
      isError = true;
    }
    if (!inputEmail) {
      newError.inputEmail = "Masukkan Email";
      isError = true;
    }
    if (!validateEmail(inputEmail)) {
      newError.inputEmail = "Email anda tidak valid!";
      isError = true;
    }
    if (!inputProject) {
      newError.inputProject = "Masukkan Project";
      isError = true;
    }
    if (isError) {
      setError(newError);
      return;
    }

    swal({
      title: "Thankyou!",
      text: "I really appreciate for your response!",
      icon: "success",
    }).then((value) => {
      if (value) {
        window.location.reload();
      }
    });
  };

  console.log(error);

  const inputs = [
    {
      title: "Name",
      type: "text",
      change: nameHandler,
      name: "inputName",
    },
    {
      title: "Email",
      type: "email",
      change: emailHandler,
      name: "inputEmail",
    },
    {
      title: "Project",
      type: "text",
      change: projectHandler,
      name: "inputProject",
    },
  ];

  return (
    <div id="contact" className="mt-5 pt-20">
      <h1 className="font-Poppins transition-all dark:text-gray-200 font-bold text-center text-2xl">
        Contact Me
      </h1>
      <p className="font-Poppins transition-all dark:text-gray-300 text-center text-gray-500 text-sm">
        Get in touch
      </p>

      <div className="w-[90%] md:w-[60%] max-w-[800px] m-auto mt-10">
        <div>
          {contacts.map((contact, index) => (
            <div key={index} className="mt-7">
              <div className="flex items-center">
                <img
                  className="w-[25px]"
                  src={contact.image}
                  alt={contact.image}
                />
                <h3 className="font-Poppins transition-all dark:text-gray-200 ml-3 font-semibold text-xl">
                  {contact.title}
                </h3>
              </div>

              <p className="font-Poppins transition-all dark:text-gray-300 text-md mt-2 text-gray-500 font-medium">
                {contact.paragraph}
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={submitHandler} className="mt-14">
          {inputs.map((input, index) => (
            <div key={index} className="relative mt-10">
              <div className="relative z-[500]">
                <input
                  className="border-2 dark:bg-gray-800 dark:text-gray-200 transition-all border-slate-400 peer focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 rounded-lg pt-7 w-full p-2"
                  type={input.type}
                  onChange={input.change}
                  placeholder=" "
                />
                <span className="bg-white dark:bg-gray-800 dark:text-gray-200 px-1 font-Poppins font-medium text-md absolute left-2 -top-0.5 -translate-y-1/2 duration-300 peer-focus:-top-0.5 peer-placeholder-shown:top-1/2 transition-all">
                  {input.title}
                </span>
              </div>
              <div
                className={`${
                  error[input.name]
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                } text-red-500 transition-all mt-1 ml-2 font-medium font-Poppins text-sm duration-300`}
              >
                {error[input.name]}
              </div>
            </div>
          ))}

          <div className="relative mt-10">
            <textarea
              className="border-2 dark:bg-gray-800 dark:text-gray-200 transition-all peer focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-slate-400 rounded-lg pt-7 w-full p-2"
              cols="30"
              rows="10"
              placeholder=" "
            ></textarea>
            <span className="bg-white dark:bg-gray-800 dark:text-gray-200 px-1 font-Poppins font-medium text-md absolute left-2 -top-0.5 -translate-y-1/2 duration-300 peer-focus:-top-0.5 peer-placeholder-shown:top-6 transition-all">
              Massage
            </span>
          </div>

          <button className="px-3 py-2 font-Poppins w-full mt-5 transition-all hover:bg-blue-600 active:bg-blue-700 text-white font-semibold bg-blue-500 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
