import style from "./vendidos.module.css";
import Image from "next/image";
import Produto from "../.././public/hidratante.svg"
import Traco from "../../public/traco.svg";

interface VendidosProps {
    tituloSecao: string;
} 

export default function Vendidos( {tituloSecao} :VendidosProps){
    return(
        <div className={style.maisVendidos}>
            <div className={style.titulo}>
                <h1>{tituloSecao}</h1>
            </div>

            <div className={style.elemento}>
                <div className={style.produto}>
                    <Image className={style.imagem} src={Produto} alt="hidratante" />

                    <div className={style.informacoes}>
                        <div className={style.tituloP}>
                                <h2>Hidratante Labial <br /> Carmed Barbie 65 <br /> Pink 10g</h2>
                            </div>
                            <div className={style.precoOriginal}>
                                <p>R$49,90</p>
                                <Image className={style.traco} src={Traco} alt="traço" />
                            </div>
                            <div className={style.desconto}>
                                <h1>R$ 29,90</h1>
                            </div>
                            <div className={style.parcela}>
                                <p>ou 3x de 9,99</p>
                            </div>
                        </div>
                </div>

                <div className={style.produto}>
                    <Image className={style.imagem} src={Produto} alt="hidratante" />

                    <div className={style.informacoes}>
                        <div className={style.tituloP}>
                                <h2>Hidratante Labial <br /> Carmed Barbie 65 <br /> Pink 10g</h2>
                            </div>
                            <div className={style.precoOriginal}>
                                <p>R$49,90</p>
                                <Image className={style.traco} src={Traco} alt="traço" />
                            </div>
                            <div className={style.desconto}>
                                <h1>R$ 29,90</h1>
                            </div>
                            <div className={style.parcela}>
                                <p>ou 3x de 9,99</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}