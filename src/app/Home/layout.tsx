import { ReactNode } from "react";
import { Navbar } from "./components/Navbar";

interface iProps {
  children: ReactNode;
}

export default function Layout({ children }: iProps) {
  return (
    <div className="w-full h-full flex gap-9">
      <Navbar />

      <main className="w-full">{children}</main>
    </div>
  );
}
