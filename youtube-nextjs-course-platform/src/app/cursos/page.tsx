import { Metadata } from "next";

export const metadata: Metadata ={
  title: "CodarSe - Todos os cursos"
} 


export default function PageCursos() {
  return (
    <main className="bg-[var(--color-background)] h-screen flex items-center justify-center">
      <p className=""> cursos </p>
      <p className="text-2xl text-white"> cursos </p>
    </main>
  );
}