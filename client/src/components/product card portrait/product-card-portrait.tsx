import Trash from "@/assets/icons/trash";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import style from "@/components/product card portrait/product-card-portrait.module.css";

interface ProductCardPProps {
  image: StaticImageData;
  title: string;
  oldPrice?: number;
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

  return (
    <div className={style.container}>
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
        <h3 className={style.oldprice}>R${oldPrice}</h3>
      </div>
      <h1 className={style.price}>R${price}</h1>
      <p className={style.installment}>Ou 3x de R${installment}</p>
      {canEdit ? (
        <div className={style.button}>
          <button onClick={manageEdit} className={style.edit}>
            Editar
          </button>
          <button onClick={manageDelete} className={style.delete}>
            <Trash />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
