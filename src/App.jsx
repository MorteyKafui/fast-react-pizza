/* eslint-disable react/prop-types */
import pizzaData from "../public/data";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map(pizza => (
          <Pizza {...pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};

const Pizza = ({ name, photoName, ingredients, price }) => {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  return (
    <footer>
      {new Date().toLocaleTimeString()} We&apos;re currently open!
    </footer>
  );
};

export default App;
