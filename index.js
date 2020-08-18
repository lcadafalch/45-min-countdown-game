
let resultado = ""

function piedra() {
    resultado = "piedra";
    
    ordenadorResult()
}
function papel() {
    resultado = "papel";
    
    ordenadorResult()
}
function tijera() {
    resultado = "tijera";
    ordenadorResult()
}

var ordenador = ""
 let finalganador =""

function ordenadorResult() {
    let ordenador = Math.floor(Math.random() * 3);
    if (ordenador === 0) {
        ordenador = "piedrac";
    }
    if (ordenador === 1) {
        ordenador = "papelc";

    }
    if (ordenador === 2) {
        ordenador = "tijerac";
    }
     console.log(ordenador)
     console.log(resultado)

        if (resultado === "piedra" && ordenador === "piedrac") {
            finalganador ="has elegido piedra la maquina tambien : EMPATE"
            
        }
        if (resultado ==="piedra" && ordenador === "papelc") {
            finalganador=" has elegido piedra la maquina papel: PIERDES"
        }
        if (resultado === "piedra" && ordenador === "tijerac") {
            finalganador="  has elegido piedra la maquina tijera : GANAS"
          
        }
  
        if (resultado ==="tijera" && ordenador === "tijerac") {
            finalganador=" has elegido tiera y la maquina tijera : EMPATE"
        }
        if (resultado ==="tijera" && ordenador === "papelc") {
            finalganador=" has elegido tijera la maquina papel : GANAS"
        }
        if (resultado === "tijera" && ordenador === "piedrac") {
            finalganador=" has elegido tijera la maquina piedra : PIERDES"
        }
        
        if (resultado === "papel" && ordenador === "papelc") {
            finalganador=" has elegido papel y la maquina papel : EMPATE"
        }
        if (resultado ==="papel" && ordenador === "piedrac") {
            finalganador="  has elegido papel la piedra  : GANAS"
        }
        if (resultado === "papel" && ordenador === "tijerac") {
            finalganador="has elegido papel y la maquina tijera  : PIERDES"
        }

       let ganador = document.querySelector(".resultado").innerHTML =finalganador
       
  
  
}





// let ganador = ordenador;
// function piedraGanadora() {




