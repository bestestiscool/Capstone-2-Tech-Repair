import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import { getAnimationClass } from "../utils/animationUtils";

// Choose API URL based on the environment variable
const isSupabase = process.env.REACT_APP_USE_SUPABASE === 'true';
const API_URL = isSupabase
  ? process.env.REACT_APP_SUPABASE_API_URL
  : process.env.REACT_APP_LOCAL_API_URL;

console.log("USE_SUPABASE:", process.env.REACT_APP_USE_SUPABASE);
console.log("API_URL:", API_URL);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from backend API connected to PostgreSQL
    axios
      .get(`${API_URL}/api/projects`) // Use live API URL
      .then((response) => {
        console.log("Projects data:", response.data); // Log the response to see its structure

        // Ensure the response is an array, if not set an empty array
        setProjects(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error.response || error.message);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        {/* Animation added to the title and description */}
        <h2 className={getAnimationClass("bounce")}>My Projects</h2>
        <p className={getAnimationClass("fadeInUp")}>
          A collection of my work, including code links and live demos.
        </p>
      </div>

      <div className="row">
        {projects.length === 0 ? (
          <p className="text-center">No projects found.</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4"> {/* Use project.id as key */}
              <div
                className={`card h-100 project-card ${getAnimationClass(
                  "swing"
                )}`}
              >
                <div className="card-body">
                  <h3 className="card-title">{project.name}</h3>
                  <p className="card-text">{project.description}</p>

                  <a
                    href={project.code_link}
                    className="btn btn-outline-dark mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> View Code
                  </a>

                  {/* Demo link */}
                  {/* {project.live_demo_link && (
                    <a href={project.live_demo_link} className="btn btn-outline-secondary mt-3 ml-2" target="_blank" rel="noopener noreferrer">
                      View Live Demo
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
