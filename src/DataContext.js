import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState ([])

    const getPizzas = async () => {
        const { data } = await axios.get("/pizzas.json")
        setPizzas (data);
    };
    useEffect( () => {
        getPizzas();
      }, []);

    const addToCart = ({ id, price, name, img}) => {
        const productoEncontrado = cart.findIndex(
            ({id: productoId}) => productoId === id
            );
        const producto = { id, price, name, img, count: 1 };

        console.log(productoEncontrado);
        if (productoEncontrado >= 0) {
            cart[productoEncontrado].count++;
            setCart([...cart]);
        } else {
            setCart([...cart, producto]);
        }
    };

    const increment = (i) => {
        cart[i].count++;
        setCart([...cart]);
    };

    const decrement = (i) => {
        const { count } = cart[i];
        if (count === 1) {
            cart.splice(i, 1);
        } else {
            cart[i].count--;
        }
        setCart([...cart]);
    };
    console.log(pizzas);
    return (
        <PizzasContext.Provider
          value={{ pizzas, cart, setCart, addToCart, increment, decrement}}>
            {children}
        </PizzasContext.Provider>
    );
};


export { PizzasProvider }

export default PizzasContext