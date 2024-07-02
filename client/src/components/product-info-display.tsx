import CartPlusLarge from "@/assets/icons/cart.plus.large";
import Image, { StaticImageData } from "next/image";

interface ProductInfoDisplayProps {
  image: StaticImageData;
  title: string;
  oldPrice?: number;
  price: number;
  installment: number;
  code: number;
}

export function ProductInfoDisplay({
  image,
  title,
  oldPrice,
  price,
  installment,
  code,
}: ProductInfoDisplayProps) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col gap-2">
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className="border-[1px] border-anil-950 border-opacity-20 rounded-[15px]"
        />
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className="border-[1px] border-anil-950 border-opacity-20 rounded-[15px]"
        />
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className="border-[1px] border-anil-950 border-opacity-20 rounded-[15px]"
        />
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className="border-[1px] border-anil-950 border-opacity-20 rounded-[15px]"
        />
      </div>
      <Image
        src={image}
        alt={"Product Carmed"}
        width={500}
        height={500}
        unoptimized={true}
        className="border-[1px] border-anil-950 border-opacity-20 rounded-[30px]"
      />
      <section className="flex flex-col w-[600px] text-anil-950 my-auto">
        <h1 className="text-anil-600 text-[40px] font-extrabold leading-[50px]">
          {title}
        </h1>
        <div className="w-full flex flex-row justify-between mt-[15px]">
          <div>Estrelas</div>
          <p className="font-light">Código: {code}</p>
        </div>
        <div className="w-full flex flex-row items-center justify-between mt-8">
          <div>
            <div className="relative max-w-fit">
              <div className="absolute w-[110px] h-[4px] bg-anil-950 rounded-full origin-center rotate-[-15deg] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold max-w-fit text-anil-600">
                R${oldPrice}
              </h3>
            </div>
            <h1 className="text-5xl text-anil-950 font-extrabold">R${price}</h1>
            <p className="text-xl font-medium text-anil-600">
              Ou 3x de {installment}
            </p>
          </div>
          <button className="bg-anil-600 w-[288px] py-[30px] rounded-[15px]">
            <div className="flex gap-3 items-center mx-auto w-fit">
              <CartPlusLarge />
              <span className="text-anil-50 text-2xl font-bold text-start w-[170px]">
                Adicionar ao carrinho
              </span>
            </div>
          </button>
        </div>
        <div className="w-full flex flex-col mt-8 border-[3px] border-anil-600 py-5 rounded-[15px] pl-4 gap-2">
          <h3 className="text-2xl font-extrabold text-anil-950">
            Calcule o valor do frete
          </h3>
          <div className="flex flex-row gap-3">
            <input
              type="text"
              placeholder="Digite seu CEP"
              className="bg-anil-600 text-anil-50 text-xl pl-[13px] w-[324px] h-[54px] rounded-[15px]"
            />
            <input
              type="submit"
              value="Ok"
              className="w-[123px] h-[54px] bg-anil-950 text-anil-50 text-2xl font-extrabold  rounded-[15px] hover:cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
