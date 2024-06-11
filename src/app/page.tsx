import Image from 'next/image';
import Sale from './components/Sale';
import Categories from './components/Categories';


export default async function Home () {
  return (
   <>
    <Sale/>
    <Categories/>
   </>
  )
}
