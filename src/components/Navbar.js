import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-pink-800">
      <Link to="/" className="logo text-2xl font-medium text-pink-500">
        Applima
      </Link>

      <nav className="flex gap-5">
        {!user && (
          <div className="flex gap-5">
            <Link to={"/login"} className="hover:text-pink-500 duration-300">
              Login
            </Link>
            <Link to={"/signup"} className="hover:text-pink-500 duration-300">
              Signup
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-5 items-center">
            <span className="hover:text-pink-500 duration-300">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              type="submit"
              className="bg-rose-500 text-white py-2 px-5 rounded-xl hover:bg-rose-700 hover:text-white duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
