import { Route, Routes } from "react-router-dom";
import type { FunctionComponent } from "react";

import { AuthRouter } from "./auth.router";
import { DashboardRouter } from "./dashboard.router";

export const AppRouter: FunctionComponent = () => {
  return (
    <Routes>
      <Route element={<DashboardRouter />} path="/*" />
      <Route element={<AuthRouter />} path="/auth/*" />
    </Routes>
  );
};
