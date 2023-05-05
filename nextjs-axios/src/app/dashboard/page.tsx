import Link from "next/link";

const Home = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8">
      <h1 className="text-gray-200 text-3xl font-bold">DashBoard</h1>
      <Link href="/" className="text-blue-600 hover:underline">
        Home
      </Link>
    </header>
  );
};

export default Home;
