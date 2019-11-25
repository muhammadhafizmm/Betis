// js for materi and polygon
var x = document.getElementsByClassName("ilmu");
var y = document.getElementsByClassName("polygon")
function openIlmu(n){
    x[n-1].classList.toggle("tampil");
    y[n-1].classList.toggle("muter");
}
// js for navbar dropDown
function openMenu() {
    document.getElementById("dropDown").classList.toggle("show");
    }