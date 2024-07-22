import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelpEase",
  description:
    "HelpEase is a platform to help you find the right help you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>
        <QueryProvider>
          <div className="dark min-h-screen bg-background flex text-foreground p-6">
            <Toaster richColors />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
