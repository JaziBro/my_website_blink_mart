import Image from 'next/image';
import Sale from './components/Sale';
import Categories from './components/Categories';
import New_products from './components/New_Products';


export default function Home () {
 
  return (
   <>
    <Sale/>
    <Categories/>
    <New_products/>
   </>
  )
}
