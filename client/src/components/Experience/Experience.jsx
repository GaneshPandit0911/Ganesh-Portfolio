import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      data-aos="fade-right"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-500">
          Experience
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Internship & Professional Experience
        </p>

        <div className="mt-14">
          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/40 transition duration-300">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-4 rounded-full">
                  <FaBriefcase size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    MERN Stack Developer Intern
                  </h3>

                  <p className="text-purple-400">
                    Ligand Software Solutions, Sankeshwar
                  </p>
                </div>
              </div>

              <span className="bg-purple-600 px-4 py-2 rounded-full text-sm mt-4 md:mt-0">
                4 Months
              </span>
            </div>

            <p className="mt-8 text-gray-300 leading-8">
              Completed a 6-month internship focused on MERN Stack development.
              Worked on developing responsive web applications using MongoDB,
              Express.js, React, and Node.js. Improved problem-solving skills,
              collaborated with mentors, and gained practical experience in
              frontend and backend development.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-700 px-4 py-2 rounded-full">
                  React
                </span>

                <span className="bg-purple-700 px-4 py-2 rounded-full">
                  Node.js
                </span>

                <span className="bg-purple-700 px-4 py-2 rounded-full">
                  Express.js
                </span>

                <span className="bg-purple-700 px-4 py-2 rounded-full">
                  MongoDB
                </span>

                <span className="bg-purple-700 px-4 py-2 rounded-full">
                  JavaScript
                </span>

                <span className="bg-purple-700 px-4 py-2 rounded-full">
                  Git & GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
