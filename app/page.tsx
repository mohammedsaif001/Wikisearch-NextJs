import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex justify-center items-center h-80">
        <h2 className="text-2xl font-extrabold text-slate-700 mx-4">
          Start Typing on Search Box to get Get Results from Wikipedia
        </h2>
      </div>
    </main>
  );
}
