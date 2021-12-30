// nav responsive

const icon = document.querySelector(".icon");

const navMenu = document.querySelector(".nav")
const navUl = document.querySelector(".nav-ul");
const logo = document.querySelector(".logo-header");

const body = document.querySelector(".body")

icon.addEventListener("click", ()=> {
    navMenu.classList.toggle("cien");
    navUl.classList.toggle("activado");
    logo.classList.toggle("none");

    body.classList.toggle("noScroll");
    
})



// cursos - guia

const listaDeLi = document.querySelectorAll(".li-guia-cursos")
const listaDeCursos = document.querySelectorAll(".contenedor-curso")

// Recorro todos los li
listaDeLi.forEach(( cadaLi, i) =>{
    // Asignando el evento click a cadaLi
    listaDeLi[i].addEventListener("click", ()=>{

        // Volvemos a recorrer todos los .li
        listaDeLi.forEach(( cadaLi, i) =>{ 
            // quitando la clase active de cada li
            listaDeLi[i].classList.remove("active")
            // quitando la clase active de cada curso
            listaDeCursos[i].classList.remove("active")
        })

        //En el li que hagamos click, le agregamos la clase active
        listaDeLi[i].classList.add("active")
        // En el curso con la misma posición, se le agrega la clase active
        listaDeCursos[i].classList.add("active")

    })
}
)

