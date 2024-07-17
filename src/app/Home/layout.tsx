import { ReactNode } from "react";
import { Navbar } from "./components/Navbar";

interface iProps {
  children: ReactNode;
}

export default function Layout({ children }: iProps) {
  return (
    <div className="flex gap-4">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}
