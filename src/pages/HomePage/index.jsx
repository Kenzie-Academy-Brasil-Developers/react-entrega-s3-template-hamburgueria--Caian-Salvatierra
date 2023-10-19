import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import {apiProducts} from "../../services/api";

export const HomePage = ({setVisible}) => {
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

   // useEffect montagem - carrega os produtos da API e joga em productList



   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
    
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
     
         <Header setVisible= {setVisible}/>
         <main>
            <ProductList 
            productList={productList} />
            
         </main>
      </>
   );
};
