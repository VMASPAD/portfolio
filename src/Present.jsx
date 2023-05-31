
import js from "./assets/js.png"
import html5 from "./assets/html5.png"
import binary from "./assets/codigo-binario.png"
import rec3 from "./assets/Rectangle3.svg"
import rec4 from "./assets/Rectangle4.svg"
import welcomeGif from './assets/Comp-1.gif'

function Present ()  {
    
        return (
            <>
    <header>
      <nav id='inicio'>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 p-2 rounded-box">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#welcome">Sobre Mi</a></li> 
          <li><a href="#Proyectos">Proyectos</a></li>
          <li><a href="#Certificadoss">Certificados</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <img className='rec3' src={rec3}></img>
      <img className='rec4' src={rec4}></img>
      <img className='html5' width={"300px"} height={"400px"} src={html5}></img>
      <img className='binary' src={binary}></img>
      <img className='welcomeGif' src={welcomeGif} alt="Mi GIF animado"></img>
      <img className='js' src={js}></img>

      <h4 className='descriptionHeader' id="welcome">Bienvenido a mi portafolio Dev! Esta pagina web fue construida con React Js, Html  y css. Este proyecto fue creado con el propósito para sepas quien soy.</h4>
    </header>
            </>
        );
    
}

export default Present;