import Button from "react-bootstrap/esm/Button";
import { pizzaCart } from "../assets/pizzas";

const Cart = () => {
  return (
    <div className="carro">
      <div className="contenedorDetalle">
        <div>
          <p>Detalles del pedido:</p>
        </div>
        <div className="Detalle">
          {pizzaCart.map((pizza) => {
            return (
              <div className="pizzaCarrito" key={pizza.id}>
                <div>
                  <img src={pizza.img} width="50" height="50" /> {pizza.name}
                </div>
                <div>
                  ${pizza.price.toLocaleString("es-CL")} <Button>-</Button>{" "}
                  {pizza.count} <Button>+</Button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ margin: "1rem" }}>Total: $: XXXXX</div>
        <div style={{ margin: "1rem" }}>
          <Button>Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
