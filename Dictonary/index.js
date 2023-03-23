const inputEl = document.getElementById("input");
const infoEl = document.getElementById("info");
const meaningEl = document.getElementById("meaning");
const titleEl = document.getElementById("title");
const meanEl = document.getElementById("mean");
const audioEl = document.getElementById("audio");

async function fetchApi(word){
    try {
        infoEl.style.display = "block";
        meaningEl.style.display = "none";
        infoEl.innerText = `Searchig the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());
        if(result.title){
            infoEl.style.display = "none";
            meaningEl.style.display = "block";
            titleEl.innerText = word;
            meanEl.innerText = "N/A";
            audioEl.style.display = "none";

        }
        else{
        infoEl.style.display = "none";
        meaningEl.style.display = "block";
        audioEl.style.display = "inline-flex";
        titleEl.innerText = result[0].word;
        meanEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
        }
        
    } catch (error) {
        console.log(error)
        infoEl.innerText = `Error, Try again.`
        
    }
   
    console.log(result);
}


inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchApi(e.target.value);

    }
})