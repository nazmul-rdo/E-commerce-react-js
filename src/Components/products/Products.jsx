import React, { useState } from 'react'
import { Dummyproducts } from '../../asset/js/Products'
import SingleProducts from './SingleProducts'
const Products = () => {

    const [product, setProduct] = useState(Dummyproducts);

    const handleSendInnerMassage = (event) => {

        event.preventDefault();
        setProduct([...product, {
            cardId: "card",
        }]);

    }
    return (
        <>
            {product.map((item) => (
                <SingleProducts key={item.productId} item={item} handleSendInnerMassage={handleSendInnerMassage} />
            ))}
        </>
    )
}

export default Products