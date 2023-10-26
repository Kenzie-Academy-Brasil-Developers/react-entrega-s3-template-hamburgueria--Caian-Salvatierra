import "./styles/index.scss";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { CartModal } from "./components/modal/CartModal";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function App() {
  const localCartList = localStorage.getItem("@CARTLIST");

  const [isVisible, setVisible] = useState(false);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  ); 
  
    // const [currentProduct, setCurrentProduct] = useState(null);

    const addCart = (prodForAdd) => {
      const hasCart = cartList.some(
        (product) => product.id === prodForAdd.id
      );

        if(!hasCart){
          setCartList([...cartList, prodForAdd]);
          toast.success("Adicionado ao Carrinho");
        } else{
          toast.error("Já adicionado ao carrinho")
        }

    };


    const removeCart = (productId) => {
      const newCart = cartList.filter((cart) => cart.id !== productId);
      setCartList(newCart);
      toast.success("Item removido com sucesso!");
    };

    useEffect(() => { 
      localStorage.setItem("@CARTLIST",JSON.stringify(cartList))
    } , [cartList]);

  return (
    <>
      <HomePage 
      addCart={addCart}
      setVisible={setVisible} />
      
      {isVisible ? (
      <CartModal 
      setVisible= {setVisible} 
      cartList={cartList}
      addCart={addCart}
      removeCart= {removeCart}
      /> 
      ) : null}
      < ToastContainer position="top-right"  autoClose={2* 1000}/> 
    </>
  );
};

export default App
