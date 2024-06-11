import { useState } from "react";
import ListItems from "./ListItems";

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
                <ListItems key={product.id} name={product.name} />
            ))}
        </div>
    )
}

export default Products;