import React from "react";
import { Link, useParams } from "react-router";
import { projectsData } from "../projectsData";
function ProjectDetail() {
  const { id } = useParams();

  const [data] = projectsData.filter((prod) => {
    return prod.id == id;
  });

  console.log(data);

  return (
    <div className="max-w-3xl mx-auto py-25 px-3 md:px-0">
      <button
        onClick={() => {
          history.back();
        }}
        className="border cursor-pointer group border-border border-dashed rounded-md px-5 py-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide transition-all ease-in cursor-pointer duration-150 group-hover:-translate-x-1 lucide-move-left-icon lucide-move-left"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
      </button>

      <div className="py-10  ">
        <img
          className="h-full rounded-xl  w-full border border-border"
          src={`/${data.banner}`}
          alt=""
        />

        <h1 className="text-2xl  mt-10 font-semibold">{data.title}</h1>
        <p className="mt-4 text-textSec font-main text-xl">
          {data.description}
        </p>
        <div className="flex flex-col mt-10">
          <p className="font-semibold text-textSec">Technologies</p>
          <div className="flex items-center mt-3 gap-5">
            {data.techStack.map((tech) => {
              return (
                <div>
                  <img className="h-6" src={`/${tech}`} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <div>
              <img className="h-7" src="/github.png" alt="" />
            </div>
            <Link
              target="_blank"
              to={data.github}
              className="hover:underline cursor-pointer"
            >
              Github
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="h-full"
              >
                <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
              </svg>
            </div>
            <Link
              to={data.liveLink}
              className="hover:underline cursor-pointer"
              target="_blank"
            >
              Live Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
