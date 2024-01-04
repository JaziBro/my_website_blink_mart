import Image from 'next/image'
import Logo from '../../../public/text_logo.jpg'
import { nav_links } from '../constants/constants'
import Link from 'next/link'
import { Menu } from '../../components/ui/sheet'
import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '../../components/ui/sheet'


const Navbar = () => { 
  return (
    <header className='w-full flex flex-wrap justify-between items-center h-16 border bg-sky-400'>
      <div>
        <Image src={Logo} alt="blinkmart" width={200} height={200} className='mx-5'/>
      </div>

      <div className=''>     
        <ul className='text-lg font-medium hidden md:flex gap-x-10'>
          {nav_links.map((link) => (
          <Link href={link.href} key={link.key} className='text-yellow-500 font-sans hover:font-bold mx-8 text-lg'> 
            {link.label}
          </Link>
          ))}
        </ul> 
        <div className='flex md:hidden'>
          <Sheet>
            <SheetTrigger>
             <Menu/>
            </SheetTrigger>
            <SheetContent >
              <SheetHeader >
                <ul className='text-lg font-medium gap-x-4'>
                  <li>
                    <Link className='text-white' href={"/"}>Home </Link>
                  </li>
                  <li>
                    <Link className='text-white' href={"/About"}>About</Link>
                  </li>
                  <li>
                    <Link className='text-white' href={"/Contact"}>Contact</Link>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  ) 
} 
export default Navbar
