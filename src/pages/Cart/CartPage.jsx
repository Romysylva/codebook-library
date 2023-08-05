import {useTitle} from "../../hooks/useTitile"

import { EmptyCart } from "./components/EmptyCart";
import { CartList } from "./components/CartList";
import {useCart} from "../../context"



export const CartPage = () => {
    const {cartList} = useCart()
    useTitle(`cart (${cartList.length})`)
    return (
        <main>
            {cartList.length ? <CartList /> : <EmptyCart />}
        </main>
    )
}