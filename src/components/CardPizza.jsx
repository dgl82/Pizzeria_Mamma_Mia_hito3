import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className="centrado">Ingredientes:</p>
          <div className="listaIngredientes">
            🍕
            {ingredients.map((ingredient) => (
              <p> {ingredient},</p>
            ))}
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
