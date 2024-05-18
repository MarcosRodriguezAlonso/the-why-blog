import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../components/App/App";
import AddPostPage from "../pages/AddPostPage/AddPost";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostsListPage from "../pages/PostsListPage/PostListPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to="/posts" />} index />
      <Route path="/posts" element={<PostsListPage />} />
      <Route path="/create" element={<AddPostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default mainRouter;
