

const btnRandom = document.querySelector(".btnRandom")
const boxImg = document.querySelector(".img-box")
const containerImgs = document.querySelector(".imgs")
const inputNoImgs = document.querySelector(".noimg")

const loadImage = (img) =>{
    let xhttp = new XMLHttpRequest()
    xhttp.addEventListener("readystatechange", (e)=>{
        if(e.target.readyState ==4 && e.target.status == 200){
            img.src = e.target.responseURL
        }

       
    })

    xhttp.open("GET","https://random.imagecdn.app/500/500",true)
    xhttp.send();
}


const loadImages = (quantity) =>{

    const fragment = document.createDocumentFragment()

    for(let i =0; i<quantity; i++){
        const img = document.createElement("img")
        loadImage(img)
        fragment.appendChild(img)
     
     
    }

    containerImgs.appendChild(fragment)
}


btnRandom.addEventListener("click", ()=>{
    loadImage(boxImg)
})

loadImage(boxImg)