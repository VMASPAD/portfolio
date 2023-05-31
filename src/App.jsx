import profileMain from "./assets/profileMain.jpg";
import Certificate from "./Certificate";
import Habilities from "./Habilities";
import "./App.css";
import "./index.css";
import Proyects from "./Proyects";
import Present from "./Present";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Present></Present>
      <main>
        <div className="presentationMain">
          <img className="profileMain" src={profileMain}></img>
          <h4 className="tittleName">Soy Tomas Avila</h4>
          <h3 className="descriptionName">
            Soy un FullStack Junior de tipo M.E.R.N. Soy una persona muy
            divertida, me gusta trabajar en equipo, estar en contacto con el
            equipo para llevar a cabo el proyecto. Me encanta descubrir e
            inventar soluciones para los problemas que pueda llegar a tener el
            usuario.
          </h3>
        </div>
        <h4 className="habilities">Habilidades</h4>
        <h6 className="subDivision">SemiSenior</h6>

        <Habilities></Habilities>

        <Proyects></Proyects>

        <section style={{position:"relative"}}>
          <Certificate></Certificate>
        </section>
      </main>
      <footer className="contactFooter">
        <Contact></Contact>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
