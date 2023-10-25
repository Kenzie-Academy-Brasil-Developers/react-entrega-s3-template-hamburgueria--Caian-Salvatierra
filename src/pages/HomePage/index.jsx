import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import {apiProducts} from "../../services/api";

export const HomePage = ({setVisible, addCart}) => {
   
   const [productList, setProductList] = useState([]);
   
  useEffect(() =>{
   const getProdutc = async () => {
      try {
         const {data} = await apiProducts.get("/products");
         setProductList(data)
      } catch (error) {
         console.log(error);
         
      }
   };
   getProdutc();
  }, []);
   
   return (
      <>
     
         <Header setVisible= {setVisible}/>
         <main>
            <ProductList 
            productList={productList} 
            addCart={addCart}
            />
            
         </main>
      </>
   );
};
