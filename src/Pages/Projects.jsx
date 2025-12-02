import React from "react";
import { projectsData } from "../projectsData";
import ProjectCard from "../component/ProjectCard";

function Projects() {
  return (
    <div className="max-w-3xl px-3 md:px-0 h-full mx-auto bg-primary text-text font-main py-25">
      <h1 className="text-xl mt-10">Projects</h1>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 mt-5 gap-5">
        {projectsData.map((data) => {
          return <ProjectCard data={data} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
