import "./styles/index.scss";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { CartModal } from "./components/CartModal";

function App() {
  const [cartList, setCartList] = useState([]); 
  const [isVisible, setVisible] = useState(false);


  return (
    <>
      <HomePage setVisible={setVisible} />
      {isVisible ? <CartModal setVisible= {setVisible} cartList={cartList}/> : null}
    </>
  );
};

export default App
