import html5 from "./assets/html5.png"
import js from "./assets/js.png"
import css from "./assets/css-3.png"
import nodejs from "./assets/nodo-js.png"
import python from "./assets/piton.png"

import reactimg from "./assets/react.png"
import electronimg from "./assets/electron.png"
import servidorimg from "./assets/servidor.png"
import nestimg from "./assets/logo-small.png"
import nextimg from "./assets/next.png"
import mongodbimg from "./assets/mongodb.png"

function Habilities() {
    
        return (
            <>
                <h4 className='habilities' id="habilitiess">Habilidades</h4>
                <h6 className='subDivision'>SemiSenior</h6>
                
                <img className='jsHabilities'     src={js}></img>
                <h6 className='jsHabilitiesText'>JavaScript</h6>

                <img className='html5Habilities'  src={html5}></img>
                <h6 className='html5HabilitiesText'>HTML</h6>

                <img className='cssHabilities'    src={css}></img>
                <h6 className='cssHabilitiesText'>CSS</h6>

                <img className='nodejsHabilities' src={nodejs}></img>
                <h6 className='nodejsHabilitiesText'>Node Js</h6>

                <img className='pythonHabilities' src={python}></img>
                <h6 className='pythonHabilitiesText'>Python</h6>

                <h6 className='subDivision2'>Junior</h6>

                <img className='reactHabilitiesJR'    src={reactimg}></img>
                <h6 className='infoIcons reactjsHabilitiesText'>React Js</h6>

                <img className='electronHabilitiesJR' src={electronimg}></img>
                <h6 className='infoIcons electronjsHabilitiesText'>Electron Js</h6>

                <img className='expressHabilitiesJR'  src={servidorimg}></img>
                <h6 className='infoIcons expressjsHabilitiesText'>Express Js</h6>

                <img className='nestjsHabilitiesJR'   src={nestimg}></img>
                <h6 className='infoIcons nestjsHabilitiesText'>Nest Js</h6>

                <img className='nextjsHabilitiesJR'   src={nextimg}></img>
                <h6 className='infoIcons nextjsHabilitiesText'>Next Js</h6>

                <img className='mongodbHabilitiesJR'  src={mongodbimg}></img>
                <h6 className='infoIcons mongododbHabilitiesText'>MongoDB</h6>

                
                <div className='cartPorcentaje card w-100 bg-primary text-primary-content' id="Areas">
                    <h5 className='tittlePorcentaje'>Convinación en areas especificas.</h5>
                    <h6 className='tittleFrontend'>FrontEnd (Habilidad en diseño y creación de  interfaces)</h6>
                    <h6 className='porcentaje porcentajeFrontend'>75%</h6>

                    <progress className='lineFrontend progress-accent bg-primary-content progress h-12 w-5/6' value="75" max="100"></progress>
                    <h6 className='tittleBacktend'>BackEnd (Habilidad en creación y manejo de base de datos o partes técnicas)</h6>
                    <h6 className='porcentaje porcentajeBackend'>45%</h6>
                    <progress className='lineBackend  progress-accent bg-primary-content progress h-12 w-5/6'  value="45" max="100"></progress>

                    <h6 className='tittleFullStack'>FullStack (Capacidad de fusionar ambas habilidades en proyectos)</h6>
                    <progress className='lineFullStack  progress-accent bg-primary-content progress h-12 w-5/6'  value="33" max="100"></progress>
                    <h6 className='porcentaje porcentajeFullStack'>75%</h6>
                </div>
        </>
    );

}

export default Habilities;