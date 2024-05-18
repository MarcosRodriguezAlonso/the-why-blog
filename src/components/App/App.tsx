import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
