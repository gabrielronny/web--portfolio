import './Menu.css';

function Menu() {
  return (
    <header className="menu">
      <div className="container">
        <div className="logo">
          <span>Gabriel Ronny</span>
        </div>
      </div>
      <ul className="itens">
        <li>Quem Sou</li>
        <li>Minha Experiência</li>
        <li>Projetos</li>
        <li>Baixar CV</li>
      </ul>
    </header>
  );
}

export default Menu;
