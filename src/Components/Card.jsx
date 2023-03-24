import { useContext } from "react";
import PizzasContext from "../DataContext";
import { useNavigate } from "react-router-dom";
import { formatoNumero} from "../formatoNumero"

import "../styles/card.css"

const Card = ( ) => {
    const { pizzas, addToCart} = useContext (PizzasContext);
    const navigate = useNavigate();
    if (pizzas.length === 0) {
        return <h2 className="text-center text-dark pb-3">
            No hay Pizzas
        </h2>;
      }
    return (
        <>
            {pizzas.map((pizza) => (
                <div key={pizza.id} className="col col-xs-12 col-sm-6">
                    <div className="card bg-card">
                        <img className="card-img-top" src= {pizza.img} alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-capitaliza">pizza {pizza.name} </h4>
                            <hr/>
                            <p className="card-text">
                                <b>Ingredientes</b>
                            </p>

                            <ul>
                                {pizza.ingredients.map((ingrediente, index) => (
                                    <li key={index}>🍕{ingrediente}</li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="text-center text-dark pb-3">
                            Precio: ${formatoNumero(pizza.price)}
                        </h2>

                        <div className="d-flex justify-content-around mb-4">
                            <button
                            to={`/pizza/${pizza.id}`} 
                            className="btn btn-info text-white"
                            onClick={() => navigate(`/pizza/${pizza.id}`)} >
                                Ver Más 👀 
                            </button>

                            <button className="btn btn-danger bg-boton"
                            onClick={() => addToCart(pizza)} >
                                Añadir
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card