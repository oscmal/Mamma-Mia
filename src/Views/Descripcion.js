import { useContext } from "react";
import { useParams } from "react-router-dom";
import PizzasContext from "../DataContext"





const Descripcion = ( ) => {
    const { pizzas, addToCart } = useContext(PizzasContext)
    const { id } = useParams()

    const pizzaDescripcion = pizzas.find((pizza) => pizza.id === id);
    
    return ( 
        <>
            <div className="container mt-5">
                <div className="card mb-3 estilos">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={pizzaDescripcion.img} className ="img-fluid estilos rouded-start" alt={pizzaDescripcion.name}/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">{pizzaDescripcion.name}</h5>
                                <p className="card-text">{pizzaDescripcion.desc}</p>
                                <ul>
                                    {pizzaDescripcion.ingredients?.map((ingredient, i) =>(
                                        <li key={i}>
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-around">
                                    <h4>Precio: ${pizzaDescripcion.price}</h4>
                                    <button className="btn btn-danger"
                                    onClick={() => addToCart(pizzaDescripcion)}>
                                        Añadir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Descripcion;