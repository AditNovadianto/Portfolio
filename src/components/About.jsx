import adit from "../images/adit.png";

const About = () => {
  return (
    <div id="about" className="mt-28 pt-20 p-5">
      <p className="font-Poppins font-bold text-2xl text-center">About Me</p>
      <p className="font-Poppins text-center text-gray-500 text-sm">
        My introduction
      </p>

      <div className="flex flex-col max-w-[800px] m-auto xl:flex-row items-center">
        <img
          className="w-[70%] m-auto rounded-lg shdw2 mt-10 mb-10"
          src={adit}
          alt="adit"
        />

        <p className="mt-5 xl:ml-10 xl:mt-0 font-Poppins bg-blue-100 text-center p-2 rounded-lg">
          hello, my name is Aditya Novadianto Pratama, I am usually called
          Aditya. I am now in grade 11 of Senior High School Plus Pembangunan
          Jaya. I come from Central Java, and I am 17 years old, and I live in
          Bintaro, South Tangerang.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-2 justify-evenly w-full">
        <div className="w-max font-Poppins text-center">
          <p className="font-bold text-3xl">-1</p>
          <p className="text-sm text-gray-500">Years experience</p>
        </div>
        <div className="w-max font-Poppins text-center">
          <p className="font-bold text-3xl">20+</p>
          <p className="text-sm text-gray-500">Completed project</p>
        </div>
        <div className="w-max font-Poppins text-center">
          <p className="font-bold text-3xl">1</p>
          <p className="text-sm text-gray-500">Companies worked</p>
        </div>
      </div>
    </div>
  );
};

export default About;
