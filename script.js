const text=document.querySelector(".role");
const textLoad=()=>{
    setTimeout(() => {
        text.textContent=" Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent=" Web Developer";
    }, 4000);
     setTimeout(() => {
         text.textContent = " MERN Stack Developer";
     }, 8000);
}


textLoad();
setInterval(textLoad,12000);

