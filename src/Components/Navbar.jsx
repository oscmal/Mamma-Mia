import { useContext } from "react"
import {Link} from "react-router-dom"
import { formatoNumero } from "../formatoNumero"
import PizzasContext from "../DataContext"


const Navbar = () => {
  console.log("Navbar")
  const { cart } = useContext(PizzasContext)
  const total = cart.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count, 0

  )
  return (
    <div className="navbar text-white py-3 ">
        <div className="container-fluid d-block">
          <div className="d-flex justify-content-between">
            <Link className="seeCarrito" to={"/"} >  
              <h2 className="mb-4">🍕Pizzería Mamma Mia</h2>
            </Link>

            <Link to="/carrito" className="logo-nombre mx-1 py-3 mb-0">
              <h3 className="mb-0 precio-total">🛒Total: ${formatoNumero(total)} </h3>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar