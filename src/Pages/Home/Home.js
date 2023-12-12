// import Menu from '../../components/Menu/Menu.js';

import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="welcome-message">
          <div className="content-message">
            <span className="">👋 Olá, sou o</span>
            <span>Gabriel Ronny</span>
            <span>Engenheiro de Dados</span>
            <span>Desenvolvendo soluções para o seu negócio</span>
          </div>
          <div className="links">
            <Link to="https://www.linkedin.com/in/gabrielronny/">
              <BiLogoLinkedin size={30} color='#FFFF'/>
            </Link>
            <Link to="https://www.github.com/gabrielronny/">
              <BiLogoGithub size={30} color='#FFFF'/>
            </Link>
          </div>

          {/* <img src={CoffeImage} alt="xícara com café" /> */}
        </section>
      </main>
    </>
  );
}
