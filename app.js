//zmiana daty
const date=document.getElementById('date');
date.innerHTML=new Date().getFullYear();
//zamykanie linków na podstawie wysokości
const navToggle=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");

navToggle.addEventListener("click",function(){
    linksContainer.classList.toggle("show-links");
})