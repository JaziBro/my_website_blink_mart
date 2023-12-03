import Image from 'next/image'
import Logo from '../../../public/text_logo.jpg'
import { nav_links } from './constants'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => { 
  return (
    <div className= 'flex flex-wrap justify-between items-center bg-sky-400 h-16'>
      <Image src={Logo} alt="blinkmart" width={200} height={200} className='mx-5'/>
      
      <ul className='gap-x-6'>
        {nav_links.map((link) => (
          <Link href={link.href} key={link.key} className='text-yellow-300 font-sans hover:font-bold mx-8 text-lg'> 
            {link.label}
          </Link>
        ))}
      </ul> 
    </div>
  ) 
}
export default Navbar
