import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import PostsList from "../PostsList/PostsList";
import { mockPosts } from "../../mocks/posts";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <NavigationMenu />
      <PostsList postsList={mockPosts} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
