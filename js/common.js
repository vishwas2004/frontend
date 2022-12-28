let mobilesearchbar = document.getElementById("mobilesearchbar");
let searchbar =document.getElementById("searchbar");
let searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click" ,()=>{
    searchbar.classList.remove("close");
    searchbtn.classList.add("close");
});