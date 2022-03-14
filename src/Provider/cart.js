import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const addToCart = (item) => {
        return(setCart([...cart,item]))
    }
    const removeFromCart = (item,indexProd) => {
        const newCart = cart.filter((product,index)=>index!==indexProd)
        return(setCart(newCart))
    }
    return(
        <CartContext.Provider 
            value={{cart,addToCart,removeFromCart}}>
                {children}
        </CartContext.Provider>
    )
}