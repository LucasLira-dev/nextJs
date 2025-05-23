import Card, { ICardProps } from "../card/Card";


interface ISectionProps {
  title: string;
  items: ICardProps[];
  variant: 'grid' | 'h-list';
}

export const Section = ( {title, items, variant = 'grid'}:ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl"> {title} </h2>

      <ul 
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2  data-[variant=grid]:md:grid-cols-3  data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">

        {items.map(item=>(
             <li 
                data-variant={variant}
                className="w-full data-[variant=h-list]:sm:w-72"
                key={item.title}>
               <Card
                image={item.image}
                title={item.title}
                description={item.description}
                href={item.href}
               />
             </li>
        ))}
       

      
      </ul>
    </section>
  );
};
