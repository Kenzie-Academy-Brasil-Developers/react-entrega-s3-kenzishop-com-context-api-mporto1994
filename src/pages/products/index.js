import { useSelector } from "react-redux";
import { CartCard } from "../../components/cartCard";
import { ProductCard } from "../../components/productCard";
import { ContainerBody } from "./styles";

import { CatalogueContext } from "../../Provider/catalogue";
import { CartContext } from "../../Provider/cart";
import { useContext } from "react";

const ProductsPage = () => {
    const {catalogue} = useContext(CatalogueContext)
    const {cart,addToCart,removeFromCart} = useContext(CartContext)
    console.log(cart,catalogue)


    // console.log(cartList)
    return(
        <ContainerBody>
            <nav>kenzieShop - entrar, carrinho</nav>
            <div className="main">
                <div className="Prod">
                    {catalogue.map((item, index)=> (<ProductCard key={index} item={item}/>))}
                </div>
                <aside>
                    {cart.map((item, index)=> (<CartCard key={index} index={index} item={item}/>))}
                </aside>
            </div>
        </ContainerBody>
    )
}
export default ProductsPage