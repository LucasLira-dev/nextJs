'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";

export function Header(){

    const currentPath= usePathname()

    return(
       <header>
            <nav 
            className="flex items-center justify-center bg-[#009688] py-4">
                <ul
                className="flex gap-2 text-[var(--color-text)] text-lg items-center">
                    <li className='my-2 hover:no-underline'>
                        <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold hover:no-underline"> CODARSE </Link>
                    </li>
                    <li>
                        <Link href='/'
                        data-active={currentPath==='/'}
                        className='data-[active=true]:underline'> Página inicial </Link>
                    </li>
                    <li>
                        <Link href='/cursos'
                        data-active={currentPath==='/cursos'}
                        className='data-[active=true]:underline'> Cursos </Link>
                    </li>
                    <li>
                        <Link href='https://blog.codarse.com' target='_blank' className='flex gap-1 items-center'> 
                            Blog 
                            <MdOpenInNew className="inline-block ml-1" size={16} color="#fff" />
                        </Link>
                    </li>
                </ul>
            </nav>
       </header>
    )
    
}