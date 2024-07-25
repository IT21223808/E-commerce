import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { shopcontext } from '../context/shopcontext';
import ProductHd from '../components/ProductHd';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
import ProductDisplay from '../components/ProductDisplay'

const Product = () => {
  const {all_products} = useContext(shopcontext);
  const {productId} =useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  
  if(!product){
    return <div>Product not found</div>
  }
  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelatedProducts/>
      </div>
    </section>
  )
}

export default Product;