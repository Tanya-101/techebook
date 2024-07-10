import { useTitle } from "../../hooks/useTitle";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";
import { useCart } from "../../context";

export const CartPage = () => {


  const { cartList } = useCart();
  const CartlistLength=cartList.length;
  useTitle(`Cart(${CartlistLength})`);

  return (
    <main className="dark:bg-slate-800">
        {CartlistLength===0 ? <CartEmpty/> : <CartList/>}
    </main>
  )
}
