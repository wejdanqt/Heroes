import React from "react";
import ReactDOM from "react-dom";
import { RouterOutlet } from "./routes/index.tsx";
import { MainLayout } from "./components/Layout/index.tsx";
import "./App.less";

const App = () => {
  return (
    <MainLayout>
      <RouterOutlet />
    </MainLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
