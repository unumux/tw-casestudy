import React, { useId } from "react";

const Highlight: React.FC<{
  children: React.ReactNode;
  darkGroup: string;
  lightGroup: string;
}> = ({ children, darkGroup, lightGroup }) => {
  const [theme, setTheme] = React.useState("theme-dark");
  const groupId = useId();
  return (
    <>
      <div
        data-theme={theme}
        className={`highlight relative mt-4 px-6 py-8 w-full ${
          theme === "theme-dark" ? darkGroup : lightGroup
        }`}
      >
        <div className="selector bg-white absolute top-0 right-0 p-2 theme-dark:text-flat_white theme-light:text-flat_black">
          <label className="mr-4">
            <input
              className="mr-2"
              type="radio"
              name={`theme-${groupId}`}
              value="theme-dark"
              onChange={() => setTheme("theme-dark")}
              checked={theme === "theme-dark"}
            />
            Dark
          </label>
          <label>
            <input
              className="mr-2"
              type="radio"
              name={`theme-${groupId}`}
              value="theme-light"
              onChange={() => setTheme("theme-light")}
              checked={theme === "theme-light"}
            />
            Light
          </label>
        </div>
        {children}
      </div>
    </>
  );
};

export default Highlight;
