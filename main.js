const btn = document.getElementById("burger-btn")
const nav = document.getElementById("nav-id")

// visibili-on

btn.addEventListener("click", function(){
    if(nav.classList.contains("visibili-on")) {
        nav.classList.remove("visibili-on")} 
    else {nav.classList.add("visibili-on")}
})

document.addEventListener("click", function(e){
    if(e.target.closest("nav") || e.target.closest("button") === btn) return
    nav.classList.remove("visibili-on")
})