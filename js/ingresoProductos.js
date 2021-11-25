const insertData = async () => {
    const $form = document.getElementById("send-form")
    // $loader.style.display = "block"
    try {
        let rest = await fetch("php/insertarDatos.php", {
            method: "POST",
            body: new FormData($form)
        })

        let message = await rest.json();
        console.log(message)
        location.reload();
    } catch (e) {
        console.log(e)
    }
    // $loader.style.display = "none"
}
export default insertData