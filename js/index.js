var web_service = "https://serviciosgeovisor.igac.gov.co:8080/Geovisor/";
var loading;






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
    