document.querySelector('.error-message').style.display = "none"

document.querySelector('form').addEventListener("input", (e)=>{
    e.preventDefault();
    //console.log("Ivestas textas");

    let query = document.querySelector('input').value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then((response)=>data=response.json())
    // .then((data)=>console.log(data))
    .then((data)=>{
        console.log(data)  
        if (data.total === 0) {
            // Jei nėra rezultatų, rodyti klaidos pranešimą
            document.querySelector('.error-message').style.display = "block";
        } else {
            document.querySelector('.error-message').style.display = "none";
            document.querySelector("#jokes").innerHTML = ''; // Išvalyti turinį

        const jokes = data.result.map(jokeBlock => {
            // Random skaiciaus funkcija
            const colorNumber = () => Math.floor(Math.random() * 255);
            // Random spalva
            const randomColor = `rgb(${colorNumber()}, ${colorNumber()}, ${colorNumber()})`;
            // Sukuriami div elementai
            return `
            <div class="col" style="background-color: ${randomColor};">${jokeBlock.value}</div>
            `
        }).join('');  // Panaikina kablelius
        document.querySelector("#jokes").insertAdjacentHTML('afterbegin', jokes);
        }
})
});