import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-foreground">Home</h1>
      <Link href="/Login" className="text-foreground">
        Login
      </Link>
    </div>
  );
}
