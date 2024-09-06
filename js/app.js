// Get element 
let scrolltophedar = document.querySelector("header")
let menu = document.querySelector(".menu i")
let navbar = document.querySelector("nav")

// start headerscroll fixed 
menu.addEventListener("click", menuhedin)
function menuhedin() {
    menu.classList.toggle("fa-xmark")
    navbar.classList.toggle("hedin")
}

// Event scrool 
document.addEventListener("scroll",headerscrool)
// headerscroll fixed 
function headerscrool() {
        let scrollt = document.documentElement.scrollTop;
        if (scrollt >= 80) {
            scrolltophedar.style.position = "fixed"
            scrolltophedar.style.boxShadow = "0px 0px 40px rgb(227,228,237,0.37)"
            scrolltophedar.style.backgroundColor = "black"
            scrolltophedar.style.transition = "0.4s"
            // console.log(scrollt)
        } else if (scrollt<= 55){
            scrolltophedar.style.position = "relative"
            scrolltophedar.style.backgroundColor = "transparent"
    }
}

// page indicator 
let scrolling = document.querySelector(".scroling")
let scrolheit = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll",widthscroll)
function widthscroll() {
    let sctop = document.documentElement.scrollTop
    let scling = (sctop / scrolheit) *(100)
    scrolling.style.width = `${scling}%`
}

// cards 
let cards = document.querySelector(".containrs_card")
let firstCardewidth = cards.querySelector(".card_article").offsetWidth

let arrowbutn = document.querySelectorAll(".container i")
arrowbutn.forEach(btn => {
    btn.addEventListener("click", () => {
        cards.scrollLeft += btn.id == "left" ? -firstCardewidth : firstCardewidth
    })
})

let isdragin = false,startscrollleft ,startx 
//mousedown
function drignsselection (ele) {
    isdragin = true
    cards.classList.add("dragin")
    startx = ele.pageX
    startscrollleft = cards.scrollLeft 
}
// mousemove 
function draging(ele) {
    if(!isdragin) return
    cards.scrollLeft = startscrollleft -(ele.pageX - startx)
}
// mouseup
function dragnstop() {
    isdragin = false
    cards.classList.remove("dragin")
}

cards.addEventListener("mousemove",draging)
document.addEventListener("mouseup",dragnstop)
cards.addEventListener("mousedown", drignsselection)


//Increase the number at the section
let box = document.querySelectorAll(".conent_namber .num")
let section = document.querySelector(".boxing")
let startd = false

window.addEventListener("scroll",repetscroll)
function repetscroll() {
    if (window.scrollY >= section.offsetTop) {
        if (!startd) {
            box.forEach((ele) => {
                startcontent(ele);
            });
        }
        startd = true;
    }
}
function startcontent(ele) {
   let goal = ele.dataset.goal
    let time = setInterval(() => {
        ele.textContent++
        if (ele.textContent === goal) {
            clearInterval(time)
        }
    },100 /goal)
}