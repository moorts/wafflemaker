import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function BlogPost() {
  const [postData, setPostData] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    setPostData({
      title: "Hello there!",
      content: "General Kenobi!",
    });
  }, [postId]);

  if (!postData) return <div>Loading...</div>;

  return <div>{postData.title}</div>;
}
