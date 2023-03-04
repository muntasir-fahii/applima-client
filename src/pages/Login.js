import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    //login user
    await login(email, password);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2
        className="text-4xl font-medium text-pink-500 mb-10
        "
      >
        Login
      </h2>

      <div className="form-control flex flex-col gap-2 ">
        <label
          htmlFor="email"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="hello@react.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-500 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2 ">
        <label
          htmlFor="password"
          className="cursor-pointer hover:text-pink-500 duration-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-pink-500 duration-300"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-pink-600 text-pink-100 py-3 rounded-lg hover:bg-pink-700 duration-300 mt-3"
      >
        Login
      </button>
      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Login;
