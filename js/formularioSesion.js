 // Para que javascript controle los elementos del DOM (Lo escrito en html)
const d= document

const $form= d.querySelector(".sesion")

d.addEventListener("submit", async e=>{
  if(e.target==$form){
    e.preventDefault()
    let rest = await fetch("php/sesion.php", {
      body: new FormData($form), 
      method: "POST"
    })
    let message = await rest.json()
    console.log(message)
    if(message.length == 0){
      alert("Usuario incorrecto")
    }
    else{
      location.href = "general.html"
    }

  }


})