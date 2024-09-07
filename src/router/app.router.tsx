import { Route, Routes } from "react-router-dom";
import type { FunctionComponent } from "react";

import { AuthRouter } from "./modules/auth.router";
import { PrivateRouter } from "./private.router";

export const AppRouter: FunctionComponent = () => {
  return (
    <Routes>
      <Route element={<PrivateRouter />} path="/*" />
      <Route element={<AuthRouter />} path="/auth/*" />
    </Routes>
  );
};
