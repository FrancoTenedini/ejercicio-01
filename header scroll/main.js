const parallax = document.querySelector(".imagen-principal")
window.addEventListener("scroll", ()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    parallax.style.backgroundPositionY = scrollTop * 1 + "px"
})

let lastScrollTop = 0
let navbar = document.querySelector(".header")



window.addEventListener("scroll", ()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
/*     console.log(scrollTop) */
   /*  console.log(scrollTop) */
    if(scrollTop > lastScrollTop){
        navbar.style.top = "-75px"
    }else{
        setTimeout(()=>{
            navbar.style.top = "0px"
        }, 500)
       
    }
    lastScrollTop = scrollTop
})

const btn = document.querySelector("#btn")
const span = document.querySelector("span")
console.log(btn.textContent)
if(btn.textContent === "A"){
    console.log("s")
}

let infoMostrada = 0
btn.addEventListener("click", ()=>{
    if(infoMostrada === 0){
        span.className = "no-ocultar"
        infoMostrada = 1
    }else{
        span.className = "ocultar"
        infoMostrada = 0
    }
    
})
 const imagen = document.querySelector(".imagen2")
 const imagen2 = document.querySelector(".imagen3")
console.log(imagen)
let i = 0
window.addEventListener("scroll", () =>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    i = scrollTop * 0.4 + "px"
    imagen.style.transform = "translateY("+ "-" + i+")"; 
})

window.addEventListener("scroll", () =>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    i = scrollTop * 0.7 + "px" 
    imagen2.style.transform = "translateY("+ "-" + i+")"; 
})