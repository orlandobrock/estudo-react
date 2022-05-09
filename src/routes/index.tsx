import React from "react";

import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Repository } from "../pages/Repository";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repository/:repository" element={<Repository />} />
  </Routes>
);
