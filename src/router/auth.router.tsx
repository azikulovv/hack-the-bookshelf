import { Route, Routes } from "react-router-dom";

import { Signin } from "@/pages/auth/signin";
import { Signup } from "@/pages/auth/signup";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
