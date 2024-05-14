import "./NavigationMenu.css";

const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <a className="link list-link" href="list">
        List
      </a>
      <a className="link add-link" href="Add">
        Add
      </a>
    </nav>
  );
};

export default NavigationMenu;
