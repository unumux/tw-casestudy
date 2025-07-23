import React, { useState } from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [theme, setTheme] = useState("theme-dark");
  const [bgColor, setBgColor] = useState("unum:bg-unum-blue");
  const [buttonType, setButtonType] = useState("button-primary");

  return (
    <div
      className={`relative mt-4 p-6 rounded-lg shadow-md ${bgColor}`}
      data-theme={theme}
    >
      <div
        className="absolute top-0 right-0 p-2 unum:bg-colonial-warmneutral_4 colonial:bg-colonial-warmneutral_4 cursor-pointer"
        onClick={() => setShowDialog(true)}
      >
        Click for parameters
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-flat_white p-6 rounded shadow-lg relative w-1/2">
            <button
              className="absolute top-2 right-2 unum:text-unum-heading-3 colonial:text-colonial-heading-3"
              onClick={() => setShowDialog(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <CardParameters
              theme={theme}
              setTheme={setTheme}
              bgColor={bgColor}
              setBgColor={setBgColor}
              buttonType={buttonType}
              setButtonType={setButtonType}
            />
          </div>
        </div>
      )}
      <div className="text-theme">
        <h2 className="">{title}</h2>
        <p className="mt-2">{description}</p>
        <a className={`${buttonType}`} href="">
          Click me
        </a>
      </div>
    </div>
  );
};

const CardParameters: React.FC<{
  theme: string;
  setTheme: (t: string) => void;
  bgColor: string;
  setBgColor: (c: string) => void;
  buttonType: string;
  setButtonType: (t: string) => void;
}> = ({ theme, setTheme, bgColor, setBgColor, buttonType, setButtonType }) => {
  return (
    <div className="">
      <p>Choose your parameters:</p>
      <div className="flex justify-between gap-x-4 items-center">
        <label className="basis-1/2" htmlFor="theme-select">
          Theme:
        </label>
        <select
          id="theme-select"
          className="block mt-1 p-2 border rounded w-full"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="theme-light">Light</option>
          <option value="theme-dark">Dark</option>
        </select>
      </div>
      <div className="flex justify-between gap-x-4 items-center">
        <label className="basis-1/2" htmlFor="bg-color-select">
          Background Color:
        </label>
        <select
          id="bg-color-select"
          className="block mt-1 p-2 border rounded w-full"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        >
          <optgroup label="Colonial">
            <option value="colonial:bg-colonial-steelblue">steelblue</option>
            <option value="colonial:bg-colonial-steelblue_1">
              steelblue_1
            </option>
            <option value="colonial:bg-colonial-steelblue_2">
              steelblue_2
            </option>
            <option value="colonial:bg-colonial-steelblue_3">
              steelblue_3
            </option>
          </optgroup>
          <optgroup label="Unum">
            <option value="unum:bg-unum-blue">blue</option>
            <option value="unum:bg-unum-blue_1">blue_1</option>
            <option value="unum:bg-unum-blue_2">blue_2</option>
            <option value="unum:bg-unum-blue_3">blue_3</option>
            <option value="unum:bg-unum-blue_4">blue_4</option>
          </optgroup>
        </select>
      </div>
      <div className="flex justify-between gap-x-4 items-center">
        <label className="basis-1/2" htmlFor="button-select">
          Button Type:
        </label>
        <select
          id="button-select"
          className="block mt-1 p-2 border rounded w-full"
          value={buttonType}
          onChange={(e) => setButtonType(e.target.value)}
        >
          <option value="button-primary">Primary</option>
          <option value="button-secondary">Secondary</option>
        </select>
      </div>
    </div>
  );
};

export default Card;
