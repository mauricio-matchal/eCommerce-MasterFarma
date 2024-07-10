import CartPlusLarge from "@/assets/icons/cart.plus.large";
import Image, { StaticImageData } from "next/image";
import axios from "axios";
import style from "@/components/product info display/product-info-display.module.css";

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
  const handleAddToCart = async () => {
    //função de adicionar ao carrinho
    try {
      await axios.post("http://localhost:3000/carrinho", { product: code });
      alert("Produto adicionado ao carrinho com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      alert("Erro ao adicionar ao carrinho.");
    }
  };

  return (
    <div className={style.container}>
      <div>
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className={style.imagesmall}
        />
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className={style.imagesmall}
        />
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className={style.imagesmall}
        />
        <Image
          src={image}
          alt={"Product Carmed"}
          width={80}
          height={80}
          unoptimized={true}
          className={style.imagesmall}
        />
      </div>
      <Image
        src={image}
        alt={"Product Carmed"}
        width={500}
        height={500}
        unoptimized={true}
        className={style.imagelarge}
      />
      <section>
        <h1 className={style.title}>{title}</h1>
        <div className={style.code}>
          <div>★★★★★</div>
          <p className={style.code}>Código: {code}</p>
        </div>
        <div className={style.prices}>
          <div>
            <div className={style.oldprice}>
              <div className={style.slash}></div>
              <h3 className={style.oldprice}>R${oldPrice}</h3>
            </div>
            <h1 className={style.price}>R${price}</h1>
            <p className={style.parcelas}>Ou 3x de {installment}</p>
          </div>
          <button className={style.addtocart} onClick={handleAddToCart}>
            <div className={style.addtocart}>
              <CartPlusLarge />
              <span className={style.addtocart}>Adicionar ao carrinho</span>
            </div>
          </button>
        </div>
        <div className={style.cep}>
          <h3>Calcule o valor do frete</h3>
          <div>
            <input type="text" placeholder="Digite seu CEP" className={style.text} />
            <input
              type="submit"
              value="Ok"
              className={style.submit}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
