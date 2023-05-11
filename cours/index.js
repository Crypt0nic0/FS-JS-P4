//=====================XMLHttpRequest=========================

function reqListener() {
   // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open('get', 'data.txt', true);
//req.open('get','data.json',true);
req.open('get','https://api.blablagues.net/?rub=blagues',true);
req.send();



//=====================FETCH=========================

//  fetch("monlien","object d'options")
//     .then((response) => {
//      //response
//     })
//     .catch((error) => console.log(err));

fetch('data.txt')
    .then((res) => res.text())
    .then((data) => console.log(data));


fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors"
}

// CRUD => Create (POST), Read (GET), Update (PUT), Delete (DELETE)

fetch("data.json", init)
    .then((res) => console.log(res));


const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "From Scratch",
        message: "Yo les gens !"
    }),
    mode: "cors",
    credentials: "same-origin"
};

const del2 = {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin"
};

document.getElementById("formAdd").addEventListener("submit", () => {
    fetch('http://localhost:3000/posts', init2)
        .then((res) => console.log('data envoyée'));
});

document.getElementById("formDelete").addEventListener("submit", () => {
    fetch('http://localhost:3000/posts/' + "1", del2)
        .then(() => console.log('data supprimée !'));
});
