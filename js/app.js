document.querySelector('.error-message').style.display = "none";

document.querySelector('form').addEventListener("input", async (e) => {
    e.preventDefault();

    let query = document.querySelector('input').value;
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const data = await response.json();

        console.log(data);

        if (data.total === 0) {
            // Jei nėra rezultatų, rodyti klaidos pranešimą
            document.querySelector('.error-message').style.display = "block";
        } else {
            document.querySelector('.error-message').style.display = "none";
            document.querySelector("#jokes").innerHTML = ''; // Išvalyti turinį

            const jokesContainer = document.querySelector("#jokes");

            for (let i = 0; i < data.result.length; i++) {
                // Random skaiciaus funkcija
                const colorNumber = () => Math.floor(Math.random() * 255);
                // Random spalva
                const randomColor = `rgb(${colorNumber()}, ${colorNumber()}, ${colorNumber()})`;
                // Sukuriami div elementai
                const jokeElement = document.createElement('div');
                jokeElement.classList.add('col');
                jokeElement.style.backgroundColor = randomColor;
                jokeElement.textContent = data.result[i].value;
                // Įterpiama į dokumentą
                jokesContainer.appendChild(jokeElement);
            }
    } 
});
