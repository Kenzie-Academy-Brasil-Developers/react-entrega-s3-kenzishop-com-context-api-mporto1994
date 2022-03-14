import { useContext } from "react"
import { CartContext } from "../../Provider/cart"
import { Card } from "./styles"

export const CartCard = ({item,index}) => {
    const {removeFromCart} = useContext(CartContext)
    return (
        <Card>
            <img src={item.image} alt="productImage"/>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
            
                <button onClick={()=>removeFromCart(item,index)}>Remover</button>  
            </div>
            
        </Card>
)
}