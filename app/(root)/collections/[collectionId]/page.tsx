import React from 'react'
import { getCollectionDetails } from '@/lib/actions/actions';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

const CollectionDetails = async ({ params }: { params: { collectionId: string } }) => {
    const collectionDetails = await getCollectionDetails(params.collectionId);

    console.log(collectionDetails);

    return (
        <div className="px-10 py-5 flex flex-col items-center gap-8">
            <Image 
                src={collectionDetails.image} 
                alt="collection" 
                width={1500} 
                height={1000} 
                className="w-full h-[700px] object-cover rounded-xl"
            />
            <p className="text-heading3-bold text-grey-2 ">{collectionDetails.title}</p>
            <p className="text-body-normal text-center max-w-[900px] text-grey-2 ">{collectionDetails.description}</p>
            <div className="flex flex-wrap gap-16 mx-auto">
                {collectionDetails.products.map((product: ProductType) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
  )
}

export default CollectionDetails;

export const dynamic = 'force-dynamic';