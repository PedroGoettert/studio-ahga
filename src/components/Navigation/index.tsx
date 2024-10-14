import Image from "next/image";
import Link from "next/link";

import logo from '../../assets/logo.jpeg';

export function Navigation() {
  return (
    <header className="flex justify-center items-center absolute translate-x-[50%] right-[50%] pt-8">

      <nav className="flex gap-8 bg-gray px-8 py-1 rounded-[15px]">
        <button type="button" className="h-8">
          <Image src={logo} alt="logo" className="h-auto min-w-8 max-h-8 w-auto" />
        </button>


        <ul className="flex gap-4 font-text text-xl lowercase text-white">
          <li>
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'studio'}>
              Studio
            </Link>
          </li>

          <li>
            <Link href={'metodos'}>
              Métodos
            </Link>
          </li>
          <li>
            <Link href={'projetos'}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href={'arquiteto'}>
              Arquiteto
            </Link>
          </li>
          <li>
            <Link href={'contato'}>
              Contato
            </Link>
          </li>
        </ul>

      </nav>
    </header >
  );
}