'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export function Header(){

    const currentPath= usePathname()
    

    return(
       <header>
            <nav 
            className="flex items-center gap-6 justify-start md:justify-center bg-[#009688] py-2 px-6 md:py-4">

                <button className="md:hidden text-[var(--color-text)] cursor-pointer hover:opacity-80">
                    <MdMenu size={24}/>
                </button>
                
                <ul
                className="flex gap-2 text-[var(--color-text)] text-lg items-center">
                    <li className='my-2 hover:no-underline'>
                        <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold hover:no-underline"> CODARSE </Link>
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
                className="sm:hidden"> CodarSe - Página inicial </h1>
            </nav>
       </header>
    )
    
}