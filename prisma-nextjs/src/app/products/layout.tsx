import "./../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teste prisma com Next",
  description: "Testando o prisma com o nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-12">
          <h1 className="text-3xl font-bold">Products</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
