import { ReactNode } from "react";

interface iProps {
  children: ReactNode;
}

export default function Layout({ children }: iProps) {
  return (
    <div>
      <div>nav</div>

      <main>{children}</main>
    </div>
  );
}
