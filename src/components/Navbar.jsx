import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="barra">
      <div className="barra">
        Pizzería Mamma Mía!
        <button className="botonesBarra espaciado">🍕 Home</button>
        <button className="botonesBarra espaciado">
          {token === true ? "🔒 Logout" : "🔐 Login"}
        </button>
        <button className="botonesBarra espaciado">
          {token === true ? "🔓 Profile" : "🔐 Register"}
        </button>
      </div>
      <div>
        <button className="botonTotal">
          🛒 Total:${total.toLocaleString("es-CL")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
