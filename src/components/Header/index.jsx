
import Logo from "../../assets/MaskGroup.png";
import { MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({setVisible , count}) => {
   // const [value, setValue] = useState("");

  

   return (
      <header className={style.header}>
         <div  className="container">
         <div className={style.box}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={() => setVisible(true)}>
                <MdShoppingCart size={21} />
                <span>
                  {
                    count 
                  }
                </span>
            </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
         </div>
      </header>
   );
};
