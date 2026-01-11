import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const CardPizza = ({ name, desc, price, ingredients, img }) => {
  return (
    <Card className="pizzas" style={{ width: "23rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className="centrado">🍕 Ingredientes:</p>
          <div className="listaIngredientes">
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <p className="centrado precio">
          Precio: ${price.toLocaleString("es-CL")}
        </p>

        <div className="botonesSeparados">
          <Button variant="light" className="botonVermas">
            Ver más 👀
          </Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
