import React, { useState, useEffect } from 'react'
// import POPULAR from '../assets/popular'
import Item from '../components/Item'

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);
 
  useEffect(()=>{
    fetch("http://localhost:4000/popularproducts").then((response) =>response.json()).then((data)=>setPopularProducts(data));
  },[])

  return (
    <section className='bg-primary'>
        <div className='max_padd_container py-12 xl:w-[88%]'>
            <h3 className='h3 text-center'>Popular Products</h3>
            <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16'/>
            {/* container */}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {popularProducts.map((item) => (
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular