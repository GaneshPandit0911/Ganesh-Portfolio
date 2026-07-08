import profile from "../../assets/images/profile.jpg";
import resume from "../../assets/resume/Ganesh_Resume.pdf";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="min-h-screen bg-slate-900 flex items-center justify-center px-10 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-purple-400 text-2xl mb-3">Hello, I'm</h3>

          <h1 className="text-6xl font-bold text-white leading-tight">
            GANESH
            <br />
            DILIP PANDIT
          </h1>

          <div className="text-2xl text-gray-300 mt-6">
            <TypeAnimation
              sequence={[
                "MERN Full Stack Developer",
                2000,
                "Java Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 leading-8">
            Passionate Full Stack Developer specializing in MERN Stack and Java
            technologies. I enjoy building modern, responsive, and user-friendly
            web applications.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href={resume}
              download
              className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-purple-500 px-6 py-3 rounded-lg text-purple-300 hover:bg-purple-600 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="text-white hover:text-purple-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/ganesh-pandit-5a0496387"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-blue-500 hover:text-purple-500" />
            </a>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Ganesh"
            className="w-96 h-96 rounded-full object-cover border-8 border-purple-600 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
