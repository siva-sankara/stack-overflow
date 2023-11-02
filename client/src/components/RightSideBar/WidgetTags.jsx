import React from "react";

const WidgetTags = ({theme}) => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className={theme ? "widget-tags theme-widget-tags" :"widget-tags"}>
      <h3>Watched tags</h3>
      <div className={theme ?"widget-tags-div theme-widget-tags-div":"widget-tags-div"}>
        {tags.map((eachtag) => {
          return <p key={eachtag}>{eachtag}</p>;
        })}
      </div>
    </div>
  );
};

export default WidgetTags;
