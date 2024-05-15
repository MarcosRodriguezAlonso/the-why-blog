import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <NavigationMenu />
    </div>
  );
};

export default App;
