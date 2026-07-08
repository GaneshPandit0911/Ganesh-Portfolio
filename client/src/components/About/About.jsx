import profile from "../../assets/images/profile.jpg";

function About() {
  return (
    <section
      id="about"
      data-aos="fade-right"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Ganesh"
            className="w-80 h-80 rounded-2xl border-4 border-purple-600 shadow-lg object-cover"
          />
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl font-bold text-purple-500 mb-6">About Me</h2>

          <p className="text-gray-300 leading-8 text-lg">
            I am a passionate and dedicated MERN Full Stack Developer with a
            strong foundation in React, Node.js, Express.js, MongoDB, JavaScript
            and Java. I enjoy building responsive and user-friendly web
            applications while continuously learning new technologies.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800 p-5 rounded-xl">
              <h3 className="text-purple-400 font-semibold">🎓 Education</h3>

              <p className="mt-2">Bachelor of Computer Applications</p>

              <p className="text-gray-400">Rani Chennamma University</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h3 className="text-purple-400 font-semibold">💼 Internship</h3>

              <p className="mt-2">Ligand Software Solutions</p>

              <p className="text-gray-400">6 Months</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h3 className="text-purple-400 font-semibold">📍 Location</h3>

              <p className="mt-2">Belagavi, Karnataka</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h3 className="text-purple-400 font-semibold">💻 Experience</h3>

              <p className="mt-2">MERN Stack Developer</p>

              <p className="text-gray-400">Fresher</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
