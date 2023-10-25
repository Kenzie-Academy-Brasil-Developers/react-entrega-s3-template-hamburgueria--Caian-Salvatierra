import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product,removeCart }) => {
   const {id , img , name} = product;
   
   return (
      <li>
         <div>
            <img src={img} alt={name} />
            <h3>{name}</h3>
         </div>
         <button onClick={() => removeCart(id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
