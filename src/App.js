import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [post, setPost] = React.useState();
  const [userId, setUserId] = React.useState();

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPost(response.data);
    });
    console.log(post);
  }, [userId]);

  if (!post) return null;

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setUserId(e.target.value)}
          className="m-5 border-2 border-neutral-800 p-3"
        />
        <span>
          {!userId
            ? "Let's say we're actually fetching all the data"
            : `Now we're only fetching the data with userId is ${userId}`}
        </span>
      </div>
      <h1>
        {userId
          ? post
              .filter((filter) => filter.userId == userId)
              .map((item) => (
                <>
                  <h1>
                    {item.title} | {item.body}
                  </h1>
                  <br />
                </>
              ))
          : post.map((item) => (
              <>
                <h1>
                  {item.title} | {item.body}
                </h1>
                <br />
              </>
            ))}
      </h1>
    </div>
  );
}

export default App;
