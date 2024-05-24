import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
import { NewPostData } from "../../posts/types";

interface CreatePostFormProps {
  submitData: (newPostData: NewPostData) => void;
}

const CreatePostPage = ({
  submitData,
}: CreatePostFormProps): React.ReactElement => {
  return <CreatePostForm submitPostData={submitData} />;
};

export default CreatePostPage;
