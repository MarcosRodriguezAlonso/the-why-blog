import "./NavigationMenu.scss";

const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <a className="link" href="list">
        List
      </a>
      <a className="link" href="add">
        Add
      </a>
    </nav>
  );
};

export default NavigationMenu;
