import ProductCard from "./product-card";
import * as motion from "framer-motion/client";

interface ProductsProps {
  products: TProduct[];
}

export default function Products({ products }: ProductsProps) {
  const container = {
    hidden: { opacity: 1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full grid lg:grid-cols-3 gap-10 lg:gap-7 "
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {products.map((product, index) => (
        <ProductCard key={product.title} product={product} index={index} />
      ))}
    </motion.div>
  );
}
