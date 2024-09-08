import { Route, Routes } from "react-router-dom";

import { Search } from "@/pages/search";

export const SearchRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};
