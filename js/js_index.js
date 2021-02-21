function first(){
    document.getElementById("zakon__time_header").innerHTML = "Перший закон Менделя"
    document.getElementById("zakon__first").className = "block"
    document.getElementById("zakon__second").className = "none"
    document.getElementById("zakon__third").className = "none"
    document.getElementById("all_infa").className = "block"
}
function second(){
    document.getElementById("zakon__time_header").innerHTML = "Другий закон Менделя"
    document.getElementById("zakon__first").className = "none"
    document.getElementById("zakon__second").className = "block"
    document.getElementById("zakon__third").className = "none"
    document.getElementById("all_infa").className = "block"
}
function third(){
    document.getElementById("zakon__time_header").innerHTML = "Третій закон Менделя"
    document.getElementById("zakon__first").className = "none"
    document.getElementById("zakon__second").className = "none"
    document.getElementById("zakon__third").className = "block"
    document.getElementById("all_infa").className = "block"
}