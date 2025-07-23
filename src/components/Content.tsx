import React from "react";

type ContentProps = {
  heading: string;
  content: string;
  children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ heading, content, children }) => {
  return (
    <div className="content text-theme">
      <h2>{heading}</h2>
      <p>{content}</p>
      {children}
    </div>
  );
};

export default Content;
