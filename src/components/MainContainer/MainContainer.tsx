import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NaviagationMenu";
import "./MainContainer.css";

const MainContainer = (): React.ReactElement => {
  return (
    <div className="main-container">
      <NavigationMenu />
      <Header />
    </div>
  );
};

export default MainContainer;
