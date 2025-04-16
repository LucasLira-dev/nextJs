import Card from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "CodarSe - Página inicial"
} 

export default function PageHome() {

  return (
    <main className="bg-[var(--color-background)]">
        <Card/>
      </main>
  );
}
