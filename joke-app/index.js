// https://api.blablagues.net/?rub=blagues

const header = document.getElementById('header');
const content = document.getElementById('content');

function getJoke() {
    fetch('https://api.blablagues.net/?rub=blagues')
        .then((res) => res.json())
        .then((data) => {
            const d = data.data.content;
            header.textContent = d.text_head;
            content.textContent = d.text !== ""
            ? d.text 
            : d.text_hidden; 
        });
}

getJoke();
document.body.addEventListener('click', getJoke);