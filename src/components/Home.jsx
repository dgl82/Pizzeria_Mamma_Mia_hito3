import CardPizza from "./CardPizza";
import Header from "./Header";
import "./Home.css";
import { pizzas } from "../assets/pizzas";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="contenedor">
        {pizzas.map((pizza) => {
          return (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
