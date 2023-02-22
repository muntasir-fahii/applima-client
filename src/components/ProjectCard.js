import { useProjectsContext } from "../hooks/useProjectsContext";
import moment from "moment";

const ProjectCard = ({ project }) => {
  const { dispatch } = useProjectsContext();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/api/projects/${project._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };
  return (
    <div className="project bg-neutral-800 p-5 rounded-xl shadow-xl border border-neutral-700 flex flex-col gap-5 w-[30rem] ">
      <div className="top">
        <span className="text-pink-600">{project._id}</span>
        <h3 className="text-3xl font-medium ">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-slate-500 font-medium">
          {project.tech}
        </span>
      </div>

      <div className="mid text-slate-300 flex gap-10">
        <div className="left flex flex-col">
          <span>Budget: {project.budget}</span>
          <span>
            Added on: {moment(project.createdAt).format("DD MMM YYYY, hh:mm A")}
          </span>
          <span>
            Updated: {moment(project.updatedAt).format("DD MMM YYYY, hh:mm A")}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration}week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button className="bg-pink-600 text-pink-100 py-2 px-5 rounded-xl hover:bg-pink-50 hover:text-pink-900 duration-300">
          Update
        </button>
        <button
          className="text-pink-700 hover:underline duration-300"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
