import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-4 bg-sky-600 mb-6">
      <Link to="/">
        <h1 className="text-white font-bold md:text-2xl text-lg">Movies App</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
