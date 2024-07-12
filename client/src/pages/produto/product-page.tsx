"use client";
import style from "@/pages/produto/product-page.module.css";
import { NavBar } from "@/components/navbar/navbar";
import { ProductCardP } from "@/components/product card portrait/product-card-portrait";
import CarmedProduct from "@/assets/carmed-product.png";
import LogoCopy from "@/assets/logo.large";
import { ProductCardL } from "@/components/product card landscape/product-card-landscape";
import { ProductInfoDisplay } from "@/components/product info display/product-info-display";
import { Footer } from "@/components/footer";
import Cabecalho from "../../../components/cabecalho/cabecalho";
import Rodape from "../../../components/rodape/rodape";

export default function ProductPage() {
  //modificar essa pagina para que o produto seja o que está no banco de dados
  return (
    <>
      <div className={style.container}>
        <ProductInfoDisplay
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
          code={40028922}
        />
        <h1>Itens semelhantes</h1>
        <section>
          <ProductCardP
            image={CarmedProduct}
            title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
            oldPrice={49.99}
            price={29.99}
            installment={9.99}
          />
          <ProductCardP
            image={CarmedProduct}
            title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
            oldPrice={49.99}
            price={29.99}
            installment={9.99}
          />
          <ProductCardP
            image={CarmedProduct}
            title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
            oldPrice={49.99}
            price={29.99}
            installment={9.99}
          />
          <ProductCardP
            image={CarmedProduct}
            title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
            oldPrice={49.99}
            price={29.99}
            installment={9.99}
          />
        </section>
        <h1>Outros Produtos</h1>
        <section>
          <ProductCardL
            image={CarmedProduct}
            title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
            oldPrice={49.99}
            price={29.99}
            installment={9.99}
          />
          <ProductCardL
            image={CarmedProduct}
            title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
            oldPrice={49.99}
            price={29.99}
            installment={9.99}
          />
        </section>
      </div>
      <Rodape />
    </>
  );
}
