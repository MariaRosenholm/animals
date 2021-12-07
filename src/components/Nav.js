import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink className="links" to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
