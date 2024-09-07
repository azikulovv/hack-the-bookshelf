import { Header } from "@/components/ui";
import type { FunctionComponent, ReactNode } from "react";

export const PrivateLayout: FunctionComponent<Readonly<{ children: ReactNode }>> = ({
  children,
}) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
};
