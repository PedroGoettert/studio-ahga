'use client'

import Image from "next/image";

import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

import logo from '@/assets/complete-logo-removebg-preview.png'

export default function Contact() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex gap-16 items-center">
        <div className="max-h-screen h-96 flex flex-col items-center">
          <Image src={logo} alt="contact" className="h-full w-auto" />
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="font-text font-bold text-2xl">Contato</h2>

            <div className="flex gap-4 items-center justify-center">
              <FaPhone size={24} />
              <p>{"(51) 99999-9999"}</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <FaWhatsapp size={24} />
              <p>{"(51) 99999-9999"}</p>
            </div>
            <div className="flex gap-4 items-end justify-center">
              <FaEnvelope size={24} />
              <p className="">henrique@studioahga.arq.br</p>
            </div>

            <div className="flex gap-8">
              <a href="https://www.instagram.com/studioahga/">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.youtube.com/@canaldoahga">
                <FaYoutube size={30} />
              </a>
              <a href="https://www.facebook.com/studioahga/">
                <FaFacebook size={30} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <p className="font-text font-bold text-base">Pronto para transformar seu projeto em realidade?</p>
            <p>Aqui desenvolvemos um projeto único, feito sob medida para você</p>

            <a href={'#'} className="flex  gap-2 items-center p-4 border border-solid border-black">
              <FaWhatsapp size={28} />
              <span>Comece seu projeto agora!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
