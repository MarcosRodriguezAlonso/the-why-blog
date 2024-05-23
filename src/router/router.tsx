import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostsListPage from "../pages/PostsListPage/PostListPage";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";

const submitData = () => {
  throw new Error("Funcion no implementada");
};
const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to="/posts" />} index />
      <Route path="/posts" element={<PostsListPage />} />
      <Route
        path="/create"
        element={<CreatePostPage submitData={submitData} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default mainRouter;
