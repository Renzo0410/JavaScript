const playersImportant = {
    lewandowski: {
        nombre: "<strong>Nombre: </strong>Robert Lewandowski",
        imagen: "./img/Jugadores_determinantes/Robert_Lewandowski.png",
        goles: "<strong>Goles: </strong>23 (Temporada 22/23)",
        equipo: "<strong>Equipo: </strong>FC Barcelona",
        pierna: "<strong>Pierna hábil: </strong>Derecha",
        pais: "<strong>Nacionalidad: </strong>Polaco",
        estatura: "<strong>Estatura: </strong>1,85 m",
        edad: "<strong>Edad: </strong>34 años",
        peso: "<strong>Peso: </strong>81 kg",
        dorsal: "<strong>Dosal: </strong>9",
        precio: "<strong>Valor de mercado: </strong>45M€",
        video: "./video/Video_Lewandowski.mp4",
    },
    
    benzema: {
        nombre: "<strong>Nombre: </strong>Karim Benzema",
        imagen: "./img/Jugadores_determinantes/Karim_Benzema.png",
        goles: "<strong>Goles: </strong>19 (Temporada 22/23)",
        equipo: "<strong>Equipo: </strong>Real Madrid CF",
        pierna: "<strong>Pierna hábil: </strong>Derecha",
        pais: "<strong>Nacionalidad: </strong>Francés",
        estatura: "<strong>Estatura: </strong>1,85 m",
        edad: "<strong>Edad: </strong>35 años",
        peso: "<strong>Peso: </strong>81 kg",
        dorsal: "<strong>Dosal: </strong>9",
        precio: "<strong>Valor de mercado: </strong>25M€",
        video: "./video/Video_Benzema.mp4",
    }
};

document.getElementById('player_barcelona').addEventListener('click', function(){
    document.getElementById('imagen_max_goleador').src = playersImportant.lewandowski.imagen;
    document.getElementById('name_player').innerHTML = playersImportant.lewandowski.nombre;
    document.getElementById('goles_player').innerHTML = playersImportant.lewandowski.goles;
    document.getElementById('team_player').innerHTML = playersImportant.lewandowski.equipo;
    document.getElementById('pie').innerHTML = playersImportant.lewandowski.pierna;
    document.getElementById('pais').innerHTML = playersImportant.lewandowski.pais;
    document.getElementById('estatura').innerHTML = playersImportant.lewandowski.estatura;
    document.getElementById('edad').innerHTML = playersImportant.lewandowski.edad;
    document.getElementById('peso').innerHTML = playersImportant.lewandowski.peso;
    document.getElementById('dorsal').innerHTML = playersImportant.lewandowski.dorsal;
    document.getElementById('precio_mercado').innerHTML = playersImportant.lewandowski.precio;
    document.getElementById('video_jugador').src = playersImportant.lewandowski.video;
});

document.getElementById('player_madrid').addEventListener('click', function(){
    document.getElementById('imagen_max_goleador').src = playersImportant.benzema.imagen;
    document.getElementById('name_player').innerHTML = playersImportant.benzema.nombre;
    document.getElementById('goles_player').innerHTML = playersImportant.benzema.goles;
    document.getElementById('team_player').innerHTML = playersImportant.benzema.equipo;
    document.getElementById('pie').innerHTML = playersImportant.benzema.pierna;
    document.getElementById('pais').innerHTML = playersImportant.benzema.pais;
    document.getElementById('estatura').innerHTML = playersImportant.benzema.estatura;
    document.getElementById('edad').innerHTML = playersImportant.benzema.edad;
    document.getElementById('peso').innerHTML = playersImportant.benzema.peso;
    document.getElementById('dorsal').innerHTML = playersImportant.benzema.dorsal;
    document.getElementById('precio_mercado').innerHTML = playersImportant.benzema.precio;
    document.getElementById('video_jugador').src = playersImportant.benzema.video;
});