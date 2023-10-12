import Menu from '../../components/Menu/Menu.js';


export default function Home() {
  return (
    <>
      <Menu />
      <main className="main">
        <section className="welcome-message">
            <span className="">👋 Olá, sou o</span>
            <span>Gabriel Ronny</span>
            <span>Data Engineer + Backend Developer</span>
            <span>Desenvolvendo soluções para o seu negócio</span>
          {/* <img src={CoffeImage} alt="xícara com café" /> */}
        </section>
      </main>
    </>
  );
}
