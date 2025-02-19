import React, { useEffect, useState } from 'react'
import Item from '../components/Item'


const NewCollection = () => {

  const [new_collection, setNew_collection] = useState([]);
 
  useEffect(()=>{
    fetch("http://localhost:4000/newcollections").then((response) =>response.json()).then((data)=>setNew_collection(data));
  },[])

  return (
    <section className='bg-primary'>
    <div className='max_padd_container py-12 xl:w-[88%]'>
        <h3 className='h3 text-center'>Latest Products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16'/>
        {/* container */}
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {new_collection.map((item) => (
                <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
            ))}
        </div>
    </div>
</section>
  )
}

export default NewCollection