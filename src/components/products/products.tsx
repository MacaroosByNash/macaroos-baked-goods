import ProductCard from "./product-card";

interface ProductsProps {
  products: TProduct[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className="w-full grid lg:grid-cols-3 gap-10 lg:gap-7 ">
      {products.map((product, index) => (
        <ProductCard key={product.title} product={product} index={index} />
      ))}
    </div>
  );
}
