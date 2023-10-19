import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList }) => {
  return (
    <section>
      <div className="container">
        <ul className={style.productList}>
          {productList.map((product) => (
            <ProductCard 
            key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};
