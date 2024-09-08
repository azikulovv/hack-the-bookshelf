import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@/layouts/private";
import { Games } from "@/pages/games";
import { Welcome } from "@/pages/welcome";
import { ChatRouter } from "./modules/chat.router";
import { SearchRouter } from "./modules/search.router";
import { BookExchangesRouter } from "./modules/book-exchanges.router";
import { useAuthStore } from "@/stores";

export const PrivateRouter = () => {
  const authStore = useAuthStore();

  if (!authStore.isAuth || !authStore.token) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/games" element={<Games />} />
        <Route path="/chat/*" element={<ChatRouter />} />
        <Route path="/search/*" element={<SearchRouter />} />
        <Route path="/book-exchanges/*" element={<BookExchangesRouter />} />
      </Routes>
    </PrivateLayout>
  );
};
