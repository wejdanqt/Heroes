import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Heros } from "../pages/Heros/index.tsx";

export const RouterOutlet: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/heros"} element={<Heros />} />
        <Route path="*" element={<Navigate to="/heros" />} />
      </Routes>
    </BrowserRouter>
  );
};
