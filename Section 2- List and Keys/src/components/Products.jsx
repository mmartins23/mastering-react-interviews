import { useState } from "react";

const Products = () => {

    const fruits = ["Apple", "Banana", "Cocunut", "Mango"];
    const [products] = useState(fruits);

    return (
        <div>
            {products.map(product => (
                <li>{product}</li>
            ))}
        </div>
    )
}

export default Products;