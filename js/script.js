document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());
const menuButton=document.querySelector(".menu-button");
const menu=document.querySelector("#primary-menu");
if(menuButton&&menu){menuButton.addEventListener("click",()=>{const expanded=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!expanded));menu.classList.toggle("open",!expanded);});}
const form=document.querySelector(".contact-form");
if(form){form.addEventListener("submit",event=>{event.preventDefault();document.querySelector("#form-status").textContent="Demo only: connect this form to a backend or form service to receive messages.";});}