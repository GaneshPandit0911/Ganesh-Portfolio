import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-500">GP Portfolio</h2>

            <p className="text-gray-400 mt-2">
              MERN Stack Developer | Java Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/ganesh-pandit-5a0496387"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ganesh.pandit0911@gmail.com"
              className="hover:text-purple-500"
            >
              <FaEnvelope />
            </a>

            <a href="tel:8296145298" className="hover:text-purple-500">
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        <hr className="my-6 border-slate-700" />

        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ganesh Dilip Pandit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
