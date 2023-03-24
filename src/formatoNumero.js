export const formatoNumero = (price) => {
    if(price != "" ){
        return price.toLocaleString("es-CL")
    }
   return "0"
}