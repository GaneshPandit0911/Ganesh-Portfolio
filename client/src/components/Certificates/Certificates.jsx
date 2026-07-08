import { FaCertificate } from "react-icons/fa";

import certificate1 from "../../assets/certificates/certificate1.pdf";
import certificate2 from "../../assets/certificates/certificate2.pdf";

function Certificates() {
  const certificates = [
    {
      title: "Internship Completion Certificate",
      issuer: "Ligand Software Solutions",
      year: "2026",
      file: certificate2,
    },
    {
      title: "Front End Web Development Certificate",
      issuer: "MindLuster.com",
      year: "2025",
      file: certificate1,
    },
  ];

  return (
    <section
      id="certificates"
      data-aos="zoom-in"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-500">
          Certificates
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Professional Certifications & Achievements
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-4 rounded-full">
                  <FaCertificate size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">{certificate.title}</h3>

                  <p className="text-purple-400">{certificate.issuer}</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <p>
                  <span className="font-semibold text-purple-300">
                    Issue Year :
                  </span>{" "}
                  {certificate.year}
                </p>

                <p>
                  <span className="font-semibold text-purple-300">
                    Status :
                  </span>{" "}
                  Verified Certificate
                </p>
              </div>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
