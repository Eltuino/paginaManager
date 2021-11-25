const editData = async () => {
    // $loader.style.display = "block"
    const $form = document.getElementById("send-form")
    try {
        let rest = await fetch("php/editProducto.php", {
            method: "POST",
            body: new FormData($form)
        })

        let message = await rest.json();
        console.log(message)
        location.reload()
    } catch (e) {
        console.log(e)
    }
    // $loader.style.display = "none"
}
export default editData
