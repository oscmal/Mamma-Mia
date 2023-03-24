import { useContext } from "react";
import { formatoNumero } from "../formatoNumero";
import PizzasContext from "../DataContext"






const Carrito = ( ) => {
    const { cart, increment, decrement } = useContext(PizzasContext)
    const total = cart.reduce ((a, { count, price }) => a + price * count, 0)

    return ( 
        <>
        <div className="carrito p-5">
            <div className="descripcion bg-lidht w-t5 m-auto p-5">
                <h5>Descrpcion de la orden</h5>
                <div className="p-3 bg-white">
                    {cart.map((producto, index) =>(
                        <div>
                        <div key={index} className="d-flex justify-content-between py-2">
                            <div className="d-flex justify-content-between aligh-items-center">
                                <img src={producto.img} width="50" alt=""/>
                                <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                            </div>

                            <div className="d-flex justify-content-end aligh-items-center">
                                <h6 className="mb-0 p-2 text-success">
                                    ${formatoNumero(producto.price * producto.count)}
                                </h6>
                                <button className="btn btn-danger" onClick={() =>decrement(index)}>-</button>
                                <b className="mx-2">{producto.count}</b>
                                <button className="btn btn-primary" onClick={() => increment(index)}>+</button>
                            </div>
                        </div>
                            <hr/>
                            </div>

                    ))}
                    <h2 className="my-4">total: ${formatoNumero(total)}</h2>
                    <button className="btn btn-success">Pagar</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Carrito;