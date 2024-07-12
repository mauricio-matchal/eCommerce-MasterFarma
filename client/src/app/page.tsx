import { ProductCardP } from "@/components/product card portrait/product-card-portrait";
import Image from "next/image";
import CarmedProduct from "../assets/carmed-product.png";
import { createClient } from "../prismicio";
import style from "./page.module.css";
import Rolagem from "../../components/indicadorNav/rolagem";
import Secoes from "../../components/secoes/secoes";
import Ofertas from "../../components/ofertas/ofertas";
import Marcas from "../../components/marcas/marcas";
import Kit from "../../components/kit/kit";
import { PrismicNextImage } from "@prismicio/next";
import Vendidos from "../../components/maisVendidos/vendidos";
import { ProductManagePage } from "@/pages/gestao/product-manage";

export default async function Home() {
  const prismic = createClient();

  const carrossel = await prismic.getByUID("carrossel", "carrosselme");

  const renderImage = (image: any, key: string) => {
    if (!image) return null;
    const { url, alt, dimensions } = image;
    if (!dimensions) return null;
    return (
      <PrismicNextImage
        key={key}
        field={image}
        alt=""
        className={style.imageProp}
        width={1200}
        height={500}
      />
    );
  };

  return (
    <>
      {/* <div className={style.home}>
        <div className={style.carro}>
          {renderImage(carrossel.data.prop, 'prop')}
          {renderImage(carrossel.data.prop1, 'prop1')}
          {renderImage(carrossel.data.prop2, 'prop2')}
          {renderImage(carrossel.data.prop3, 'prop3')}
          {renderImage(carrossel.data.prop4, 'prop4')}
        </div>
      
    </div>
    <Rolagem/>
    <Secoes/>
    <Ofertas tituloSecao="Ofertas do dia"/>
    <Marcas/>
    <Kit/>
    <Vendidos tituloSecao="Mais vendidos"/> */}
      <ProductManagePage />
    </>
  );
}
