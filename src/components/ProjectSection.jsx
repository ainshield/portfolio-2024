import React from "react";

const projects = [
  {
    id: 1,
    title: "Biometric Login Student Portal",
    description:
      "Dynamic Student Portal with OTP, Fingerprint Login and Cross-Platform features.",
    technologies: ["React", "ExpressJS", "NodeJS", "Firebase", "MySQL", "PHP"],
    githubLink: null,
    liveDemoLink: null,
  },
  {
    id: 2,
    title: "Exam Checker Web Application",
    description:
      "Web-based Real-time Exam Checker utilizing Optical Mark Recognition.",
    technologies: ["Python", "OpenCV", "Flask", "MySQL", "Bootstrap"],
    githubLink: null,
    liveDemoLink: null,
  },
  {
    id: 3,
    title: "Spatio-Temporal Analysis of Unemployment Rate in the Philippines: A Machine Learning Approach",
    description:
      "Data Analysis of the Philippines Unemployment Rate from years 2000-2020.",
    technologies: ["Python", "FBProphet", "SARIMA", "QGIS", "Matplotlib", "Plotly"],
    pdfLink: "https://drive.google.com/file/d/172jG3dQW4_4Vm3IgAFjwk6vwHm3owGXO/view?usp=sharing",
    liveDemoLink: null,
  },
  {
    id: 4,
    title: "Inventory System (International Rice Research Institute, Philippines)",
    description:
      "Dynamic Inventory System with Login, and CRUD.",
    technologies: ["NextJS", "SpringBoot", "PostgreSQL"],
    githubLink: null,
    liveDemoLink: null,
  },
  {
    id: 5,
    title: "LabadaPOS",
    description:
      "Point of Sale System specifically designed for laundry shops, and includes revenue tracking, and administrative tools. ",
    technologies: ["C#", "Winforms", "SQLite"],
    githubLink: "https://github.com/ainshield/LabadaPOS",
    liveDemoLink: null,
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 py-16"
      style={{ margin: "2rem", borderRadius: "10px", maxHeight: "73vh", overflowY: "auto", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
              style={{ marginBottom: "1rem" }}
            >
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:text-blue-600 mr-4"
                  >
                    GitHub
                  </a>
                )}
                {project.pdfLink && (
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:text-blue-600 mr-4"
                  >
                    View PDF
                  </a>
                )}
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:text-blue-600"
                  >
                    Live Demo
                  </a>
                )}
                {!project.githubLink && !project.pdfLink && !project.liveDemoLink && (
                  <button
                    className="text-gray-500 font-semibold cursor-not-allowed"
                    disabled
                  >
                    Under NDA
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
