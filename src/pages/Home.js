import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Projectfrom from "../components/Projectfrom";
import { useProjectsContext } from "../hooks/useProjectsContext";
const Home = () => {
  const { projects, dispatch } = useProjectsContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    getAllProjects();
  }, [dispatch]);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2
          className="text-4xl font-medium text-pink-500 mb-10
        "
        >
          All Projects
        </h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      </div>
      <Projectfrom />
    </div>
  );
};

export default Home;
