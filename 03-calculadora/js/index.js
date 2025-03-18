// Bienvenida

function saludo() {
    alert("Bienvenido a mi calculadora 🫡")
}


const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonSeleccionado = boton.textContent;

        if(boton.id === "eliminarTodo"){
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrarUltimo"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "resultado"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonSeleccionado;
        } else{
            pantalla.textContent += botonSeleccionado;
        }
    })
})