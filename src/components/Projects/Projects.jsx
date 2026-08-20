import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Weather App",
      description:
        "Real-time weather dashboard using OpenWeather API",
      category: "web",
      tech: ["React", "API"],
      image: "/weather.jpg",
    },
    {
      id: 2,
      name: "Health App",
      description:
        "Vital sign sensing and symptom tracking with real-time updates",
      category: "web",
      tech: ["React", "API"],
      image: "/health.PNG",
    },
    {
      id: 3,
      name: "Reminder App",
      description:
        "Notifies with floating elements and for business reminders",
      category: "web",
      tech: ["React", "API"],
      image: "/reminder.PNG",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section id="projects" className="project-section">
      <h2>My Projects</h2>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">
              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>

                <a href="#" className="btn">
                  Github
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;