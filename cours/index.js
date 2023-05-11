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



//=====================ASYNCHRONE=========================

//---- Promise ----

//fetch('monlien').then((res) => res..)
// Le .then ne sera executé que lorsque l'on aura des données


//---- Async/Await ----

async function fetchData(){
     await fetch('monlien')
     // attend que le await soit executé avant de faire la suite...
     await executeFonction();
}

 const fetchData2 = async () => {}



 //=====================LE JSON=========================

 // Méthode .json() => méthode qui s'auto-résout en royant le Body de la requête.

 fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        // Stringify => convertit en JSON
        let settings = JSON.stringify(data);
        // Parse => transforme JSON en objet JS
        console.log(JSON.parse(settings));
    });


 //=====================WEB API=========================

 //======CLIENT STORAGE
 // Local Storage
localStorage.data = "Je stock la data";
console.log(localStorage.data);
localStorage.removeItem("data");

const obj = {
    name: "Denis",
    age: "22",
};

// Passer un objet ne fonctionne pas pour le localstorage
// Il faut obligatoirement une chaine
localStorage.user = obj; // => Ne fonctionne pas
localStorage.user = JSON.stringify(obj); // => Fonctionne !


 //======SESSION STORAGE
 sessionStorage.dataSettings = "55px";
 // Les données stockées dans le sessionStorage sont effacées lorsque l'ont quitte le nav



 //======COOKIES
 document.cookie = "username=CryptoNico";

 // Bonne pratique
 document.cookie = "pseudo=CN; path=/; max-age=450000; secure; samesite";
