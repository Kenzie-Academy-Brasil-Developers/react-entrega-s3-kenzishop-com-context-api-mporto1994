import { createContext, useState } from "react"

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({children}) => {
    const [catalogue, setCatalogue] = useState([
        {name: "Echo Dot", price: 279.00, image: "https://i.zst.com.br/thumbs/12/e/2f/930131316.jpg"},
        {name: "Echo Dot", price: 279.00, image: "https://i.zst.com.br/thumbs/12/e/2f/930131316.jpg"},
        {name: "Kindle Paperwhite", price: 499.00, image: "https://a-static.mlcdn.com.br/1500x1500/e-reader-amazon-novo-kindle-paperwhite-preto-8gb-wi-fi-a-prova-d-agua-tela-6-iluminacao-embutida/zoo/97218/19822f6b0d711143cedb8209acb5c94c.jpg"},
        {name: "Kindle Paperwhite", price: 499.00, image: "https://a-static.mlcdn.com.br/1500x1500/e-reader-amazon-novo-kindle-paperwhite-preto-8gb-wi-fi-a-prova-d-agua-tela-6-iluminacao-embutida/zoo/97218/19822f6b0d711143cedb8209acb5c94c.jpg"},
        {name: "Fire TV Stick", price: 227.05, image: "https://a-static.mlcdn.com.br/1500x1500/fire-tv-stick-amazon-4k-hdmi-compativel-com-alexa/magazineluiza/228181600/0c9ab4eaea3fe0eda5f3e8554139ae82.jpg"},
        {name: "Fire TV Stick", price: 227.05, image: "https://a-static.mlcdn.com.br/1500x1500/fire-tv-stick-amazon-4k-hdmi-compativel-com-alexa/magazineluiza/228181600/0c9ab4eaea3fe0eda5f3e8554139ae82.jpg"},
        {name: "Echo Show 8", price: 854.05, image: "https://t.ctcdn.com.br/x8YKt04qtCPjvLNBiWn-k1fnW_U=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413809.png"},
        {name: "Echo Show 8", price: 854.05, image: "https://t.ctcdn.com.br/x8YKt04qtCPjvLNBiWn-k1fnW_U=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413809.png"}
      ]);
    return(
        <CatalogueContext.Provider value = {{catalogue}}>
            {children}
        </CatalogueContext.Provider>
    ) 


}