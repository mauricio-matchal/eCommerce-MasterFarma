import Image from "next/image";
import style from "./secoes.module.css";
import Remedio from "../../public/medicamentos.svg";
import Bebes from "../../public/bebes.svg";
import Beleza from "../../public/beleza.svg";
import Perfume from "../../public/perfumaria.svg";
import Higiene from "../../public/higiene.svg";
import Suplemento from "../../public/suplementos.svg";
import Rolagem from "../.././components/indicadorNav/rolagemS";


export default function Secoes(){
    return(
        <div className={style.secao}>
            <div className={style.componentes}>
                <div className={style.elemento}>
                    <div className={style.medicamentos}>

                        <div className={style.icone}>
                            <Image className={style.imagem} src={Remedio} alt="remedio"  />
                        </div>
                    </div>
                    <p>Medicamentos</p>
                </div>

                <div className={style.elemento}>
                    <div className={style.suplementos}>
                        
                        <div className={style.icone}>
                            <Image className={style.imagem} src={Suplemento} alt="suplemento"  />
                        </div>
                    </div>
                    <p>Suplementos</p>
                </div>

                <div className={style.elemento}>
                    <div className={style.higiene}>
                    
                        <div className={style.icone}>
                            <Image className={style.imagem} src={Higiene} alt="higiene"  />
                        </div>
                    </div>
                    <p>Higiene</p>
                </div>

                <div className={style.elemento}>
                    <div className={style.beleza}>
                        <div className={style.icone}>
                            <Image className={style.imagem} src={Beleza} alt="beleza"  />
                        </div>
                    </div>
                    <p>Beleza</p>
                </div>

                <div className={style.elemento}>
                    <div className={style.bebes}>
                        <div className={style.icone}>
                            <Image className={style.imagem} src={Bebes} alt="bebes"  />
                        </div>
                    </div>
                    <p>Bebês</p>
                </div>

                <div className={style.elemento}>
                    <div className={style.perfumaria}>
                        <div className={style.icone}>
                            <Image className={style.imagem} src={Perfume} alt="perfume"  />
                        </div>
                    </div>
                    <p>Perfumaria</p> 
                </div>
            </div>

            <div className={style.rolagem}>
                <Rolagem/>
            </div>
            
        </div>
    )
}