import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-pink-800">
      <Link to="/" className="logo text-2xl font-medium text-pink-500">
        Applima
      </Link>
    </div>
  );
};

export default Navbar;
