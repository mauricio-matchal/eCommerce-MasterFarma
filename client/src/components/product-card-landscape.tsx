import { StaticImageData } from "next/image";
import Image from "next/image";

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
    <div className="bg-anil-600 flex flex-row py-6 px-6 gap-[18px] rounded-[30px] ">
      <Image src={image} alt={"Produto Carmed"} className="rounded-[14px]" width={258} height={258} />
      <div className="flex flex-col max-w-[261px]">
        <h2 className="text-2xl mt-3 font-extrabold">{title}</h2>
        <div className="relative max-w-fit max-h-fit mt-4">
          <div className="absolute w-[110px] h-[4px] bg-anil-950 rounded-full origin-center rotate-[-15deg] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-2xl font-bold max-w-fit">R${oldPrice}</h3>
        </div>
        <h1 className="text-5xl text-anil-950 font-extrabold">R${price}</h1>
        <p className="text-xl font-medium">Ou 3x de {installment}</p>
      </div>
    </div>
  );
}
