import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f2a1d]/95 text-white px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">
        Loss of Animal Habitat
      </h1>

      <ul className="flex gap-6 text-sm">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "bg-green-200 text-black px-3 py-1 rounded-md"
                : "px-3 py-1 rounded-md hover:bg-green-400/20"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/extinct"
            className={({ isActive }) =>
              isActive
                ? "bg-green-200 text-black px-3 py-1 rounded-md"
                : "px-3 py-1 rounded-md hover:bg-green-400/20"
            }
          >
            Extinct Animals
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/endangered"
            className={({ isActive }) =>
              isActive
                ? "bg-green-200 text-black px-3 py-1 rounded-md"
                : "px-3 py-1 rounded-md hover:bg-green-400/20"
            }
          >
            Endangered Animals
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/threats"
            className={({ isActive }) =>
              isActive
                ? "bg-green-200 text-black px-3 py-1 rounded-md"
                : "px-3 py-1 rounded-md hover:bg-green-400/20"
            }
          >
            Threats
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/conservation"
            className={({ isActive }) =>
              isActive
                ? "bg-green-200 text-black px-3 py-1 rounded-md"
                : "px-3 py-1 rounded-md hover:bg-green-400/20"
            }
          >
            Conservation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;