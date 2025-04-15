import { Metadata } from "next";

export const metadata: Metadata ={
  title: "CodarSe - Página inicial"
} 

export default function PageHome() {

  return (
    <main className="bg-[var(--color-background)] h-screen flex items-center justify-center">
        <p className=""> home </p>
      </main>
  );
}
