import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    console.log(cartItems)

    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
            <diV className="flex flex-wrap justify-center">
                {cartItems.map((item) => (<FoodItem key={item.id} item = {item} />))}
            </diV>
        </div>
    )
}

export default Cart;