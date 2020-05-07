// Chamada da API
fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
    .then((response) => {
        // Salvar e retornar resposta da requisição como Json
        return response.json();
    })
    .then((data) => {
        // Utilizar cada item presente da resposta
        data.forEach((cardTodo) => {

            // Elemento principal
            var cardTodos = document.getElementById("cardTodos");

            // Nova div representando um quarto
            var div = document.createElement("div");
            // Definir classe da div
            div.className = "item";

            // Texto que vai ser inserido na div do quarto
            var img = document.createElement("img");
            // Inserir texto no elemento p
            img.src = cardTodo.photo;

            // Inserir texto na div
            div.appendChild(img);
            // Inserir div no elemento principal
            cardTodos.appendChild(div);

            // Texto que vai ser inserido na div do quarto
            var p = document.createElement("p");
            // Inserir texto no elemento p
            p.innerHTML = cardTodo.name;

            // Inserir texto na div
            div.appendChild(p);
            // Inserir div no elemento principal
            cardTodos.appendChild(div);

            // Texto que vai ser inserido na div do quarto
            var h6 = document.createElement("h6");
            // Inserir texto no elemento p
            h6.innerHTML = `Tipo de Propriedade: <b>${cardTodo.property_type}</b>`;

            // Inserir texto na div
            div.appendChild(h6);
            // Inserir div no elemento principal
            cardTodos.appendChild(div);

            // Texto que vai ser inserido na div do quarto
            var h4 = document.createElement("h4");
            // Inserir texto no elemento p
            h4.innerHTML = `Preço por noite: <b>R$${cardTodo.price},00</b>`;

            // Inserir texto na div
            div.appendChild(h4);
            // Inserir div no elemento principal
            cardTodos.appendChild(div);
        });
    });


/* FUNÇÃO PARA SOMAR DIAS ENTRE DATAS */

function setDate(){
    var x = document.getElementById('dataEntrada').value; //"Pulling" the value entered 
    console.log(x);    
}

console.log(x);




/*
var date1 = new Date("06/30/2019");
var date2 = new Date("07/30/2019");

var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(Difference_In_Days);

document.getElementById('dataEntrada').value = dataEntrada;*/