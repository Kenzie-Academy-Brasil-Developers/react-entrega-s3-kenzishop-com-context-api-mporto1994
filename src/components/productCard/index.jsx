import { useContext } from "react"
import { CartContext } from "../../Provider/cart"
import { Card } from "./styles"

export const ProductCard = ({item}) => {
    const {addToCart} = useContext(CartContext)
    
    return (
        <Card>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image} alt="product" />
            <button onClick={()=>addToCart(item)}>Adicionar ao Carrinho</button>
        </Card>
)
}