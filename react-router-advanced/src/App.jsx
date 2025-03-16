// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Use the id parameter to fetch the blog post data
  return (
    <div>
      <h1>Blog Post {id}</h1>
    </div>
  );
};

export default BlogPost;
