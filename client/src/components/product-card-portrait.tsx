import Trash from "@/assets/icons/trash";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

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
    <div className="bg-anil-600 p-4 pb-8 rounded-[30px] max-w-[290px]">
      <Image src={image} alt={"Produto Carmed"} className="rounded-[14px]" />
      <h2 className="text-2xl mt-3 font-extrabold">{title}</h2>
      <div className="relative max-w-fit">
        <div className="absolute w-[110px] h-[4px] bg-anil-950 rounded-full origin-center rotate-[-15deg] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <h3 className="text-2xl mt-4 font-bold max-w-fit">R${oldPrice}</h3>
      </div>
      <h1 className="text-5xl text-anil-950 font-extrabold">R${price}</h1>
      <p className="text-xl font-medium">Ou 3x de {installment}</p>
      {canEdit ? (
        <div className="flex flex-row w-full gap-2 mt-4 -mb-[15px]">
          <button onClick={manageEdit} className="bg-anil-950 rounded-[15px] w-[195px] text-2xl font-extrabold">
            Editar
          </button>
          <button onClick={manageDelete} className="flex items-center justify-center w-[58px] h-[54px] bg-anil-50 rounded-[15px]">
            <Trash />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
