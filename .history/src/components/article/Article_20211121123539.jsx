import React from "react";
import "./article.css";

const Article = () => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div></div>
      </div>
    </div>
  );
};

export default Article;
