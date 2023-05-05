import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between py-4 px-8">
        <h1 className="text-gray-200 text-3xl font-bold">Home</h1>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            DashBoard
          </Link>
          {/* @ts-expect-error Asynnc Server Component */}
          <User />
        </div>
      </header>
      <main className="w-full h-full">
        {/* @ts-expect-error Asynnc Server Component */}
        <Repo />
      </main>
    </>
  );
}
