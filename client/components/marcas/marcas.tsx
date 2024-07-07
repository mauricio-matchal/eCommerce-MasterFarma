import style from "./marcas.module.css";
import Image from "next/image";
import Marca from "../../public/marca.svg";

export default function Marcas(){
    return(
        <div className={style.marcas}>
            <div className={style.titulo}>
                <h1>Nossas marcas prediletas</h1>
            </div>

            <div className={style.elemento}>

                <div className={style.parte1}>
                    <div className={style.marca}>
                        <Image className={style.imagem} src={Marca} alt="" />
                    </div>
                    <div className={style.marca}>
                        <Image className={style.imagem} src={Marca} alt="" />
                    </div>
                </div>

                <div className={style.parte1}>
                    <div className={style.marca}>
                        <Image className={style.imagem} src={Marca} alt="" />
                    </div>
                    <div className={style.marca}>
                        <Image className={style.imagem} src={Marca} alt="" />
                    </div>
                </div>  
        </div> 
    </div>
    )
}