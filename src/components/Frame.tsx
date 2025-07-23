import React from "react";
import styles from "./Frame.module.css";

type FrameProps = {
  type?: "col" | "two-col";
  children: React.ReactNode;
};

const Frame: React.FC<FrameProps> = ({ type, children }) => {
  const param = "gap-4";
  return (
    <div className={`type ${styles.frame}`}>
      <div className={`row max-w-[1200px] mx-auto mt-4 flex ${param}`}>
        {type === "two-col"
          ? React.Children.map(children, (child, index) => (
              <div
                className={`basis-1/2 col-${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
};

export default Frame;
