var enviarF = document.querySelector('#enviar');
var formularioT = document.querySelector('#registro_fan');

enviarF.addEventListener('click', (evento)=> {
    evento.preventDefault();    // No envío el formulario
    
    valido = validar_datos();
    
    if (valido == true) {
        formularioT.submit();
    }
})

function validar_datos() {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let codigoP = document.getElementById('codigo_postal');
    let telefono = document.getElementById('numero');

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
            setError(nombre,'El nombre solo puede contener 15 caracteres como máximo y conformado únicamente por letras');
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
            setError(apellido,'El apellido solo puede contener 40 caracteres como máximo y conformado únicamente por letras');
            correcto = false; 
        } else {
            setSuccess(apellido);
        }
    }

    // ********************************************************************
    
    // Validación de CORREO:
    if(email.value == null || email.value == '') {
        setError(email,'El correo no puede estar vacío.');
        correcto = false;
    } else {
        // Expresión regular para validación de CORREO:
        let email_re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            
        if (!email_re.exec(email.value)) {
            setError(email,'El email contiene caracteres no válidos');
            correcto = false; 
        } else {
            setSuccess(email);
        }
    }

    // ********************************************************************

    // Validación de CÓDIGO POSTAL:
    if(codigoP.value == null || codigoP.value == '') {
        setError(codigoP,'El código postal no puede estar vacío.');
        correcto = false;
    } else {
        // Expesión regular para validación de TELÉFONO:
        let codigoP_re = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;

        if (!codigoP_re.exec(codigoP.value)) {
            setError(codigoP,'El CP debe estar conformado por 5 dígitos y conformado  únicamente por números');
            correcto = false; 
        } else {
            setSuccess(codigoP);
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
                setError(telefono,'El teléfono debe estar conformado por 9 dígitos y conformado  únicamente por números');
                correcto = false; 
            } else {
                setSuccess(telefono);
            }
        }

    // ********************************************************************
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