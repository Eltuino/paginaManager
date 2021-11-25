import filterData from "./buscador.js";
import editData from "./editProducto.js";
import insertData from "./ingresoProductos.js";
import myConfirm from "./myConfirm.js";
export default function eventoClick() {
    const d = document
    const $form = document.getElementById("send-form")

    //Agegar pruducto
    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();

            if ($form.id.dataset.id) {
                editData()

            } else {
                insertData()
            }
        }
    })

    //Editar producto
    d.addEventListener("click", e => {
        if (e.target.matches(".edit")) {
            $form.id.dataset.id = e.target.dataset.id;
            $form.id.value = e.target.dataset.id;
            $form.name.value = e.target.dataset.name;
            $form.stock.value = e.target.dataset.stock;
            $form.precio.value = e.target.dataset.precio;
            $form.selectMarca.value = e.target.dataset.marca;
            $form.categoria.value = e.target.dataset.categoria;

        }
    })

    //Eliminar pruducto
    d.addEventListener("click", async (e) => {
        if (e.target.matches(".delete")) {
            // let response = confirm("¿Estás seguro de querer eliminar este registro?");
            let response = await myConfirm("¿Estás seguro de querer eliminar este registro?", "registro")
            
            if (response) {
                fetch("php/eliminarProducto.php", {
                    method: "POST",
                    body: e.target.dataset.id,
                })
                    .then((rest) => {
                        return rest.json();
                    })
                    .then((json) => {
                        console.log(json);
                        location.reload();
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                Swal.fire('Acción cancelada')
            }
        }
    });

    const $inputSearch = d.querySelector(".input-search")
    //Buscador
    d.addEventListener("click", e => {
        if (e.target.matches(".boton-buscar")) {
            filterData($inputSearch.value)
        }
    })

    //Teclado
    d.addEventListener("keyup", e => {
        if (e.target === $inputSearch) {
            if ($inputSearch.value === "") location.reload()
        }
    })

}

