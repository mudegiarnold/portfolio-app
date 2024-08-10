
import './Projects.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
	    const [projects, setProjects] = useState([]);

	        useEffect(() => {
			        const fetchProjects = async () => {
					            try {
							                    const response = await axios.get('http://localhost:5000/api/projects');
									                    setProjects(response.data);
											                } catch (error) {
														                console.error('Error fetching the projects', error);
																            }
																	            };

																		            fetchProjects();
																			        }, []);

																				    return (
																				            <section id="projects">
																					                <h2>My Projects</h2>
																							            <div>
																								                    {projects.map((project, index) => (
																											                        <div key={index}>
																														                        <h3>{project.title}</h3>
																																	                        <p>{project.description}</p>
																																				                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
																																							                    </div>
																																									                    ))}
																																											                </div>
																																													        </section>
																																														    );
																																													    }

																																													    export default Projects;
