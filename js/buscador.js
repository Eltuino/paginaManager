const filterData = async (busqueda) => {
    const d = document
    const $fragment = d.createDocumentFragment();
    const $template = d.getElementById("table-list").content;
    const $table = d.querySelector(".tablaProductos");
    // $loader.style.display = "block"

    try {
        let rest = await fetch("php/buscador.php", {
            method: "POST",
            body: busqueda
        })

        let message = await rest.json();
        console.log(message)
        if (message.length === 0) {
            alert("No se encontraron datos")
        } else {
            message.forEach(el => {
                // $template.querySelector(".td-id").textContent = el.prod_id
                // $template.querySelector(".edit").dataset.id = el.prod_id
                // $template.querySelector(".delete").dataset.id = el.prod_id
                // $template.querySelector(".td-nombre").textContent = el.nombre_prod
                // $template.querySelector(".edit").dataset.name = el.nombre_prod
                // $template.querySelector(".td-descripcion").textContent = el.descripcion_prod
                // $template.querySelector(".edit").dataset.description = el.descripcion_prod
                // $template.querySelector(".td-tipo-producto").textContent = el.tipo_prod
                // $template.querySelector(".edit").dataset.typeProduct = el.tipo_prod
                // $template.querySelector(".td-marca").textContent = el.marca_marca_id
                // $template.querySelector(".edit").dataset.marca = el.marca_marca_id
                // $template.querySelector(".td-stock").textContent = el.stock
                // $template.querySelector(".edit").dataset.stock = el.stock
                // $template.querySelector(".td-precio").textContent = el.precio_unitario
                // $template.querySelector(".edit").dataset.precio = el.precio_unitario
                // $template.querySelector(".td-id").textContent = el.idProducto
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
                $template.querySelector(".td-categoria").textContent = el.Categoria_idCategoria == 1 ? "Vegetal" : "Fruta"
                if (el.Categoria_idCategoria == 3 || el.Categoria_idCategoria == 4 ) {
                    $template.querySelector(".td-categoria").textContent = el.Categoria_idCategoria == 3 ? "Enlatado" : "Lacteo"
                }
                $template.querySelector(".edit").dataset.categoria = el.Categoria_idCategoria
                let $clone = d.importNode($template, true);
                let $idea = d.querySelectorAll(".tr-template")
                $idea.forEach(el => {
                    // el.style.opacity = "0"
                    // el.style.order = "0"
                    el.style.display = "none"
                })
                $fragment.appendChild($clone)
            })
            $table.appendChild($fragment)
        }
    } catch (e) {
        console.log(e)
    }
    // $loader.style.display = "none"
}
export default filterData
