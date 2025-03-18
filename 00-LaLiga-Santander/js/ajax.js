
var contenido = document.getElementById('contenido')

function cargar() {
    fetch('json/index.json')
        .then( res => res.json() )
        .then( datos => {
            tabla(datos)
        })
}

function tabla(datos) {
    contenido.innerHTML = ''
    for(let valor of datos) {
        contenido.innerHTML += `
        
        <tr>
            <th>${valor.equipo}</th>
            <th>${valor.ligas}</th>
            <th>${valor.coparey}</th>
            <th>${valor.supercopaes}</th>
        </tr>

        `
    }
}
