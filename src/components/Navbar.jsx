import { NavLink } from "react-router-dom";
export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <div>
      <NavLink className={setActiveClass} to="/home">
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to="/pokemones">
        Pokemones
      </NavLink>
    </div>
  );
}