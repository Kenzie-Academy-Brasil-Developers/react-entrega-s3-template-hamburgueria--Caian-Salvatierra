import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList }) => {
  return (
    <section>
      <div className="container">
        <ul>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};
