import Trash from "@/assets/icons/trash";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import style from "@/components/product card portrait/product-card-portrait.module.css";
import Link from "next/link";

interface ProductCardPProps {
  image: StaticImageData;
  title: string;
  oldPrice: number;
  price: number;
  installment: number;
  editable?: boolean;
  manageDelete?: () => void;
  manageEdit?: () => void;
}

export function ProductCardP({
  image,
  title,
  oldPrice,
  price,
  installment,
  editable = false,
  manageDelete,
  manageEdit,
}: ProductCardPProps) {
  const [canEdit, setCanEdit] = useState(editable);

  useEffect(() => {
    setCanEdit(editable);
  }, [editable]);

  function formatFloatWithComma(number: number) {
    return number.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }


  return (
    <>
      {canEdit ? (
        <div className={style.container}>
          <div>
            <Image
              src={image}
              alt={"Produto Carmed"}
              width={258}
              height={258}
              className={style.image}
            />
            <h2 className={style.title}>{title}</h2>
            <div className={style.oldprice}>
              <div className={style.slash}></div>
              <h3 className={style.oldprice}>R${formatFloatWithComma(oldPrice)}</h3>
            </div>
            <h1 className={style.price}>R${formatFloatWithComma(price)}</h1>
            <p className={style.installment}>Ou 3x de R${formatFloatWithComma(installment)}</p>
          </div>
          <div>
            <div className={style.button}>
              <button onClick={manageEdit} className={style.edit}>
                Editar
              </button>
              <button onClick={manageDelete} className={style.delete}>
                <Trash />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/produto" className={style.link}>
          <div className={style.container}>
            <div>
              <Image
                src={image}
                alt={"Produto Carmed"}
                width={258}
                height={258}
                className={style.image}
              />
              <h2 className={style.title}>{title}</h2>
              <div className={style.oldprice}>
                <div className={style.slash}></div>
                <h3 className={style.oldprice}>R${formatFloatWithComma(oldPrice)}</h3>
              </div>
              <h1 className={style.price}>R${formatFloatWithComma(price)}</h1>
              <p className={style.installment}>Ou 3x de R${formatFloatWithComma(installment)}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
