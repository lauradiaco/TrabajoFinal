
let imgContainer0 = document.querySelector(".img-container0");
let imgContainer1 = document.querySelector(".img-container1");
let imgContainer2 = document.querySelector(".img-container2");


fetch('https://randomuser.me/api/?results=3')
    .then(response => response.json())
    .then((datos) => {
       
        document.getElementById("nombre0").innerText = datos.results[0].name.first+ '  ' + datos.results[0].name.last;
        imgContainer0.innerHTML = `<img src= ${datos.results[0].picture.large}>`;

        
        document.getElementById("nombre1").innerText = datos.results[1].name.first+ '  ' + datos.results[1].name.last;
        imgContainer1.innerHTML = `<img src= ${datos.results[1].picture.large}>`;

        
        document.getElementById("nombre2").innerText = datos.results[2].name.first+ '  ' + datos.results[2].name.last;
        imgContainer2.innerHTML = `<img src= ${datos.results[2].picture.large}>`;

    })


