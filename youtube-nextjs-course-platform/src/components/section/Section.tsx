import Card from "../card/Card";


interface ISectionProps {
  title: string;
  variant: 'grid' | 'h-list';
}

export const Section = ( {title, variant = 'grid'}:ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl"> {title} </h2>

      <ul 
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2  data-[variant=grid]:md:grid-cols-3  data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">

        <li 
        data-variant={variant}
        className="w-full data-[variant=h-list]:sm:w-72">
          <Card
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso de API REST, Node e Typescript"
            description={` Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
                            Links mencionados no vídeo:
                            📖 Repositório do projeto - https://github.com/lvsouza/youtube-curso-api-rest-node-e-typescript
                            🗨️ Discord - https://discord.gg/ZC7JrPZn7P
            
                            Outros cursos no canal:
                            🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10
                            ☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc
                            ⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I
                            👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44
                            🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0
            
                            Livros recomendados:
                            📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW
                            📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H
                            📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9
            
                            Conteúdo:
                            0:00 | Introdução
                            0:27 | Apresentação das tecnologias usadas no curso
                            2:20 | Pra quem é o curso?
                            4:30 | Sobre a API Rest em Node JS que vamos desenvolver
                            5:32 | Qual a proposta do curso?
                            7:24 | A cereja do bolo
                            8:44 | Outros cursos do canal
                            10:00 | Vendo como ficou o projeto
                            10:48 | Testando no insominia
                            15:30 | Apresentando o frontend de testes
                            19:50 | Considerações finais
            
                        CODARSE - Introdução e apresentação do projeto`}
            href="/cursos/11222"
          />
        </li>

        <li
        data-variant={variant}
        className="w-full data-[variant=h-list]:sm:w-72">
          <Card
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso de API REST, Node e Typescript"
            description={` Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
                        Links mencionados no vídeo:
                        📖 Repositório do projeto - https://github.com/lvsouza/youtube-curso-api-rest-node-e-typescript
                        🗨️ Discord - https://discord.gg/ZC7JrPZn7P
        
                        Outros cursos no canal:
                        🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10
                        ☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc
                        ⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I
                        👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44
                        🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0
        
                        Livros recomendados:
                        📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW
                        📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H
                        📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9
        
                        Conteúdo:
                        0:00 | Introdução
                        0:27 | Apresentação das tecnologias usadas no curso
                        2:20 | Pra quem é o curso?
                        4:30 | Sobre a API Rest em Node JS que vamos desenvolver
                        5:32 | Qual a proposta do curso?
                        7:24 | A cereja do bolo
                        8:44 | Outros cursos do canal
                        10:00 | Vendo como ficou o projeto
                        10:48 | Testando no insominia
                        15:30 | Apresentando o frontend de testes
                        19:50 | Considerações finais
        
                    CODARSE - Introdução e apresentação do projeto`}
            href="/cursos/11222"
          />
        </li>

        <li
        data-variant={variant}
        className="w-full data-[variant=h-list]:sm:w-72">
          <Card
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso de API REST, Node e Typescript"
            description={` Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
                        Links mencionados no vídeo:
                        📖 Repositório do projeto - https://github.com/lvsouza/youtube-curso-api-rest-node-e-typescript
                        🗨️ Discord - https://discord.gg/ZC7JrPZn7P
        
                        Outros cursos no canal:
                        🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10
                        ☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc
                        ⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I
                        👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44
                        🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0
        
                        Livros recomendados:
                        📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW
                        📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H
                        📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9
        
                        Conteúdo:
                        0:00 | Introdução
                        0:27 | Apresentação das tecnologias usadas no curso
                        2:20 | Pra quem é o curso?
                        4:30 | Sobre a API Rest em Node JS que vamos desenvolver
                        5:32 | Qual a proposta do curso?
                        7:24 | A cereja do bolo
                        8:44 | Outros cursos do canal
                        10:00 | Vendo como ficou o projeto
                        10:48 | Testando no insominia
                        15:30 | Apresentando o frontend de testes
                        19:50 | Considerações finais
        
                    CODARSE - Introdução e apresentação do projeto`}
            href="/cursos/11222"
          />
        </li>
      </ul>
    </section>
  );
};
