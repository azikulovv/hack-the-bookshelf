import { Route, Routes } from "react-router-dom";

import { Chat } from "@/pages/chat";
import { ChatLayout } from "@/layouts/chat";

export const ChatRouter = () => {
  return (
    <ChatLayout>
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </ChatLayout>
  );
};
