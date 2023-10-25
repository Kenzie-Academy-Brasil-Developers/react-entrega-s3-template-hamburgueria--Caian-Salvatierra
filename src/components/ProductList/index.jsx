import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList, cartList , addCart }) => {
  return (
    <section>
      <div className="container">
        <ul className={style.productList}>
          {productList.map((product) => (
            <ProductCard 
            key={product.id} 
            product={product}
            addCart={addCart} 
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
