import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "@/pages";
import { useAuthStore } from "@/stores";

export const DashboardRouter = () => {
  const authStore = useAuthStore();

  if (!authStore.isAuth || !authStore.token) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
