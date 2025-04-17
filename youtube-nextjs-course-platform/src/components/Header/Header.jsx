'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export function Header(){

    const [drawer, setDrawer] = useState(false)
    const [title, setTitle] = useState('CodarSe')
    const currentPath= usePathname() 

    useEffect(()=>{
        setTitle(document.title)
        setDrawer(false)
    }, [currentPath]) 

    return(
       <header>
            <nav 
            className="flex items-center gap-6 justify-start md:justify-center bg-[#009688] py-2 px-6 md:py-4">

                <button className="md:hidden text-[var(--color-text)] cursor-pointer hover:opacity-80"
                onClick={()=>setDrawer(true)}>
                    <MdMenu size={24}/>
                </button>

                <div 
                data-open={drawer} 
                tabIndex={drawer ? 0 : -1}
                onClick={()=>setDrawer(false)}
                className="bg-gradient-to-r from-black  gap-2 text-[var(--color-text)] text-lg fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full md:hidden" 
                >
                    <ul
                    onClick={(e)=>e.stopPropagation()}
                    className="flex flex-col p-4 w-60 h-full gap-2 bg-[var(--color-background)]">
                    
                        <li>
                            <Link href='/'
                            data-active={currentPath==='/'}
                            className='data-[active=true]:border-b-1 border-white'> Página inicial </Link>
                        </li>
                        <li>
                            <Link href='/cursos'
                            data-active={currentPath==='/cursos'}
                            className='data-[active=true]:border-b-1 border-white'> Cursos </Link>
                        </li>
                        <li>
                            <Link href='https://blog.codarse.com' target='_blank' className='flex gap-1 items-center'> 
                                Blog 
                                <MdOpenInNew className="inline-block ml-1" size={16} color="#fff" />
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <ul
                className="flex gap-2 text-[var(--color-text)] text-lg items-center"
                tabIndex={drawer ? -1 : undefined}>
                    <li className='my-2 hover:no-underline !important'>
                        <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold hover:border-0 !"> CODARSE </Link>
                    </li>
                    <li
                    className="hidden sm:block">
                        <Link href='/'
                        data-active={currentPath==='/'}
                        className='data-[active=true]:underline'> Página inicial </Link>
                    </li> 
                    <li
                    className="hidden sm:block">
                        <Link href='/cursos'
                        data-active={currentPath==='/cursos'}
                        className='data-[active=true]:underline'> Cursos </Link>
                    </li>
                    <li
                    className="hidden sm:block">
                        <Link href='https://blog.codarse.com' target='_blank' className='flex gap-1 items-center'> 
                            Blog 
                            <MdOpenInNew className="inline-block ml-1" size={16} color="#fff" />
                        </Link>
                    </li>
                </ul>

                <h1
                className="sm:hidden"> {title} </h1>
            </nav>
       </header>
    )
    
}