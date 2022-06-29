import { useState } from "react";

const contacts = [
  {
    title: "Call",
    paragraph: "999-000-222",
  },
  {
    title: "Email",
    paragraph: "aditya.novadianto@gmail.com",
  },
  {
    title: "Location",
    paragraph: "Bintaro sektor 9, Tangerang Selatan",
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

    window.location.reload();
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
    <div className="mt-5 pt-20">
      <h1 className="font-Poppins font-bold text-center text-2xl">
        Contact Me
      </h1>
      <p className="font-Poppins text-center text-gray-500 text-sm">
        Get in touch
      </p>

      <div className="w-[90%] md:w-[60%] max-w-[800px] m-auto mt-10">
        <div>
          {contacts.map((contact, index) => (
            <div key={index} className="mt-7">
              <h3 className="font-Poppins font-semibold text-xl">
                {contact.title}
              </h3>
              <p className="font-Poppins text-md text-gray-500 font-medium">
                {contact.paragraph}
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={submitHandler} className="mt-14">
          {inputs.map((input, index) => (
            <div key={index} className="relative mt-10">
              <h3 className="font-Poppins text-md absolute top-2 left-3">
                {input.title}
              </h3>
              <div>
                <input
                  className="border-2 border-blue-500 rounded-lg pt-10 w-full p-2"
                  type={input.type}
                  onChange={input.change}
                />
              </div>
              <div
                className={`${
                  error[input.name] ? "block" : "hidden"
                } text-red-500`}
              >
                {error[input.name]}
              </div>
            </div>
          ))}

          <div className="relative mt-10">
            <h3 className="font-Poppins text-md absolute top-2 left-3">
              Massage
            </h3>
            <textarea
              className="border-2 border-blue-500 rounded-lg pt-10 w-full p-2"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button className="px-3 py-2 bg-blue-500 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
