const ratEls = document.querySelectorAll(".rate");

let selecetedRating = "";
const containerEl =document.getElementById("container");
const btnEl = document.getElementById("btn");
ratEls.forEach((ratEl) =>{
    ratEl.addEventListener("click",(event) => {
       removeActive();
       selecetedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click",()=>{
    if(selecetedRating !== ""){
        containerEl.innerHTML = `
        <strong> Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selecetedRating} </strong>
        <p>We will use your feedback to improve our customer support.
        </p> `
    }
})

function removeActive(){
    ratEls.forEach((ratEl)=> {
        ratEl.classList.remove("active");
    });

}