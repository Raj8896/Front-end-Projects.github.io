const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

const apikey ="I5MyJN8c6L263lOgYBeCcw==zXLq5wHlIbQulWfD";
const options ={
    method: "GET",
    headers: {
        "X-Api-Key": apikey,

    },
};
 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

btn.addEventListener("click",async function getjoke(){
    try {
        joke.innerHTML = "Loading...";
    btn.disabled = true;
    btn.innerHTML = "Wait";
    const response = await fetch(apiURL,options);
    const data = await response.json();
    btn.disabled = false;
    btn.innerHTML = "Tell me a Joke";

    joke.innerHTML = data[0].joke;
        
    } catch (error) {
        joke.innerHTML = "Sorry,Try Again";
        btn.disabled = false;
        btn.innerHTML = "Tell me a Joke";
    }
    
});