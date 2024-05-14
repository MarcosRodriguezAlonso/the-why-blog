import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NaviagationMenu";
import "./MainContainer.scss";

const MainContainer = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <NavigationMenu />
    </div>
  );
};

export default MainContainer;
