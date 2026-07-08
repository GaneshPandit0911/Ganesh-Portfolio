import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section
      id="skills"
      data-aos="zoom-in"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-500">
          My Skills
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Technologies I use to build modern web applications
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl text-purple-400 mb-4">{skill.icon}</div>

              <h3 className="text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
