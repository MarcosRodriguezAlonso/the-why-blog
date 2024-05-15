import "./NavigationMenu.scss";

const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <a className="link" href="list">
            List
          </a>
        </li>
        <li>
          <a className="link" href="add">
            Add
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
