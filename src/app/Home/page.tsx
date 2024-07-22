import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <h1 className="text-foreground title">Home</h1>
      <p>Subtitle here</p>
      <Separator className="mt-2 mb-4" />
      <div>
        <p>Dashboard here?</p>
      </div>
    </div>
  );
}
