import { mockPosts } from "../../mocks/posts";
import postClient from "../PostsClient";

describe("Given the PostClient's getPost method", () => {
  describe("When the API responds with the posts list containg clara's post and marcos' post", () => {
    test("Then it should return a list with clara's post and marcos' post", async () => {
      const expectedPosts = [...mockPosts];

      const posts = await postClient.getPosts();

      expect(posts).toStrictEqual(expectedPosts);
    });
  });
});
