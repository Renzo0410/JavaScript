
function initMap(localizacion) {
    const mapa = document.getElementById('estadio');
    // localizacion = {lat:41.38082183927529, lng:2.122830244120326};

    const map = new google.maps.Map(mapa, {
        zoom: 15,
        center: localizacion,
    })

    const marker = new google.maps.Marker ({
        position: localizacion,
        map: map,
        // La marca se mueve
        // draggable: true,
        draggable: false,
        title: 'Estadio del equipo :D'
    })

    marker.addListener('click',()=> {
        informacion.open({
            map: map,
            anchor: marker,
            shouldFocus: false,
        })
    })

    // Obtener cordenadas exactas mediante la consola
    marker.addListener('drag',(e)=>{
        console.log(e.latLng.lat())
        console.log(e.latLng.lng())
    })

}
window.initMap = initMap;

// *****************************************************

const estadios = {
    barcelona: {
        titulo: "Spotify Camp Nou",
        imagen: "./img/Estadios/Spotify_Camp_Nou.png",
        inauguracion: "<strong>Inauguración: </strong>24/09/1957",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>99.354 espectadores",
        coordenadas: {lat:41.38082183927529, lng:2.122830244120326}
    },

    real_madrid: {
        titulo: "Santiago Bernabéu",
        imagen: "./img/Estadios/Santiago_Bernabeu.png",
        inauguracion: "<strong>Inauguración: </strong>14/12/1947",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>81.044 espectadores",
        coordenadas: {lat:40.45298013601416, lng:-3.688332333065787}
    },

    atletico_madrid: {
        titulo: "Civítas Metropolitano",
        imagen: "./img/Estadios/Wanda_Metropolitano.png",
        inauguracion: "<strong>Inauguración: </strong>16/09/2017",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>68.456 espectadores",
        coordenadas: {lat:40.43606897938622, lng:-3.5993960486572263}
    },

    athletic_bilbao: {
        titulo: "San Mamés",
        imagen: "./img/Estadios/San_Mames.png",
        inauguracion: "<strong>Inauguración: </strong>16/09/2013",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>53.289 espectadores",
        coordenadas: {lat:43.264070598188006, lng:-2.949307244974837}
    },

    real_betis: {
        titulo: "Benito Villamarín",
        imagen: "./img/Estadios/Benito_Villamarin.png",
        inauguracion: "<strong>Inauguración: </strong>16/03/1929",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>60.721 espectadores",
        coordenadas: {lat:37.35637521015837, lng:-5.981763525882213}
    },

    sevilla: {
        titulo: "Ramón Sánchez-Pizjuán",
        imagen: "./img/Estadios/Ramón_Sánchez-Pizjuán.png",
        inauguracion: "<strong>Inauguración: </strong>07/09/1958",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>43.883 espectadores",
        coordenadas: {lat:37.38386806211353, lng:-5.971034998931581}
    },

    valencia: {
        titulo: "Camp de Meztalla",
        imagen: "./img/Estadios/Estadio_de_Mestalla_Valencia_CF.png",
        inauguracion: "<strong>Inauguración: </strong>07/05/1923",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>49.430 espectadores",
        coordenadas: {lat:39.47448332522747, lng:-0.3585538475941741}
    },

    mallorca: {
        titulo: "Estadi Mallorca Son Moix",
        imagen: "./img/Estadios/Visit_Mallorca_Estadi.png",
        inauguracion: "<strong>Inauguración: </strong>03/07/1999",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>23.142 espectadores",
        coordenadas: {lat:39.58970286014939, lng:2.630170185713645}
    },

    rayo_vallecano: {
        titulo: "Estadio de Vallecas",
        imagen: "./img/Estadios/Estadio_de_Vallecas.png",
        inauguracion: "<strong>Inauguración: </strong>10/05/1976",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>14.505 espectadores",
        coordenadas: {lat:40.3918179473209, lng:-3.658673147594189}
    },

    real_sociedad: {
        titulo: "Reale Arena",
        imagen: "./img/Estadios/Reale_Arena.png",
        inauguracion: "<strong>Inauguración: </strong>13/08/1993",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>40.000 espectadores",
        coordenadas: {lat:43.30126854388152, lng:-1.9736030989315712}
    },

    villarreal: {
        titulo: "Estadio de la Cerámica",
        imagen: "./img/Estadios/Estadio_de_La_Ceramica.png",
        inauguracion: "<strong>Inauguración: </strong>17/06/1923",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>23.500 espectadores",
        coordenadas: {lat:39.94378050689512, lng:-0.10319529107354786}
    },

    celta_vigo: {
        titulo: "Estadio Abanca Balídos",
        imagen: "./img/Estadios/Estadio_Abanca_Balaidos.png",
        inauguracion: "<strong>Inauguración: </strong>30/12/1928",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>29.000 espectadores",
        coordenadas: {lat:42.211872421152655, lng:-8.739729250509635}
    },

    real_valladolid: {
        titulo: "Estadio Municipal José Zorrila",
        imagen: "./img/Estadios/Jose_Zorrilla.png",
        inauguracion: "<strong>Inauguración: </strong>20/02/1982",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>27.618 espectadores",
        coordenadas: {lat:41.64434694260312, lng:-4.761161769306145}
    },

    getafe: {
        titulo: "Coliseum Alfonso Pérez",
        imagen: "./img/Estadios/Coliseum_Alfonso_Pérez.png",
        inauguracion: "<strong>Inauguración: </strong>30/08/1998",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>17.000 espectadores",
        coordenadas: {lat:40.32558710244118, lng:-3.7149047475941743}
    },

    elche: {
        titulo: "Estadio Martinez Valero",
        imagen: "./img/Estadios/Estadio_Martinez_Valero.png",
        inauguracion: "<strong>Inauguración: </strong>08/09/1976",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>31.388 espectadores",
        coordenadas: {lat:38.266922855992505, lng:-0.6626851936374489}
    },

    cadiz: {
        titulo: "Estadio Nueva Mirandilla",
        imagen: "./img/Estadios/Nueva_Mirandilla.png",
        inauguracion: "<strong>Inauguración: </strong>03/09/1955",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>25.033 espectadores",
        coordenadas: {lat:36.50246291333674, lng:-6.272885593084707}
    },

    espanyol: {
        titulo: "RCDE Stadium",
        imagen: "./img/Estadios/Estadio_Cornellà-ElPrat_o_Corneprat.png",
        inauguracion: "<strong>Inauguración: </strong>02/08/2009",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>40.000 espectadores",
        coordenadas: {lat:41.34808622031625, lng:2.074540062982173}
    },

    almeria: {
        titulo: "Power Horse Stadium",
        imagen: "./img/Estadios/Power_Horse_Stadium_Estadio_de_los_Juegos_Mediterraneos.png",
        inauguracion: "<strong>Inauguración: </strong>31/07/2004",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>16.503 espectadores",
        coordenadas: {lat:36.83986786706779, lng:-2.435350537790779}
    },

    girona: {
        titulo: "Estadio Municipal de Montilivi",
        imagen: "./img/Estadios/Estadio_Montilivi.png",
        inauguracion: "<strong>Inauguración: </strong>14/08/1970",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>13.500 espectadores",
        coordenadas: {lat:41.96081632626304, lng:2.8278811063625664}
    },

    osasuna: {
        titulo: "Estadio El Sadar",
        imagen: "./img/Estadios/Estadio_El_Sandar.png",
        inauguracion: "<strong>Inauguración: </strong>02/09/1967",
        cesped: "<strong>Tipo de césped: </strong>Césped natural",
        capacidad: "<strong>Capacidad: </strong>14.505 espectadores",
        coordenadas: {lat:42.79647496123043, lng:-1.6370474492005416}
    },
};

document.getElementById('btn-barcelona').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.barcelona.titulo;
    document.querySelector('#estadio_principal img').src = estadios.barcelona.imagen;
    initMap(estadios.barcelona.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.barcelona.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.barcelona.cesped;
    document.getElementById('capacidad').innerHTML = estadios.barcelona.capacidad;
});

document.getElementById('btn-real_madrid').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.real_madrid.titulo;
    document.querySelector('#estadio_principal img').src = estadios.real_madrid.imagen;
    initMap(estadios.real_madrid.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.real_madrid.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.real_madrid.cesped;
    document.getElementById('capacidad').innerHTML = estadios.real_madrid.capacidad;
});

document.getElementById('btn-atletico_madrid').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.atletico_madrid.titulo;
    document.querySelector('#estadio_principal img').src = estadios.atletico_madrid.imagen;
    initMap(estadios.atletico_madrid.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.atletico_madrid.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.atletico_madrid.cesped;
    document.getElementById('capacidad').innerHTML = estadios.atletico_madrid.capacidad;
});

document.getElementById('btn-athletic_bilbao').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.athletic_bilbao.titulo;
    document.querySelector('#estadio_principal img').src = estadios.athletic_bilbao.imagen;
    initMap(estadios.athletic_bilbao.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.athletic_bilbao.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.athletic_bilbao.cesped;
    document.getElementById('capacidad').innerHTML = estadios.athletic_bilbao.capacidad;
});

document.getElementById('btn-real_betis').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.real_betis.titulo;
    document.querySelector('#estadio_principal img').src = estadios.real_betis.imagen;
    initMap(estadios.real_betis.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.real_betis.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.real_betis.cesped;
    document.getElementById('capacidad').innerHTML = estadios.real_betis.capacidad;
});

document.getElementById('btn-sevilla').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.sevilla.titulo;
    document.querySelector('#estadio_principal img').src = estadios.sevilla.imagen;
    initMap(estadios.sevilla.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.sevilla.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.sevilla.cesped;
    document.getElementById('capacidad').innerHTML = estadios.sevilla.capacidad;
});

document.getElementById('btn-valencia').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.valencia.titulo;
    document.querySelector('#estadio_principal img').src = estadios.valencia.imagen;
    initMap(estadios.valencia.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.valencia.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.valencia.cesped;
    document.getElementById('capacidad').innerHTML = estadios.valencia.capacidad;
});

document.getElementById('btn-mallorca').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.mallorca.titulo;
    document.querySelector('#estadio_principal img').src = estadios.mallorca.imagen;
    initMap(estadios.mallorca.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.mallorca.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.mallorca.cesped;
    document.getElementById('capacidad').innerHTML = estadios.mallorca.capacidad;
});

document.getElementById('btn-rayo_vallecano').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.rayo_vallecano.titulo;
    document.querySelector('#estadio_principal img').src = estadios.rayo_vallecano.imagen;
    initMap(estadios.rayo_vallecano.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.rayo_vallecano.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.rayo_vallecano.cesped;
    document.getElementById('capacidad').innerHTML = estadios.rayo_vallecano.capacidad;
});

document.getElementById('btn-real_sociedad').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.real_sociedad.titulo;
    document.querySelector('#estadio_principal img').src = estadios.real_sociedad.imagen;
    initMap(estadios.real_sociedad.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.real_sociedad.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.real_sociedad.cesped;
    document.getElementById('capacidad').innerHTML = estadios.real_sociedad.capacidad;
});

document.getElementById('btn-villarreal').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.villarreal.titulo;
    document.querySelector('#estadio_principal img').src = estadios.villarreal.imagen;
    initMap(estadios.villarreal.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.villarreal.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.villarreal.cesped;
    document.getElementById('capacidad').innerHTML = estadios.villarreal.capacidad;
});

document.getElementById('btn-celta_vigo').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.celta_vigo.titulo;
    document.querySelector('#estadio_principal img').src = estadios.celta_vigo.imagen;
    initMap(estadios.celta_vigo.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.celta_vigo.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.celta_vigo.cesped;
    document.getElementById('capacidad').innerHTML = estadios.celta_vigo.capacidad;
});

document.getElementById('btn-real_valladolid').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.real_valladolid.titulo;
    document.querySelector('#estadio_principal img').src = estadios.real_valladolid.imagen;
    initMap(estadios.real_valladolid.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.real_valladolid.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.real_valladolid.cesped;
    document.getElementById('capacidad').innerHTML = estadios.real_valladolid.capacidad;
});

document.getElementById('btn-getafe').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.getafe.titulo;
    document.querySelector('#estadio_principal img').src = estadios.getafe.imagen;
    initMap(estadios.getafe.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.getafe.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.getafe.cesped;
    document.getElementById('capacidad').innerHTML = estadios.getafe.capacidad;
});

document.getElementById('btn-elche').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.elche.titulo;
    document.querySelector('#estadio_principal img').src = estadios.elche.imagen;
    initMap(estadios.elche.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.elche.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.elche.cesped;
    document.getElementById('capacidad').innerHTML = estadios.elche.capacidad;
});

document.getElementById('btn-cadiz').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.cadiz.titulo;
    document.querySelector('#estadio_principal img').src = estadios.cadiz.imagen;
    initMap(estadios.cadiz.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.cadiz.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.cadiz.cesped;
    document.getElementById('capacidad').innerHTML = estadios.cadiz.capacidad;
});

document.getElementById('btn-espanyol').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.espanyol.titulo;
    document.querySelector('#estadio_principal img').src = estadios.espanyol.imagen;
    initMap(estadios.espanyol.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.espanyol.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.espanyol.cesped;
    document.getElementById('capacidad').innerHTML = estadios.espanyol.capacidad;
});

document.getElementById('btn-almeria').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.almeria.titulo;
    document.querySelector('#estadio_principal img').src = estadios.almeria.imagen;
    initMap(estadios.almeria.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.almeria.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.almeria.cesped;
    document.getElementById('capacidad').innerHTML = estadios.almeria.capacidad;
});

document.getElementById('btn-girona').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.girona.titulo;
    document.querySelector('#estadio_principal img').src = estadios.girona.imagen;
    initMap(estadios.girona.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.girona.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.girona.cesped;
    document.getElementById('capacidad').innerHTML = estadios.girona.capacidad;
});

document.getElementById('btn-osasuna').addEventListener('click', function(e){
    document.querySelector('#estadio_principal h1').innerHTML = estadios.osasuna.titulo;
    document.querySelector('#estadio_principal img').src = estadios.osasuna.imagen;
    initMap(estadios.osasuna.coordenadas);
    document.getElementById('inauguracion').innerHTML = estadios.osasuna.inauguracion;
    document.getElementById('tipo_cesped').innerHTML = estadios.osasuna.cesped;
    document.getElementById('capacidad').innerHTML = estadios.osasuna.capacidad;
});