import React from "react";
import ReactDOM from "react-dom";
import { deepMerge } from "grommet/utils";
import hpe from "grommet-theme-hpe";
import { Grommet } from "grommet";
import App from "./App";
import SideBar from "./components/sidebar";
import GridTest from "./components/gridtry";
import { theme } from "./theme";

const theme_hpe = deepMerge(theme, {
  global: {
    colors: {
      "brand-1": "#00795d"
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }
      `
    }
  },
  select: {
    clear: {
      text: {
        weight: "bold",
        color: "dark-1"
      }
    }
  },
  tip: {
    content: {
      animation: "slideRight",
      margin: "small",
      pad: "xxsmall",
      background: { color: "aliceblue", opacity: 0.9 },
      flex: false // so Tip won't get cut on a window resize
    }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(<GridTest />, rootElement);
