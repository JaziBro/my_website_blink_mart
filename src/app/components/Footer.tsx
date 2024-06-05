import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/text_logo.jpg'
import Image from 'next/image'
import { FOOTER_LINKS } from '../constants/constants'
import { FOOTER_CONTACT_INFO } from '../constants/constants'
import { SOCIALS } from '../constants/constants'

const Footer = () => {
  return (
  <footer className='flex items-center justify-center mb-24 bg-sky-400 mt-5'>
    <div className='padding-container max-container flex w-full flex-col gap-14'>
      <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'></div>
        <Link href="/" className='mb-5'>
          <Image src={Logo} alt='logo' width={150} height={100}/>
        </Link>
        
        <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title}>
              <ul className='text-[14px] font-[400] flex flex-col gap-4 text-yellow-200'>
                {columns.links.map((link) => (
                 <Link href="/" key={link}>
                   {link}
                 </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
          
          <div className='flex flex-col gap-5'>
             <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link href="/About" key={link.label} className='flex gap-4 md:flex-col lg:flex-row text-yellow-200'>
                  <p className='whitespace-nowrap'>
                    {link.label}:
                  </p>
                  <p className='whitespace-nowrap font-medium '>
                    {link.value}
                  </p>
                </Link>
              ))}
             </FooterColumn>
          </div>

          <div className='flex flex-col gap-5'>
            <FooterColumn title={SOCIALS.title}>
              <ul className='text-[14px] text-yellow-200 mx-5 align-text-top'>
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link} className='mx-5 lg:flex-row md:flex-col'>
                    <Image src={link} alt='logo' width={24} height={24}/>
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        
        <div className='border bg-gray-50 w-full text-center'>
          <p> 2023 Blinkmart | All rights reserved</p>
        </div>
    </div>
  </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='font-bold whitespace-nowrap text-yellow-300'> {title} </h4>
      {children}
    </div>
  )
}

export default Footer 
