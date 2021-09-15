var web_service = "https://serviciosgeovisor.igac.gov.co:8080/Geovisor/";
var loading;



$(function(){
    $('body').on('click', '.Que-es', function() {
        
        $(this).addClass('Que-es-clic');
        
        var elemento = document.getElementById('Que-es-id');
        elemento.innerHTML = '<h1>Bienvenidos</h1>'+'<p>Estamos en la Ruta del POT: Una guía para tomar la dirección adecuada. Este es espacio para que los municipios tengan un apoyo para realizar los procesos de revisión, ajuste o elaboración de su Plan de Ordenamiento Territorial – POT. Es el resultado de un proceso minucioso de que busca dar respuestas a los municipios sobre posibles obstáculos y dificultades que se encontrarán en el proceso. Siendo así, esta ruta busca dar la información y el acompañamiento necesario, en el momento oportuno, para que los municipios puedan sortear los retos que se van presentando en las diferentes etapas. </p>'
        +'<p>Lo primero, es identificar en qué estado de avance se encuentran y hacerse las siguientes preguntas: ¿Dónde estamos parados? ¿Qué camino hemos recorrido? Y, mirar hacia adelante para entender ¿Cuánto nos falta por recorrer y qué debemos hacer para recorrerlo de la manera más adecuada? Sigan las señales, hagan los altos en el camino, estén atentos a las alertas para llegar a la meta.</p>'
        +'<p>Prendan todos los motores.  </p>'
        + '<button class="entendido">Entendido</button>';
        //document.getElementById("image-home").style.marginTop = "90px";

    });
});


$(function(){
    $('body').on('click', '.Que-es-clic', function() {
        $(this).removeClass('Que-es-clic');
        var elemento = document.getElementById('Que-es-id');
        elemento.innerHTML = '<span class="Que-es-texto">¿Qué es la Ruta del POT?</span>'

    });
});


    //$('th').connections();
    


//function myFunction()
//{
//    document.getElementById('circle0').setAttribute("class", "circle0clic");
//}

//function select(this)
//{
//    document.getElementById('circle').setAttribute("class", "circleclic");
//    document.getElementById('paso').setAttribute("class", "pasoclic");
//}

//function select(el) {
//    el.classList.toggle("optionSelected");
//}


$(function() {
    $('.paso').click(function() {
        var clasecirculo = $(this).find('div').first();
        var clasename = clasecirculo.attr('class');
        var clasepaso = $(this).attr('class');
        var numeropasos = $('.paso').length
        var el = [...document.getElementsByClassName("paso")];
        

        var test = function(el) {
            console.log(el);
            var clasecirculo = $(el).find('div').first();
            var clasename = clasecirculo.attr('class');
            var ident = clasecirculo.attr('id');
            
            if ($(el).hasClass('pasoclic') && clasename == 'circle circleclic')
            {
                console.log('Tiene la clase mk ' + clasename)
                console.log('Tiene el id ' + ident)
                $(el).addClass('pasoclicked')
                $(clasecirculo).addClass('circleclicked');
                /*document.querySelector(ident).innerText = 'x';*/
                document.getElementById(ident).innerHTML= '&#10003;';

               

            }
            else if (clasename == 'circle circleclic')
            {
                console.log("YO cre que si puedo cambiar la clase del circulo")
            }
        }
        el.forEach(test);
            

        
        
    });

});


/*Con esta funcion cambia el color en el primer clic*/


$(function() {
    $('.paso').click(function() {
        var clasecirculo = $(this).find('div').first();
        var clasename = clasecirculo.attr('class');
        var clasepaso = $(this).attr('class');
        var numeropasos = $('.paso').length
        //var notasdiv = $('.notas')            
        //notasdiv.css({"width": "25%"});
        document.getElementById("notas").style.height = "100%";
        document.getElementById("notas").style.width = "25%";
        document.getElementById("containertarjetas").style.width = "50%";
        if (clasepaso == 'paso')
        {
            console.log('esta es la clase del paso: ' + clasepaso);
            console.log('esta es la clase del circulo ' + clasename);
            console.log('El numero de pasos son: ' + +numeropasos);
            $(clasecirculo).addClass('circleclic');
            $(this).addClass('pasoclic');
            console.log("Encontre que tiene clase paso y voy a ponerlo azul")
            console.log("Esta es la clase de las notas" + notas)
            
            //document.getElementById("containertarjetas").innerHTML = "Paso2.html";
            //$("#containertarjetas").load("Paso2.html");
            //$("#notas").load("Notas2.html");
            //$.get("pasos/Paso2.html", {},
            //function (returnedHtml) {
            //    $("#containertarjetas").html(returnedHtml);
            //});
            //$.get( "Paso8.html", function( data ) {
            //    $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
            //  });
            


            
          }
        else if (clasepaso == 'paso pasoclic')
        {
            console.log("Parece que si uso el hasclass y tiene la clase pasoclic")
            /*var clasepasoclic = $(this).attr('class');*/
            console.log(clasepasoclic);
            /*$(this).addClass('pasoclicked');*/

        }
        else
          {  
              console.log('No encontre esa clase');            
          }
    });

});

/* Funcion para actulizar el contenido*/

$(function(){
    $('body').on('click', '.paso', function() {
        var idpaso = $(this).attr('id');
        console.log('logro obtener el id para cargar el contenido ' + idpaso);
        if(idpaso == 'paso_1')
        {
            $.get( "Paso1.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas1.html", function(data){
                $(".notas").html(data);
            });
    

        }
        else if (idpaso == 'paso_2')
        {
            $.get( "Paso2.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas2.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_3')
        {
            $.get( "Paso3.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas3.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_4')
        {
            $.get( "Paso4.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas4.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_5')
        {
            $.get( "Paso5.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas5.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_6')
        {
            $.get( "Paso6.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas6.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_7')
        {
            $.get( "Paso7.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas7.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_8')
        {
            $.get( "Paso8.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas8.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'paso_9')
        {
            $.get( "Paso9.html", function( data ) {
                $( ".containertarjetas" ).html( data );

                //alert( "Load was performed." );
              });
            $.get("Notas9.html", function(data){
                $(".notas").html(data);
            });

        }
        else
        {
            console.log("---")

        }
        
      });

});


/* fin de la funcion que cambia el color en el primer clic*/




$(function(){
    $('body').on('click', '.mapa-paso', function() {
        var idpaso = $(this).attr('id');
        console.log('logro obtener el id para cargar el contenido ' + idpaso);
        document.getElementById("notas").style.height = "100%";
        document.getElementById("notas").style.width = "25%";
        document.getElementById("containertarjetas").style.width = "50%";
        if(idpaso == 'mapa-paso-1')
        {
            $.get( "Paso1.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas1.html", function(data){
                $(".notas").html(data);
            });
    

        }
        else if (idpaso == 'mapa-paso-2')
        {
            $.get( "Paso2.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas2.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-3')
        {
            $.get( "Paso3.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas3.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-4')
        {
            $.get( "Paso4.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas4.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-5')
        {
            $.get( "Paso5.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas5.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-6')
        {
            $.get( "Paso6.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas6.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-7')
        {
            $.get( "Paso7.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas7.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-8')
        {
            $.get( "Paso8.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas8.html", function(data){
                $(".notas").html(data);
            });

        }
        else if (idpaso == 'mapa-paso-9')
        {
            $.get( "Paso9.html", function( data ) {
                $( ".containertarjetas" ).html( data );

                //alert( "Load was performed." );
              });
            $.get("Notas9.html", function(data){
                $(".notas").html(data);
            });

        }
        else
        {
            console.log("---")

        }
    });
});


$(function(){
    $('body').on('click', '.boton_next', function() {
        var idpaso = $(this).attr('id');
        console.log('logro obtener el id para cargar el contenido ' + idpaso);
        document.getElementById("notas").style.height = "100%";
        document.getElementById("notas").style.width = "25%";
        
        if(idpaso == 'next-paso-2')
        {
            $.get( "Paso2.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas2.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-3')
        {
            $.get( "Paso3.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas3.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-4')
        {
            $.get( "Paso4.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas4.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-5')
        {
            $.get( "Paso5.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas5.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-6')
        {
            $.get( "Paso6.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas6.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-7')
        {
            $.get( "Paso7.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas7.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-8')
        {
            $.get( "Paso8.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas8.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'next-paso-9')
        {
            $.get( "Paso9.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas9.html", function(data){
                $(".notas").html(data);
            });
        }
        else
        {
            console.log('No llegue')
        }


    });
});



$(function(){
    $('body').on('click', '.boton_back', function() {
        var idpaso = $(this).attr('id');
        console.log('logro obtener el id para cargar el contenido ' + idpaso);
        document.getElementById("notas").style.height = "100%";
        document.getElementById("notas").style.width = "25%";
        if(idpaso == 'back-paso-1')
        {
            $.get( "Paso1.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas1.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-2')
        {
            $.get( "Paso2.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas2.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-3')
        {
            $.get( "Paso3.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas3.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-4')
        {
            $.get( "Paso4.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas4.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-5')
        {
            $.get( "Paso5.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas5.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-6')
        {
            $.get( "Paso6.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas6.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-7')
        {
            $.get( "Paso7.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas7.html", function(data){
                $(".notas").html(data);
            });
        }
        if(idpaso == 'back-paso-8')
        {
            $.get( "Paso8.html", function( data ) {
                $( ".containertarjetas" ).html( data );
                //alert( "Load was performed." );
              });
              $.get("Notas8.html", function(data){
                $(".notas").html(data);
            });
        }
        else
        {
            console.log('No llegue')
        }


    });
});


$(function(){
    $('body').on('click', '.more', function() {
        // cambiar la visibilidad de complete
    $(".complete").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});


$(function(){
    $('body').on('click', '.more-5', function() {
        // cambiar la visibilidad de complete
    $(".complete-5").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-7', function() {
        // cambiar la visibilidad de complete
    $(".complete-7").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-9', function() {
        // cambiar la visibilidad de complete
    $(".complete-9").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-10', function() {
        // cambiar la visibilidad de complete
    $(".complete-10").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-16', function() {
        // cambiar la visibilidad de complete
    $(".complete-16").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-17', function() {
        // cambiar la visibilidad de complete
    $(".complete-17").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-18', function() {
        // cambiar la visibilidad de complete
    $(".complete-18").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-19', function() {
        // cambiar la visibilidad de complete
    $(".complete-19").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-20', function() {
        // cambiar la visibilidad de complete
    $(".complete-20").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-21', function() {
        // cambiar la visibilidad de complete
    $(".complete-21").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-22', function() {
        // cambiar la visibilidad de complete
    $(".complete-22").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-26', function() {
        // cambiar la visibilidad de complete
    $(".complete-26").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-27', function() {
        // cambiar la visibilidad de complete
    $(".complete-27").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-29', function() {
        // cambiar la visibilidad de complete
    $(".complete-29").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-31', function() {
        // cambiar la visibilidad de complete
    $(".complete-31").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-33', function() {
        // cambiar la visibilidad de complete
    $(".complete-33").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-34', function() {
        // cambiar la visibilidad de complete
    $(".complete-34").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-35', function() {
        // cambiar la visibilidad de complete
    $(".complete-35").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-38', function() {
        // cambiar la visibilidad de complete
    $(".complete-38").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-39', function() {
        // cambiar la visibilidad de complete
    $(".complete-39").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-41', function() {
        // cambiar la visibilidad de complete
    $(".complete-41").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-42', function() {
        // cambiar la visibilidad de complete
    $(".complete-42").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-43', function() {
        // cambiar la visibilidad de complete
    $(".complete-43").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-44', function() {
        // cambiar la visibilidad de complete
    $(".complete-44").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-45', function() {
        // cambiar la visibilidad de complete
    $(".complete-45").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-46', function() {
        // cambiar la visibilidad de complete
    $(".complete-46").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-47', function() {
        // cambiar la visibilidad de complete
    $(".complete-47").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-48', function() {
        // cambiar la visibilidad de complete
    $(".complete-48").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-49', function() {
        // cambiar la visibilidad de complete
    $(".complete-49").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-50', function() {
        // cambiar la visibilidad de complete
    $(".complete-50").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-51', function() {
        // cambiar la visibilidad de complete
    $(".complete-51").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-52', function() {
        // cambiar la visibilidad de complete
    $(".complete-52").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-53', function() {
        // cambiar la visibilidad de complete
    $(".complete-53").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-59', function() {
        // cambiar la visibilidad de complete
    $(".complete-59").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-67', function() {
        // cambiar la visibilidad de complete
    $(".complete-67").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function(){
    $('body').on('click', '.more-69', function() {
        // cambiar la visibilidad de complete
    $(".complete-69").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
        
    });
});

$(function() {
    $('.tarjeta').click(function() {
      $('.section2').removeClass('section2');
      $(this).addClass('section2');
      $(this).siblings('div').css({"opacity": 0.2});
      var notarel = $(this).find('h3');
      var clasenotarel = notarel.attr('class');
      var idnotarel = notarel.attr('id');
      if(clasenotarel == 'titulonotarel')
      {
          console.log(notarel.attr('class'))
          console.log('NO lo tengo ' + clasenotarel)
          console.log('El id de la nota relacionada es: ' + idnotarel)
          if(idnotarel == 'notarel_1')
          {
            //var notarelacionada = $('#' + horaInicial);
            var notarelacionada = $('#nota_1');
            console.log(notarelacionada)
            //notarelacionada.css('background-color','#639')
            $(notarelacionada).siblings('.nota').css({"opacity": 0.2});
            $('#tarjeta_6, #nota_1').connections();

          }       
      }
   
      

      
      //$(".container2").addClass('newcontainer2');
      //$(".container2").css({"background-color": "rgba(0,0,0,0.9)"});
      //$(".container2").css('z-index', 10);
    });
    
    $("body").click(function(e) {
          //if (e.target.class == "parenttarjetas" || $(e.target).parents(".parenttarjetas").size()) 
          if (e.target.class == "parenttarjetas" || $(e.target).parents(".parenttarjetas").length) 
          {
               //This triggers if you click on them
          }
          else
          {     
               //This triggers if you click outside of them
             $(".container2").css({"background-color": "rgba(0,0,0,0)"});
             $('.tarjeta').css({"opacity": 1});
             $('.nota').css({"opacity": 1});
             $('.section2').removeClass('section2');
             $('#tarjeta_6').connections('remove');
          }
    });
    
});

//-----------------funcion orginal resaltar nota--------------------------------

/*$(function() {
    $('.tarjeta').click(function() {
      $('.section2').removeClass('section2');
      $(this).addClass('section2');
      $(this).siblings('div').css({"opacity": 0.2});
      //$(".container2").addClass('newcontainer2');
      //$(".container2").css({"background-color": "rgba(0,0,0,0.9)"});
      //$(".container2").css('z-index', 10);
    });
    
    $("body").click(function(e) {
          if (e.target.class == "parenttarjetas" || $(e.target).parents(".parenttarjetas").size()) 
          {
               //This triggers if you click on them
          }
          else
          {     
               //This triggers if you click outside of them
             $(".container2").css({"background-color": "rgba(0,0,0,0)"});
             $('.tarjeta').css({"opacity": 1});
             $('.section2').removeClass('section2');
          }
    });
    
});*/

//$(function() {
//    $('ol.tarjeta').on("click", "li", function(){ 
//     alert($(this).find("li").text());
//    });
//});
