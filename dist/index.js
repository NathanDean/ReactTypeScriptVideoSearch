import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
const root = createRoot(document.querySelector("#root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
//# sourceMappingURL=index.js.map