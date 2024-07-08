import style from "./ofertas.module.css";
import Image from "next/image";
import Hidratante from "../../public/hidratante.svg";
import Traco from "../../public/traco.svg";
import Rolagem from "../../components/indicadorNav/rolagemO";

interface OfertasProps {
    tituloSecao: string;
}

export default function Ofertas({ tituloSecao }: OfertasProps) {
    return (
        <div className={style.ofertas}>

            <div className={style.titOferta}>
                <h1>{tituloSecao}</h1>
            </div>

            <div className={style.produtos}>
                <div className={style.produto}>
                    <Image className={style.imagem} src={Hidratante} alt="hidratante" />
                    <div className={style.titulo}>
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

                <div className={style.produto}>
                    <Image className={style.imagem} src={Hidratante} alt="hidratante" />
                    <div className={style.titulo}>
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

                <div className={style.produto}>
                    <Image className={style.imagem} src={Hidratante} alt="hidratante" />
                    <div className={style.titulo}>
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

                <div className={style.produto}>
                    <Image className={style.imagem} src={Hidratante} alt="hidratante" />
                    <div className={style.titulo}>
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

            <div className={style.rolagem}>
                <Rolagem/>
            </div>
            
        </div>
    )
}
