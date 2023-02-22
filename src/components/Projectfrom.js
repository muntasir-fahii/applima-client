import { useState } from "react";

const Projectfrom = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setDev] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // data
    const projectData = { title, tech, budget, duration, manager, dev };

    //post req
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    const json = await res.json();

    //!res.ok, set error
    if (!res.ok) {
      setError(json.error);
    }

    //res.ok, reset
    if (res.ok) {
      setTitle("");
      setTech("");
      setBudget("");
      setDuration("");
      setManager("");
      setDev("");
      setError(null);

      console.log("New project has been added to the database", json);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form flex flex-col gap-5">
      <h2
        className="text-4xl font-medium text-pink-500 mb-10
        "
      >
        Add a New Project
      </h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Project title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Technoligies
        </label>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          type="text"
          placeholder="e.g. node.js, react, redux"
          id="tech"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-400 duration-300"
        />
      </div>

      <div className="form-control  flex flex-col gap-2">
        <label
          htmlFor="budget"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Budget (in USD)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type="number"
          placeholder="e.g. 500"
          id="budget"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Duration (in weeks)
        </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          placeholder="e.g. 4"
          id="duration"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Manager
        </label>
        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          type="text"
          placeholder="e.g. muntasir"
          id="manager"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="developers"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Developers
        </label>
        <input
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          type="number"
          placeholder="e.g. 5"
          id="developers"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-400 duration-300"
        />
      </div>
      <button
        type="submit"
        className="bg-pink-600 text-pink-100 py-3 px-5 rounded-lg hover:bg-pink-50 hover:text-pink-900 duration-300"
      >
        Add Project
      </button>
      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Projectfrom;