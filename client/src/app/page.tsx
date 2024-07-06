import { ProductCardP } from "@/components/product-card-portrait";
import Image from "next/image";
import CarmedProduct from "../assets/carmed-product.png";
import { createClient } from "../prismicio"
import style from './page.module.css';
import Rolagem from "../../components/indicadorNav/rolagem";
import Secoes from "../../components/secoes/secoes";
import Ofertas from "../../components/ofertas/ofertas";
import Marcas from "../../components/marcas/marcas";
import Kit from "../../components/kit/kit";
 
export default async function Home() {

  const prismic = createClient();

  const carrossel = await prismic.getByUID('carrossel', 'carrosselme');

  const renderImage = (image: any, key: string) => {
    if (!image) return null;
    const { url, alt, dimensions } = image;
    if (!dimensions) return null;
    return (
      <Image
        key={key}
        src={url}
        alt={alt || 'Image'}
        width={dimensions.width}
        height={dimensions.height}
        className={style.imageProp}
      />
    );
  };

  return (
    <>
    <div className={style.home}>
      {renderImage(carrossel.data.prop, 'prop')}
      {renderImage(carrossel.data.prop1, 'prop1')}
      {renderImage(carrossel.data.prop2, 'prop2')}
      {renderImage(carrossel.data.prop3, 'prop3')}
      {renderImage(carrossel.data.prop4, 'prop4')}
    </div>
    <Rolagem/>
    <Secoes/>
    <Ofertas/>
    <Marcas/>
    <Kit/>
    </>
  );
}
