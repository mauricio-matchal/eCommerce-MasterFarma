import ProductPage from "@/pages/produto/product-page"

export default function Produto(){
    return(
        <ProductPage title={"Hidratante Labial Carmed Barbie 65 Pink 10g"} oldPrice={49.9} price={29.9} installment={Math.ceil((29.9 / 3) * 100) / 100} code={34682955}/>
    )
}