import React from "react";

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <pre className="block mt-2 p-2 unum:bg-unum-warmneutral_1 unum:text-unum-warmneutral colonial:bg-colonial-warmneutral_3 colonial:text-colonial-dark_grey_light_2 px-2 py-1 rounded font-mono text-sm">
      <code>{children}</code>
    </pre>
  );
};

export default Code;
