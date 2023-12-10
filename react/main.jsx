import React from "react";
import ReactDOM from "react-dom/client";

import BoxTerpopuler from "./components/BoxTerpopuler.jsx";
import NonHeadline from "./components/NonHeadline.jsx";

const componentsToRender = [
  {
    condition: document.querySelector('[data-target="block/cbpopuler"]'),
    component: <BoxTerpopuler />,
  },
  {
    condition: document.querySelector('[data-target="nonheadline"]'),
    component: <NonHeadline />,
  },
];

componentsToRender.forEach(({ condition, component }) => {
  if (condition) {
    ReactDOM.createRoot(condition).render(<React.StrictMode>{component}</React.StrictMode>);
  }
});
