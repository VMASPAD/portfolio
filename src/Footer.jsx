import "./footer.css"
export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Menu</span>
          <a className="link link-hover" href="#welcome">Sobre Mi</a>
          <a className="link link-hover" href="#habilitiess">Habilidades</a>
          <a className="link link-hover" href="#Areas">Areas</a>
          <a className="link link-hover" href="#Certificadoss">Certificados</a>
          <a className="link link-hover" href="#Proyectos">Proyectos</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
            <img width="24"
                height="24" src="./src/assets/tik-tok.png"
                className="fill-current"></img>
            </a>
            <a>
            <img width="24"
                height="24" src="./src/assets/instagram.png"
                className="fill-current"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
