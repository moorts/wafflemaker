import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AllPosts() {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    setPostsData([
      {
        id: 1,
        title: "Hello there!",
        content: "General Kenobi!",
      },
      { id: 2, title: "Hellau", content: "There" },
    ]);
  }, []);

  return (
    <div>
      {postsData &&
        postsData.map((post, index) => (
          <Link to={"/" + post.id} key={post.id}>
            {post.title}
          </Link>
        ))}
    </div>
  );
}
