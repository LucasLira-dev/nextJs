import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "CodarSe - Todos os cursos"
} 


export default function PageCursos() {
  return (
    <main className="bg-[var(--color-background)]">
        <Section
        title="Todos os cursos"
        variant="grid"/>
    </main>
  );
}