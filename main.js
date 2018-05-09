$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=c10bb3bd22f90d636baa008b1529ee25',
            type: "GET",
            dataType: "json",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
    
}

function showResults(data){
    return  '<h2>Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
            "<h3> Weather: "+data.weather[0].main+"</h3>"+
            "<h3> Description:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3> Temperature: "+data.main.temp+" &deg;C</h3>"+
            "<h3> Pressure: "+data.main.pressure+" hpa</h3>"+
            "<h3> Humidity: "+data.main.humidity+"%</h3>"+
            "<h3> Min Temperature: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3> Max Temperature: "+data.main.temp_max+"&deg;C</h3>"+
            "<h3> Wind Speed: "+data.wind.speed+"m/s</h3>"+
            "<h3> Wind Direction: "+data.wind.deg+"&deg;</h3>";
}












