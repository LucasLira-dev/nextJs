import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "CodarSe - Todos os cursos"
} 


export default function PageCursos() {
  return (
    <main className="bg-[var(--color-background)] mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px]">
        <Section
        title="Todos os cursos"
        variant="grid"
        items={[
          {
            href: "/cursos/11222",
            title: "Curso de API REST, Node e Typescript",
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            description: ''
          },
          {
            href: "/cursos/11222",
            title: "Curso de API REST, Node e Typescript",
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            description: ''
          },
          {
            href: "/cursos/11222",
            title: "Curso de API REST, Node e Typescript",
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            description: ''
          },
          {
            href: "/cursos/11222",
            title: "Curso de API REST, Node e Typescript",
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            description: ''
          },
        ]}/>
      </div>
    </main>
  );
}