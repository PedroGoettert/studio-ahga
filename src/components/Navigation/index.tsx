import Image from "next/image";
import Link from "next/link";

import logo from '../../assets/logo.jpeg';

export function Navigation() {
  return (
    <header className="flex justify-center items-center absolute left-[50%] translate-x-[-50%] mt-8">
      <nav className="flex justify-between gap-8 items-center bg-gray px-8 py-1 rounded-[18px]">
        <button type="button">
          <Image
            src={logo}
            alt="logo"
            className="h-8 w-auto justify-self-start"
          />
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