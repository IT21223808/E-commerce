import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'> The dress features a simple and classic T-shirt silhouette that falls just above the knee, providing a comfortable and relaxed fit. The round neckline and short sleeves offer a laid-back vibe, while the subtle pocket detail on the chest adds a touch of utility and style. The straight cut of the dress ensures ease of movement and a flattering look for various body types.</p>
            <p className='text-sm'> Made from a soft, breathable cotton blend, the dress is lightweight and perfect for warm weather. The fabric's natural stretch ensures all-day comfort, while the durable weave maintains the dress's shape and structure.</p>
            <p className='text-sm'> The dress comes in a versatile olive green shade, a color that complements a wide range of skin tones and can easily be paired with various accessories for different looks.</p>
        </div>
    </div>
  )
}

export default ProductDescription