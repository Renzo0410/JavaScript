var enviarF = document.querySelector('#enviar');
var formularioT = document.querySelector('#formulario_tienda');

enviarF.addEventListener('click', (evento)=> {
    evento.preventDefault();   
    
    valido = validar_datos();
    
    if (valido == true) {
        // Alerta de aviso:
        // swal("¡Listo!", "El formulario ha sido enviado correctamente.", "¡Gracias!");
        formularioT.submit();
    }
})

function validar_datos() {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');

    var privacidad = document.getElementById('privacidad');
    var condiciones = document.getElementById('condiciones');

    let correcto = true;

    // ********************************************************************
    // Validación de NOMBRE:
    if(nombre.value == null || nombre.value == '') {
        setError(nombre,'El nombre no puede estar vacío.');
        correcto = false; 
    } else {
        // Expresión regular para validación de NOMBRE:
        let name_re =/^[a-zA-Z ]{2,15}$/;
        
        if (!name_re.exec(nombre.value)) {
            setError(nombre,'El nombre solo puede contener 15 caracteres como máximo y conformado por letras');
            correcto = false; 
        } else {
            setSuccess(nombre);
        }
    }

    // ********************************************************************
    // Validación de APELLIDO:
    if(apellido.value == null || apellido.value == '') {
        setError(apellido,'El apellido no puede estar vacío.');
        correcto = false;
    } else {
        // Expresión regular para validación de APELLIDO:
        let apellido_re =/^[a-zA-Z ]{5,40}$/;
        
        if (!apellido_re.exec(apellido.value)) {
            setError(apellido,'El apellido solo puede contener 40 caracteres como máximo y conformado por letras');
            correcto = false; 
        } else {
            setSuccess(apellido);
        }
    }

    // ********************************************************************
    // Validación de TELÉFONO:
    if(telefono.value == null || telefono.value == '') {
        setError(telefono,'El teléfono no puede estar vacío.');
        correcto = false;
    } else {
        // Expesión regular para validación de TELÉFONO:
        let telefono_re = /^[9|6|7][0-9]{8}$/;

        if (!telefono_re.exec(telefono.value)) {
            setError(telefono,'El teléfono puedo estar conformado por 9 dígitos y conformado por números');
            correcto = false; 
        } else {
            setSuccess(telefono);
        }
    }

    // ********************************************************************
    // Validación de CORREO:
    if(correo.value == null || correo.value == '') {
        setError(correo,'El correo no puede estar vacío.');
        correcto = false;
    } else {
        // Expresión regular para validación de CORREO:
        let email_re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            
        if (!email_re.exec(correo.value)) {
            setError(correo,'El email contiene caracteres no válidos');
            correcto = false; 
        } else {
            setSuccess(correo);
        }
    }

    // *******************************************************************
    // Validación de CHECKS

    if (!privacidad.checked){
        setError(privacidad, 'Tiene que aceptar las políticas de privacidad')
        correcto = false;
    } else {
        setSuccess(privacidad);
    }

    if (!condiciones.checked){
        setError(condiciones, 'Tiene que aceptar los términos y condiciones')
        correcto = false;
    } else {
        setSuccess(condiciones);
    }


    // *******************************************************************

    if(correcto == true) {
        return true; 
    } else {
        return false;
    }
}   

function setError(input, mensaje) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = mensaje;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// ************************************************************************
// PRESUPUESTO DE FORMULARIO

(() => {

    let presupuestoTotal = 0;
    
    const elegir_producto = document.querySelector('#elegir');
    const entrega = document.querySelector('#entrega');
    const extras = document.querySelectorAll('#extras>label>input');
    const total = document.querySelector('#presupuestoT');

    let suma = () => {
        sumaTotal = parseInt(elegir_producto.value);
        switch (entrega.value) {
            case "0":
                sumaTotal += 0;
                break;
            case "1":
                sumaTotal += 50;
                break;
            case "2":
                sumaTotal += 40;
                break;
            case "3":
                sumaTotal += 30;
                break;
            case "4":
                sumaTotal += 20;
                break;
            case "5":
                sumaTotal += 10;
                break;
            default:
                sumaTotal += 0;
                break;
        }

        extras.forEach(element => {
            if(element.checked) {
                sumaTotal += parseInt(element.value);
            }
        });

        total.value = sumaTotal +'€';
    }

    extras.forEach(element => {
        element.addEventListener("change",suma,false);
    });
    
    elegir_producto.addEventListener("change",suma,false);
    entrega.addEventListener("change",suma,false);

})();