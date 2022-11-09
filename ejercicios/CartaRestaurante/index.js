
const products = [
    {
        id: "1",
        nombre: "Bocadillo de calamares",
        img: "assets/BocadilloCalamares.png",
        precio:7.50
    },
    {
        id: "2",
        nombre: "Bocadillo de lomo y queso",
        img: "assets/BocadilloLomoQueso.png",
        precio:9.50
    },
    {
        id: "3",
        nombre: "Bravas",
        img: "assets/Bravas.png",
        precio:5.50
    }
]

const listaProductos = document.getElementById("listaProductos")

products.forEach(product =>{
    const option = document.createElement("option")
    option.value = product.id

    const img = document.createElement("img")
    img.src = product.img
    img.classList.add("miniature")
    option.appendChild(img)

    option.appendChild(document.createTextNode(product.nombre))
    option.classList.add("product")
    listaProductos.appendChild(option)
})


const foods = document.querySelectorAll(".product")
const preview = document.querySelector(".preview")

foods.forEach(food =>{
    food.addEventListener("mouseover",()=>{
        preview.src = products.find(product => product.id == food.value).img
    })
})

