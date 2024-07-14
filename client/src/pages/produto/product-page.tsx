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
import { useEffect, useState } from "react";
import axios from "axios";

type Produto = {
  codigo: number;
  nome: string;
  preco_ant: number;
  preco_atual: number;
  categoria: string;
  // image: StaticImageData;
};
interface ProductPageProps {
  title: string;
  oldPrice: number;
  price: number;
  installment: number;
  code: number;
}

export default function ProductPage({
  title,
  oldPrice,
  price,
  installment,
  code
}: ProductPageProps) {
  
  const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]); //adiçao desse useState
  const [produtos, setProdutos] = useState<Produto[]>([]); //adição dessa linha

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function fetchProdutos() {
    //função de buscar todos os produtos
    try {
      const response = await axios.get<Produto[]>(
        "http://localhost:3000/produtos"
      ); //modificação dessa linha
      setProdutos(response.data);
      setFilteredProducts(response.data); //adiçao do setFiltered
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }
  //modificar essa pagina para que o produto seja o que está no banco de dados
  return (
    <>
      <div className={style.container}>
        <ProductInfoDisplay
          image={CarmedProduct}
          title={title}
          oldPrice={oldPrice}
          price={price}
          installment={installment}
          code={code}
        />
        <h1>Itens semelhantes</h1>
        <section>
        {produtos.length > 0 ? (
          produtos.slice(0, 4).map((product) => (
            <ProductCardP
              key={product.codigo}
              image={CarmedProduct} // Adjust according to your image attribute
              title={product.nome}
              oldPrice={product.preco_ant}
              price={product.preco_atual}
              installment={Math.ceil((product.preco_atual / 3) * 100) / 100} // Example calculation for installment
              editable={false}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
        </section>
        <h1>Outros Produtos</h1>
        <section>
        {produtos.length > 0 ? (
          produtos.slice(0, 2).map((product) => (
            <ProductCardL
              key={product.codigo}
              image={CarmedProduct} // Adjust according to your image attribute
              title={product.nome}
              oldPrice={product.preco_ant}
              price={product.preco_atual}
              installment={Math.ceil((product.preco_atual / 3) * 100) / 100} // Example calculation for installment
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
        </section>
      </div>
    </>
  );
}
