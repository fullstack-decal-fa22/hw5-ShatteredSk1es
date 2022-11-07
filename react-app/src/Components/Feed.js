import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';

const Feed = () => {

  // eslint-disable-next-line no-undef
  const [data, array1] = useState();

  const getPostsData = () => {
    axios
    .get('http://localhost:3002/posts') //THIS IS YOUR URL OF YOUR API
    .then((data) => array1(data.data) )  //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
   .catch((error) => console.log(error) );  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
  };

  // eslint-disable-next-line no-undef
  useEffect(() => {
    getPostsData();
   }, [])

   const retFunc = () => {
    axios
    .post("http://localhost:3000/", data) // `url` is the url to post to, `data` is the data to send in the body of the HTTP request
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
   }

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data && data.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost retFunc />
    </div>
  )

}


export default Feed;
