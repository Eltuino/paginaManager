//Importa el evento click, el cual controla todos los clicks en los botones. La funcion list data sirve para enlistar los productos, pues solicita los datos en los productos en la base de datos y los trae a la tabla.
import eventoClick from "./eventoClick.js"
import listData from "./menu.js"
const d = document
document.addEventListener("DOMContentLoaded",async()=>{       //DOMcontentloaded = apenas cargue la pagina ejecuta estas dos funciones
    await listData()
    await eventoClick()
})