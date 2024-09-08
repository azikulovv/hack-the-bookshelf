import { Route, Routes } from "react-router-dom";

import { Deal } from "@/pages/book-exchanges/deal";
import { Edit } from "@/pages/book-exchanges/[detail]/edit";
import { Create } from "@/pages/book-exchanges/deal/create";
import { AboutTheBook } from "@/pages/book-exchanges/[detail]";
import { BookExchanges } from "@/pages/book-exchanges";

export const BookExchangesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BookExchanges />} />
      <Route path="/:id" element={<AboutTheBook />} />
      <Route path="/:id/edit" element={<Edit />} />
      <Route path="/deal" element={<Deal />} />
      <Route path="/deal/create" element={<Create />} />
    </Routes>
  );
};
