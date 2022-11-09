
let articulos = [
    {
        id:"1",
        nombre: "AMD Ryzen 5 5600G 4.40GHz",
        precio: 158.90,
        unidades:1,
        descripcion: "Cuando cuentas con la arquitectura de procesadores más avanzada del mundo para jugadores y creadores de contenido, las posibilidades son infinitas. Ya sea que juegues los juegos más recientes, diseñes el próximo rascacielos o proceses datos, necesitas un procesador poderoso que pueda dar respuesta a todas estas demandas, y más. Sin lugar a dudas, los procesadores para computadoras de escritorio AMD Ryzen™ serie 5000 elevan el nivel de expectativa para jugadores y artistas por igual.",
        imgurl: "https://thumb.pccomponentes.com/w-530-530/articles/42/422971/1183-amd-ryzen-5-5600g-440ghz.jpg"
    },

    {
        id:"2",
        nombre: "Intel Core i7-13700KF 3.4 GHz Box",
        precio: 509,
        unidades: 1,
        descripcion: "Con un mayor número de núcleos, estos procesadores continúan utilizando la arquitectura híbrida de rendimiento de Intel para optimizar tus videojuegos, creación de contenido y productividad. Aprovecha el mejor ancho de banda de la industria de hasta 16 carriles PCIe 5.03 y memoria DDR5 de hasta 5600 MT/s.4 5 Potencia el rendimiento de tu CPU con una poderosa suite de herramientas de ajuste y overclocking. Disfruta de tus experiencias favoritas en hasta 4 pantallas simultáneas de 4K60 o hasta 8K60 de video HDR con una supresión dinámica de ruido.",
        imgurl: "https://thumb.pccomponentes.com/w-530-530/articles/1057/10573126/1196-intel-core-i7-13700k-34-ghz-box.jpg"
    },

    {
        id:"3",
        nombre: "Corsair Vengeance LPX DDR4 3200 PC4-25600 16GB 2X8GB",
        precio: 66.99,
        unidades: 1,
        descripcion: "La memoria Corsair Vengeance LPX se ha diseñado para overclocking de alto rendimiento. El disipador de calor, fabricado en aluminio puro, permite una disipación térmica más rápida, la placa impresa de ocho capas administra el calor y proporciona una capacidad superior para incrementar el overclocking.",
        imgurl: "https://thumb.pccomponentes.com/w-530-530/articles/26/262822/corsair-vengeance-lpx-ddr4-3200-pc4-25600-16gb-2x8gb-cl16-negro.jpg"
    },
    {
        id:"4",
        nombre: "Asus TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz",
        precio: 203.99,
        unidades: 1,
        descripcion: "TUF Gaming VG249Q1A es una pantalla IPS Full HD (1920 x 1080) de 23,8 pulgadas con una frecuencia de actualización ultrarrápida de 165Hz. Diseñado para jugadores y otros que buscan un juego inmersivo, ofrece algunas especificaciones serias. Pero hay más ... Su función exclusiva ELMB presenta un tiempo de respuesta MPRT de 1 ms y tecnología Adaptive-Sync (FreeSync ™ Premium), para un juego extremadamente fluido sin desgarros ni tartamudeos.",
        imgurl: "https://thumb.pccomponentes.com/w-530-530/articles/38/385506/1166-asus-tuf-gaming-vg249q1a-238-led-ips-fullhd-165hz-freesync-premium.jpg"
    },

    {
        id:"5",
        nombre: "Nox Urano VX 650W 80+ Bronze 120MM PWM",
        precio: 45.99,
        unidades: 1,
        descripcion: "Nuestras exitosas fuentes Urano evolucionan por dentro y por fuera. Nuevas líneas y nuevo aspecto para contener la evolución de una fuente que mejora rendimiento, prestaciones y ofrece multitud de posibilidades para profesionales y entusiastas.",
        imgurl: "https://thumb.pccomponentes.com/w-530-530/articles/14/140444/1.jpg"
    },

    {
        id:"6",
        nombre: "ASUS TUF GAMING B550-PLUS WIFI II",
        precio: 187.53,
        unidades: 1,
        descripcion: "TUF GAMING B550-PLUS WIFI II destila elementos esenciales de la última plataforma AMD y los combina con características listas para jugar y durabilidad comprobada. Diseñada con componentes de grado militar, una solución de energía mejorada y un conjunto completo de opciones de enfriamiento, esta placa base ofrece un rendimiento sólido como una roca con una estabilidad de juego inquebrantable.",
        imgurl: "https://thumb.pccomponentes.com/w-530-530/articles/82/825624/1666-asus-tuf-gaming-b550-plus-wifi-ii.jpg"
    },

    {
        id:"7",
        nombre: "Samsung 870 EVO SSD 2.5 500GB SATA3 Negro",
        precio: 62.24,
        unidades: 1,
        descripcion: "Presentamos el último modelo de la serie SSD más vendida del mundo. El 870 EVO se basa en la tecnología SSD pionera de Samsung, con un rendimiento mejorado y una mayor fiabilidad y compatibilidad para cubrir las necesidades de todos los perfiles, desde creadores de contenido o profesionales de la informática hasta usuarios del día a día.",
        imgurl:"https://thumb.pccomponentes.com/w-530-530/articles/35/350355/1786-samsung-870-qvo-ssd-25-500gb-sata3-negro.jpg"
    }
]


/*Cargar el listado de productos en la pagina*/

const productsContainer = document.querySelector(".products") 
const productsFragment = document.createDocumentFragment()


articulos.forEach(art=>{
    const product = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("p")
    const price = document.createElement("p")
    const btnAddCart = document.createElement("img")


    product.id = art.id
    product.classList.add("product")

    img.src = art.imgurl
    img.classList.add("img")

    name.appendChild(document.createTextNode(art.nombre))
    name.classList.add("productName")

    price.appendChild(document.createTextNode(art.precio+ "€"))
    price.classList.add("product-price")

    btnAddCart.src = "img/cart-plus.svg"
    btnAddCart.classList.add("img--addcart")

    product.appendChild(img)
    product.appendChild(name)
    product.appendChild(price)
    product.appendChild(btnAddCart)
    
    productsFragment.appendChild(product)
})

productsContainer.appendChild(productsFragment)


/*Funcionalidad en el btn del carrito (Desocultar/Ocultar el modal)*/


const modalContainer = document.querySelector(".modal-container")
const btnCart = document.querySelector("#btnCarrito")
const btnClose = document.querySelector(".close")



btnClose.addEventListener("click", () =>{
    modalContainer.classList.toggle("oculto")
})

btnCart.addEventListener("click",()=>{
    modalContainer.classList.toggle("oculto")
})



/*CARRITO*/


class Carrito{

    constructor(){
        this.id = Math.random()
        this.nombre = "John Doe" 
        this._articulos = []
        this.unidades=0
    }

    get articulos() {
        return this._articulos
    }

    addItem(id){
        
        const item = articulos.find(art => art.id == id)

        if(this._articulos.includes(item)){
            this._articulos.find(art => art == item ).unidades += 1
        }else{
            this._articulos.push(item)
        }
    }

    deleteItem(id){
       this._articulos.splice(this._articulos.findIndex(art => art.id == id),1)
    }


    cartItems(){
        const basket = document.querySelector(".basket")
        this.unidades=0
        this._articulos.forEach(art=>{
            this.unidades += art.unidades
        })
        basket.innerHTML = this.unidades
    }

}


const cart = new Carrito()

function  displayItems(){
    const cartContainer = document.querySelector(".cart")
    const table = document.createElement("table")
    const tableFragment = document.createDocumentFragment()
    const totalContainer = document.querySelector(".total")

    cartContainer.innerHTML = ""
    let total = 0

    cart.articulos.forEach(art=>{

        const tr = document.createElement("tr")
        const id = document.createElement("td")
        const name = document.createElement("td")
        const price = document.createElement("td")
        const quantity = document.createElement("td")
        const btn = document.createElement("td")
        const btnRemove = document.createElement("a")

        btnRemove.appendChild(document.createTextNode("Eliminar"))
        btnRemove.classList.add("btnRemove")
        btnRemove.addEventListener("click", ()=>{
            cart.deleteItem(art.id)
            cart.cartItems()
            displayItems()
        })

        id.appendChild(document.createTextNode(art.id))
        name.appendChild(document.createTextNode(art.nombre))
        price.appendChild(document.createTextNode(art.precio))
        quantity.appendChild(document.createTextNode(art.unidades))
        btn.appendChild(btnRemove)

        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(price)
        tr.appendChild(quantity)
        tr.appendChild(btn)

        tableFragment.appendChild(tr)


        

        total+= (art.precio*art.unidades)
    })

    table.appendChild(tableFragment)
    totalContainer.innerHTML = `Total: ${total} €`
    cartContainer.appendChild(table)
   
}



const products = document.querySelector(".products")
products.childNodes.forEach(product =>{
    product.childNodes[3].addEventListener("click", ()=>{
        cart.addItem(product.id)
        cart.cartItems()
        displayItems()
    })
})



/* BUSCADOR */

const buscador = document.querySelector(".search")
buscador.addEventListener("keyup", e=>{

    if (e.target.matches("#search")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".productName").forEach(product =>{
  
            product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?product.parentNode.classList.remove("oculto")
              :product.parentNode.classList.add("oculto")
        })
  
    }
  
})




