const listData = async () => {
    const d = document
    const $fragment = d.createDocumentFragment();
    const $fragment2 = d.createDocumentFragment();
            const $template = d.getElementById("table-list").content;
            const $table = d.querySelector(".tablaProductos");
            const $table2 = d.querySelector("#tr-table");
            let data = []
            const $template2 = d.getElementById("table-list-high").content;
            // const $topStock = d.querySelector("")
    try {
        let rest = await fetch("php/listaProductos.php", {
            method: "POST"
        })
        let message = await rest.json();
        console.log(message)


        message.forEach(el => {
            $template.querySelector(".td-id").textContent = el.idProducto
            $template.querySelector(".edit").dataset.id = el.idProducto
            $template.querySelector(".delete").dataset.id = el.idProducto
            $template.querySelector(".td-nombre").textContent = el.nombreProducto
            $template.querySelector(".edit").dataset.name = el.nombreProducto
            $template.querySelector(".td-stock").textContent = el.stockProducto
            $template.querySelector(".edit").dataset.stock = el.stockProducto
            $template.querySelector(".td-precio").textContent = el.precioProducto
            $template.querySelector(".edit").dataset.precio = el.precioProducto
            $template.querySelector(".td-marca").textContent = el.marcaProdcuto
            $template.querySelector(".edit").dataset.marca = el.marcaProdcuto
            $template.querySelector(".td-categoria").textContent = el.Categoria_idCategoria == 1 ?"Vegetal" : "Fruta"
            if(el.Categoria_idCategoria == 3 || el.Categoria_idCategoria == 4 ){
                $template.querySelector(".td-categoria").textContent = el.Categoria_idCategoria == 3 ? "Enlatado" : "Lacteo"
            }
            $template.querySelector(".edit").dataset.categoria = el.Categoria_idCategoria
 
            data.push(el)


            let $clone = d.importNode($template, true)
            $fragment.appendChild($clone)
        })


        $table.appendChild($fragment)
        console.log(data)

        data.sort((a,b)=>{


            if(parseInt(a.stockProducto)>parseInt(b.stockProducto)){
                return 1
            }

            if(parseInt(a.stockProducto)<parseInt(b.stockProducto)){
                return -1
            }
            
            return 0
        


        })

        data.forEach(el => {
            $template2.querySelector(".td-id").textContent = el.idProducto
            $template2.querySelector(".td-nombre").textContent = el.nombreProducto
            $template2.querySelector(".td-stock").textContent = el.stockProducto
            $template2.querySelector(".td-marca").textContent = el.marcaProdcuto


            let $clone2 = d.importNode($template2, true)
            $fragment2.appendChild($clone2)
        })
        $table2.appendChild($fragment2)

        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
export default listData    //Aqui exportamos todo lo de arriba para ejecutarla en index.js

