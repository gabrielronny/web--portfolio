import './Reset.css';
import './App.css';
import Menu from './components/menu/Menu';
import CoffeImage from './assets/img/coffe.svg';


function App() {
  return (
    <div className="App">
      <Menu />
      <main className="main">
        <section className="welcome-message">
          <div className="message">
            <span className="">Olá, sou o</span>
            <span>Gabriel Ronny</span>
            <span>Data Engineer + Backend Developer</span>
          </div>
          <img src={CoffeImage} alt="cícara com café" />
        </section>
      </main>
    </div>
  );
}

export default App;
