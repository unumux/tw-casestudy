import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      unum: ["Open Sans", "Arial", "sans-serif"],
      colonial: ["Barlow", "Georgia", "serif"],
    },
    fontSize: {
      "unum-body-copy": "1.6rem",
      "unum-heading-5": "1.4rem",
      "unum-heading-4": "1.8rem",
      "unum-heading-3-m": "2rem",
      "unum-heading-3": "2.2rem",
      "unum-heading-2-m": "2.8rem",
      "unum-heading-2": "3.6rem",
      "unum-heading-1-m": "4rem",
      "unum-heading-1": "4.9rem",
      "colonial-body-copy": "1.8rem",
      "colonial-body-large": "2.2rem",
      "colonial-heading-3": "2.7rem",
      "colonial-heading-2": "3.4rem",
      "colonial-heading-1": "4rem",
      "colonial-heading-xl": "6rem",
      "colonial-heading-xxl": "8.8rem",
      "colonial-label-caption": "1.3rem",
    },
    colors: {
      flat_white: "#fff",
      flat_black: "#000",
      unum: {
        blue: "#015294",
        blue_1: "#b9d4e9",
        blue_2: "#78a5d1",
        blue_3: "#3273af",
        blue_4: "#004470",
        slate: "#5e88a1",
        slate_1: "#bed2e0",
        slate_2: "#84a9bf",
        slate_3: "#335e7a",
        slate_4: "#26495f",
        sky: "#00a6d7",
        sky_1: "#e3f4fc",
        sky_2: "#a1d3ea",
        sky_3: "#0090c7",
        sky_4: "#037cb7",
        sky_l2: "#60bde3",
        pool: "#47b4bc",
        pool_1: "#e4f4f4",
        pool_2: "#bbe0e1",
        pool_3: "#0199a6",
        pool_4: "#017f90",
        pool_l2: "#7cc6ca",
        lawn: "#8cc342",
        lawn_1: "#edf5e0",
        lawn_2: "#b6d991",
        lawn_3: "#318040",
        lawn_4: "#0a6a36",
        lawn_d1: "#5fa143",
        kiwi: "#c0cf30",
        kiwi_1: "#f6f8e0",
        kiwi_2: "#d3db6a",
        kiwi_3: "#a4b638",
        kiwi_4: "#899d3b",
        orange: "#e99625",
        orange_1: "#fcefdf",
        orange_2: "#f8d08a",
        orange_3: "#d67921",
        orange_4: "#b75d24",
        gold: "#fac832",
        warmneutral: "#2e2e2e",
        warmneutral_1: "#cccccc",
        warmneutral_2: "#525252",
        warmneutral_l1: "#f7f7f7",
        coolneutral: "#dfe7ec",
        coolneutral_1: "#f6f8fa",
        coolneutral_2: "#eaeef1",
        coolneutral_3: "#afb6c1",
        coolneutral_4: "#8993a4",
        coolneutral_l1: "#ffffff",
        berryred: "#cc2944",
        berryred_l1: "#faeded",
        berryred_d1: "#9e1839",
      },
      colonial: {
        steelblue: "#19557f",
        steelblue_1: "#d3ecf7",
        steelblue_2: "#7fc5e4",
        steelblue_3: "#092c48",
        slate: "#5b7183",
        slate_1: "#c3cfda",
        slate_2: "#778ea0",
        slate_3: "#344a5b",
        slate_light_2: "#c3cfda",
        teal: "#18c2cc",
        teal_1: "#dcf4f5",
        teal_2: "#a4e3e5",
        teal_3: "#63d1d8",
        teal_4: "#007c85",
        teal_5: "#00a9b4",
        leaf: "#a5cb4e",
        leaf_1: "#f0f7dc",
        leaf_2: "#e1f3b5",
        leaf_3: "#cced7b",
        leaf_4: "#74922c",
        mint: "#198271",
        mint_1: "#d2ece8",
        mint_2: "#63beb1",
        mint_3: "#21ab91",
        mint_4: "#126a5c",
        coral: "#f05660",
        coral_1: "#fddede",
        coral_2: "#fb8f8f",
        coral_3: "#f26c6c",
        coral_4: "#b72b33",
        purple: "#735f91",
        purple_1: "#f1ebf3",
        purple_2: "#d7c5dc",
        purple_3: "#8d6b98",
        purple_4: "#3f2248",
        orange: "#f7952e",
        orange_1: "#fdeee1",
        orange_2: "#fbd4b1",
        orange_3: "#f7af6d",
        orange_4: "#d46201",
        gold: "#ffd63e",
        gold_1: "#fff9d8",
        gold_2: "#ffe775",
        gold_3: "#e7bb30",
        coolneutral: "#bed3e0",
        coolneutral_1: "#e7eff3",
        coolneutral_2: "#4e7997",
        light_blue_2: "#d6e4ed",
        warmneutral: "#010101",
        warmneutral_1: "#fbfbfb",
        warmneutral_2: "#e2e2e2",
        warmneutral_3: "#c3c3c3",
        warmneutral_4: "#989898",
        warmneutral_5: "#292929",
        berryred: "#cc2944",
        berryred_l1: "#faeded",
        berryred_d1: "#9e1839",
        // OLD COLORS
        steel_blue_dark_2: "#104566",
        steel_blue_light_2: "#c3d5e1",
        mint_dark_2: "#136259",
        slate_light_3: "#dbe3ea",
        dark_grey: "#2e2e2e",
        dark_grey_light_2: "#525252",
        dark_grey_light_4: "#757575",
        ocean: "#3baecc",
        ocean_dark_1: "#1a809c",
        light_grey_light_1: "#cdcdcd",
        light_grey_light_3: "#e9e9e9",
        light_grey_light_4: "#f7f7f7",
        light_grey_dark_2: "#aaaaaa",
        dark_1: "#9b9b9b",
      },
    },
    /* Extend adds to the defaults, we want to keep TWs spacing probably */
    extend: {
      spacing: {
        xs: "0.4rem", // $base/2
        s: "0.8rem", // $base
        m: "1.6rem", // $base * 2
        l: "2.4rem", // $base * 3
        xl: "3.2rem", // $base * 4
        xxl: "4rem", // $base * 5
        xxxl: "4.8rem", // $base * 6
        "4x": "5.6rem", // $base * 7
        "5x": "6.4rem", // $base * 8
        "6x": "7.2rem", // $base * 9
        "7x": "8rem", // $base * 10
        "8x": "8.8rem", // $base * 11
        "9x": "9.6rem", // $base * 12
        "10x": "10.4rem", // $base * 13
        "11x": "11.2rem", // $base * 14
      },
    },
  },
  plugins: [
    /* This addVariant section supports theming and colonial specific implementations */
    function ({
      addVariant,
    }: {
      addVariant: (name: string, values: string[]) => void;
    }) {
      addVariant("theme-dark", ['[data-theme="theme-dark"] &']);
      addVariant("theme-light", ['[data-theme="theme-light"] &']);
      addVariant("unum", [".unum &"]);
      addVariant("colonial", [".colonial &"]);
    },
  ],
};

export default config;
