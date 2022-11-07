import NewPost from "./NewPost";
import Comments from "./Comments"
import axios from "axios";

const Post = ({ title, body, comments, id }) => {
  console.log(id)
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments url="id" data="body" />
  </div>
}

export default Post;
