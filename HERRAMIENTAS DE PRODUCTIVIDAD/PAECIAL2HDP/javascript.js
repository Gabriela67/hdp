let select = document.createElement("select");
select.setAttribute("div","opciones")

let optionC = document.createElement("option");
optionC.setAttribute("value", "valueC");
let optionCTexto = document.createTextNode("selecione una opcion");
optionC.appendChild(optionCTexto);

let option1 = document.createElement("option");
option1.setAttribute("value", "div");

let option1Texto = document.createTextNode("div");
option1.appendChild(option1Texto);

let option2 = document.createElement("option");
option2.setAttribute("value", "h1");
let option2Texto = document.createTextNode("h1");
option2.appendChild(option2Texto);

let option3 = document.createElement("option");
option3.setAttribute("value", "img");
let option3Texto = document.createTextNode("img");
option3.appendChild(option3Texto);

select.appendChild(optionC);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

document.body.appendChild(select);


var selectt = document.getElementById('opciones');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);

    if(selectedOption.value == "div") {


        let elemento = document.createElement("div")
        let div2 = prompt("ingresa el nombre del id")
        elemento.setAttribute("id",div2)
        let padre = prompt("quiere que sea el padre")
       
       padre.appendChild(elemento);

       console.log(padre)

       var cn = document.getElementById("cn")
       cn.style.backgroundColor = "red" ;
       cn.style.height = "300px" ;
       cn.style.width = "100%"

       var cn = document.getElementById("box")
       box.style.backgroundColor = "blue" ;
       box.style.height = "300px" ;
       box.style.width = "300px"
       
    }
    
    if(selectedOption.value == "h1") {


        let elemento = document.createElement("h1")
        let div2 = prompt("ingresa el nombre del id")
        elemento.setAttribute("id",div2)
        let padre = prompt("quiere que sea el padre")
       
       padre.appendChild(elemento);

       console.log(padre)

       var cn = document.getElementById("h1")
      
    }
    if(selectedOption.value == "img") {


        let elemento = document.createElement("img")
        let div2 = prompt("ingresa el nombre del id")
        elemento.setAttribute("src",div2)
        elemento.setAttribute("SRC","https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_UES.jpg")
        let padre = prompt("quiere que sea el padre")
       
       padre.appendChild(elemento);

       console.log(padre)

       var cn = document.getElementById("h1")
      
    }

  });


 


