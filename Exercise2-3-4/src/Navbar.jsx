import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Bitcoin Exchange</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/bigcats">Big Cats</NavLink>
        </li>
      </ul>{" "}
    </nav>
  );
}
