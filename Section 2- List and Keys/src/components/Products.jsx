import { useState } from "react";

const Products = () => {

    const fruits = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Coconut" },
        { id: 4, name: "Mango" }
    ]
    const [products] = useState(fruits);

    return (
        <div>
            {products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </div>
    )
}

export default Products;