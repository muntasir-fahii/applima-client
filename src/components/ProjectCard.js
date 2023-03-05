import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import moment from "moment";
import { useState } from "react";
import Projectfrom from "./Projectfrom";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/projects/${project._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };

  const handleUpadte = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handlOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className="project bg-neutral-800 p-5 rounded-xl shadow-xl border border-neutral-700 flex flex-col gap-5 w-[30rem] ">
      <div className="top">
        <span className="text-pink-600">ID: {project._id}</span>
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
      <div onClick={handleUpadte} className="bottom flex gap-5">
        <button className="bg-pink-600 text-pink-100 py-2 px-5 rounded-xl hover:bg-pink-50 hover:text-pink-900 duration-300">
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-pink-700 hover:underline duration-300"
        >
          Delete
        </button>
      </div>
      {/* OVERLAY */}

      <div
        onClick={handlOverlay}
        className={`overlay fixed z-[1] h-screen w-screen bg-slate-900/50 backdrop-blur-sm top-0 left-0 righ bottom-0 ${
          isOverlayOpen ? "" : "hidden"
        }`}
      ></div>

      {/* MODAL */}

      <div
        className={`update-modal w-[35rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-10 rounded-xl shadow-xl border border-slate-700 z-[2] ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <h2
          className="text-4xl font-medium text-pink-500 mb-10
        "
        >
          Update Project
        </h2>

        <Projectfrom
          project={project}
          setIsModalOpen={setIsModalOpen}
          setIsOverlayOpen={setIsOverlayOpen}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
