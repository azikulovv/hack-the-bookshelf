import { Navigate, Route, Routes } from "react-router-dom";

import { Signin } from "@/pages/auth/signin";
import { Signup } from "@/pages/auth/signup";
import { useAuthStore } from "@/stores";

export const AuthRouter = () => {
  const authStore = useAuthStore();

  if (authStore.isAuth && authStore.token) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
