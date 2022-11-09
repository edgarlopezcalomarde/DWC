//Este ejercicio me ha gustado

const select = document.querySelector("#lista")
const btnBorrarTodos = document.querySelector("#btnBorrar")
const btnBorrarUno = document.querySelector("#btnBorrarUno")


btnBorrarTodos.addEventListener("click", ()=>{
    select.childNodes.forEach(item =>{
        select.remove(item)
    })
})


btnBorrarUno.addEventListener("click", ()=>{ select.remove(0)})