const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <a className="list-link" href="list">
        List
      </a>
      <a className="add-link" href="Add">
        Add
      </a>
    </nav>
  );
};

export default NavigationMenu;
