(function(){
    var actualizarHour = () => {
        var date = new Date(),
            hours = date.getHours(),
            // am_pm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            day_week = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
    
        var sectionHours = document.getElementById('hours'),
            // sectionAm_Pm = document.getElementById('am-pm'),
            sectionMinutes = document.getElementById('minutes'),
            sectionSeconds = document.getElementById('seconds'),
            sectionDay_Week = document.getElementById('day-week'),
            sectionDay = document.getElementById('day'),
            sectionMonth = document.getElementById('month'),
            sectionYear = document.getElementById('year');
        
        var week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        sectionDay_Week.textContent = week[day_week];

        sectionDay.textContent = day;

        var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"];
        sectionMonth.textContent = months[month]

        sectionYear.textContent = year;

        // if (hours >= 12){
        //     hours = hours - 12;
        //     am_pm = 'PM'
        // } else {
        //     am_pm = 'AM'
        // }
        
        // if (hours == 0){
        //     hours == 12;
        // };

        sectionHours.textContent = hours;
        // sectionAm_Pm.textContent = am_pm;

        if(minutes < 10){
            minutes = '0' + minutes
        };

        if(seconds < 10){
            seconds = '0' + seconds
        };

        sectionMinutes.textContent = minutes;
        sectionSeconds.textContent = seconds;

    };

    actualizarHour();
    var interval = setInterval(actualizarHour, 1000);

}())