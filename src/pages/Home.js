import { useEffect, useState } from "react";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setProjects(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getProjects();
  }, []);
  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2
          className="text-4xl font-medium text-pink-500 mb-10
        "
        >
          All Projects
        </h2>
        <div className="projects-wrapper">
          {projects &&
            projects.map((project) => {
              <p key={project._id}>{project.title}</p>;
            })}
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
