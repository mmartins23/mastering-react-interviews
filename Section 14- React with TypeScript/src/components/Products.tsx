interface ProductProps {
  id: number;
  name: string;
  description?: string; // Optional attribute
}

const Products = ({ id, name, description }: ProductProps) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      {description && <p>Description: {description}</p>}
    </div>
  );
};

export default Products;
