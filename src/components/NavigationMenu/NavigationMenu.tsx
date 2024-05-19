import { NavLink } from "react-router-dom";
import "./NavigationMenu.scss";

const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <NavLink className={"link"} to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className={"link"} to="/create">
            Create Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
