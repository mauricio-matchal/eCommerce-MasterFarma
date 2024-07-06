import style from "./kit.module.css";
import Image from "next/image";
import Kits from "../.././public/kit.svg";

export default function Kit(){
    return(
        <div className={style.kit}>
            <div className={style.titulo}>
                <h1>Compre junto</h1>
            </div>

            <div className={style.elemento}>
                <div className={style.kits}>
                    <Image className={style.imagem} src={Kits} alt="" />
                </div>

                <div className={style.kits}>
                    <Image className={style.imagem} src={Kits} alt="" />
                </div>

                <div className={style.kits}>
                    <Image className={style.imagem} src={Kits} alt="" />
                </div>
                
            </div>
        </div>
    )
}