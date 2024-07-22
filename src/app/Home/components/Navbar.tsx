"use client";

import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { MENU_ITEMS } from "@/constants/MENU_ITEMs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Navbar() {
  const router = useRouter();

  function logout(path: string) {
    toast.info("Goodbye!", {
      duration: 5000,
      closeButton: true,
    });
    router.push(path);
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="font-black antialiased text-2xl">
            HelpEase
          </SheetTitle>
          <SheetDescription>The easiest way to get help</SheetDescription>
        </SheetHeader>

        <Separator className="my-2" />

        <div className="flex flex-col space-y-2">
          {MENU_ITEMS.map((item) => (
            <Button key={item.id} variant="ghost">
              {item.name}
            </Button>
          ))}
        </div>

        <Button variant="ghost" onClick={() => logout("/Login")}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </SheetContent>
    </Sheet>
  );
}
