import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Government First Grade College, Sadalga",
      university: "Rani Chennamma University, Belagavi",
      year: "2023 - 2026",
      percentage: "85.09%",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institute: "B T Patil & Son's Polytechnic, Stavanidhi, Nipani",
      university: "Department of Technical Education, Bengaluru",
      year: "2020 - 2023",
      percentage: "68.94%",
    },
    {
      degree: "SSLC",
      institute: "M N D High School, Khadaklat - 591228",
      university: "Karnataka Secondary Education Examination Board",
      year: "2019",
      percentage: "78.08%",
    },
  ];

  return (
    <section
      id="education"
      data-aos="fade-up"
      className="bg-slate-950 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-500">
          Education
        </h2>

        <p className="text-center text-gray-400 mt-3">My Academic Journey</p>

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 w-1 h-full bg-purple-600"></div>

          {education.map((item, index) => (
            <div key={index} className="relative flex items-start gap-8 mb-12">
              {/* Timeline Icon */}
              <div className="bg-purple-600 p-4 rounded-full z-10">
                <FaGraduationCap size={24} />
              </div>

              {/* Card */}
              <div className="bg-slate-800 rounded-2xl p-6 w-full shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1 transition duration-300">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <span className="bg-purple-600 px-4 py-1 rounded-full text-sm">
                    {item.year}
                  </span>
                </div>

                <p className="text-purple-400 mt-3 font-semibold">
                  {item.institute}
                </p>

                <p className="text-gray-400 mt-1">{item.university}</p>

                <p className="mt-4">
                  <span className="font-semibold text-purple-300">
                    Percentage:
                  </span>{" "}
                  {item.percentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
