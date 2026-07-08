function Projects() {
  const projects = [
    {
      title: "PetCare - Pet Adoption Portal",
      type: "Major Project",
      tech: "MongoDB • Express.js • React • Node.js",
      description:
        "A full-stack pet adoption platform where users can browse pets, submit adoption requests, and manage their profiles through a responsive web application.",
    },
    {
      title: "Student IA Marks & Attendance Portal",
      type: "College Project",
      tech: "PHP • MySQL",
      description:
        "A web application for managing student attendance and internal assessment marks with separate login panels for administrators and students.",
    },
    {
      title: "Amazon Clone",
      type: "Mini Frontend Project",
      tech: "React • HTML • CSS • JavaScript",
      description:
        "A responsive Amazon-inspired frontend created to practice React components, layouts, reusable UI, and responsive design.",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-left"
      className="bg-slate-900 py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-500">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Here are some of the projects I have worked on.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition duration-300"
            >
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                {project.type}
              </span>

              <h3 className="text-2xl font-bold mt-4">{project.title}</h3>

              <p className="text-purple-400 mt-2">{project.tech}</p>

              <p className="text-gray-300 mt-4 leading-7">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
