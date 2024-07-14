import { StaticImageData } from "next/image";
import Image from "next/image";
import style from "@/components/product card landscape/product-card-landscape.module.css"
import Link from "next/link";

interface ProductCardLProps {
  image: StaticImageData;
  title: string;
  oldPrice?: number;
  price: number;
  installment: number;
}

export function ProductCardL({
  image,
  title,
  oldPrice,
  price,
  installment,
}: ProductCardLProps) {
  return (
    <Link href="/produto" className={style.link}>
    <div className={style.container}>
      <Image src={image} alt={"Produto Carmed"} className={style.image} width={258} height={258} />
      <div className={style.elements}>
        <h2>{title}</h2>
        <div>
          <div className={style.slash}></div>
          <h3 className={style.oldprice}>R${oldPrice}</h3>
        </div>
        <h1>R${price}</h1>
        <p>Ou 3x de {installment}</p>
      </div>
    </div>
    </Link>
  );
}

