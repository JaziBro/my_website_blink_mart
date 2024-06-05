import Image from 'next/image';
import Sale from './components/Sale';
import Categories from './components/Categories';
import New_products from './components/New_Products';
import { getProducts } from './Helpers/page';

export default async function Home () {
  const products = await getProducts()
  console.log(products)
  return (
   <>
    <Sale/>
    <Categories/>
    <New_products/>
   </>
  )
}
