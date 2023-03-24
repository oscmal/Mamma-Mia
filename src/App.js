import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PizzasProvider } from "./DataContext";


import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import Descripcion from "./Views/Descripcion";
import Carrito from "./Views/Carrito";



const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
       <PizzasProvider>
            <Navbar />
            <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/pizza/:id" element={<Descripcion />} />
                  <Route path="/carrito/" element={<Carrito />} />
                  <Route path="*" element={<NotFound />} />
            </Routes>
       </PizzasProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
