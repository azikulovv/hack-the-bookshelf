import { Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@/layouts/private";
import { Games } from "@/pages/games";
import { Welcome } from "@/pages/welcome";
import { BookExchangesRouter } from "./modules/book-exchanges.router";

export const PrivateRouter = () => {
  // const authStore = useAuthStore();

  // if (!authStore.isAuth || !authStore.token) {
  //   return <Navigate to="/auth/signin" />;
  // }

  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/games" element={<Games />} />
        <Route path="/book-exchanges/*" element={<BookExchangesRouter />} />
      </Routes>
    </PrivateLayout>
  );
};
