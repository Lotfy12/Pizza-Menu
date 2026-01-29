import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Header className="header" />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {


  return (
    <header className="header footer">
      <h1 style={{}}>Fast React Pizza co</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div>
      <main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
          <React.Fragment>
            <p>
              Amounts Food Locals Love to Eat in Lille. Local dishes in Lille
              offer a window into a unique culinary tradition, a combination of
              Northern France and Belgian, a Flemish blend of sweet and savory
              unlike anywhere else. From delicious sweet fried dough to savory
              and spicy meat stews, food in this town will always keep you
              coming back to try new ...
            </p>

            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
                  <img src={pizza.photoName} alt="Pizza spinaci" />
                  <h3>{pizza.name}</h3>
                  <p>{pizza.ingredients}</p>
                  <span>
                    {pizza.soldOut ? <span>SOLD soldOut</span> : pizza.price}
                  </span>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          "we will stull working on our menu please come later"
        )}

      </main>
    </div>
  );
}



function Footer() {
  const hour = new Date().getHours;
  const openeHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openeHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openeHour={openeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openeHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openeHour }) {
  return (
    <div className="order">
      <p>
        We will be open from {openeHour} to {closeHour}:00. Visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
