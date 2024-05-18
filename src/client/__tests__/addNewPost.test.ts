import { claraMockPostData as claraMockPostDataWithoutId } from "../../mocks/posts";
import postClient from "../PostsClient";

describe("Given the PostsClient's addNewPost method", () => {
  describe("When it is called with the clarasPost data without Id", () => {
    test("Then it should return  a claraPost with id", async () => {
      const newPost = await postClient.addNewPost({
        ...claraMockPostDataWithoutId,
      });

      expect(newPost).haveOwnPropertyDescriptor("id");
    });
  });
});
