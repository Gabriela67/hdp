
let  verificarp1= true;
let  verificarp2= true;


function Agregarjugador1(){
          let boton1 = document.getElementsByClassName ("boton1");
          var player1 = prompt ("Enter name of player 1 ")
          boton1.textContent = player1;
          alert("welcome "+player1);
          
          if(player1!=" ") {
          verificarp1 = false;
          console.log(verificarp1)
      }
}

function Agregarjugador2(){
          let boton2 = document.getElementsByClassName("boton2");
          var player2 = prompt ("Enter name of player 2 ")
          boton2.textContent = player2 ;
          alert("welcome  "+player2);
          if(player2!=" "){
          
          verificarp2 = false;
          console.log(verificarp2)
        }
}


function Ajugar(){
          location.href = "index2.html";
}

function validar(){
 
   var validarCorrecto = true;
  
    let validar = false;
   if((verificarp1 == true)|| ( verificarp2 == true)) {

    alert(" no ah ingresado Nombre ") 
    

   }else  {  

    alert(" WELCOME ");

    Ajugar();
    validar = true;
    
   }

}

function reiniciar(){
 
    window.location.reload();
    
}



   
    var turno_Jugador = 1 ;
    var turno ;
    var tablero = new Array(9);
    var celdas = document.getElementsByClassName("juego");
   // console.log(celdas);

    function GanarJuego(letra)
          {
      if( (tablero[0] == letra &&  tablero[1] ==letra && tablero[2]== letra)  ||
          (tablero[3] == letra &&  tablero[4] ==letra && tablero[5]== letra ) || 
          (tablero[6] == letra &&  tablero[7] ==letra && tablero[8]== letra ) ||
          (tablero[0] == letra &&  tablero[3] ==letra && tablero[6]== letra ) ||
          (tablero[1] == letra &&  tablero[4] ==letra && tablero[7]== letra ) ||
          (tablero[2] == letra &&  tablero[5] ==letra && tablero[8]== letra ) ||
          (tablero[0] == letra &&  tablero[4] ==letra && tablero[8]== letra ) ||
          (tablero[2] == letra &&  tablero[4] ==letra && tablero[6]== letra )
          )
          
          {
      

      alert("Congratulations: "+letra+   " winner") ;
      document.location.reload();
    
  

    }
  }
    function juego (evento)

    {


           //alert(evento.target.id)
           var celda = evento.target;
           var idCel = evento.target.id;
           var posicionAmarcar = idCel[1]-1;

          

           turno = turno_Jugador%2

           if( turno  > 0 &&  turno <= 9){
         celda.innerHTML = "X";
         celda.style.background = "#ec4646";
         tablero[posicionAmarcar] = "X";
         celda.removeEventListener("click",juego);

       
        
         GanarJuego("X");
         
        // alert("player 2 turn O")
        document.getElementById('cont1').innerHTML='Next Turn 0';
      
           }else if (turno == 0){
            
           
                  celda.innerHTML = "O";
                  celda.style.background = "#3d7ea6";
                  tablero[posicionAmarcar] = "O";
                  celda.removeEventListener("click",juego);
                  GanarJuego("O");
                  
                  document.getElementById('cont1').innerHTML='Next Turn X';
                }
          
            //console.log(turno , turno_Jugador , tablero)
           if(turno_Jugador == 9)
           {

            alert("Empate :( ")

            
           
           } else{

          
           turno_Jugador++;
           }
    }
    function cargarjuego(){

              var contador = 0;
                while( contador < celdas.length ){//para re

                // console.log(contador,celdas[contador]);
   

            celdas[contador].addEventListener("click",juego)
            contador++;
        }
           
    }
    //eventos
window.addEventListener("load", cargarjuego);






