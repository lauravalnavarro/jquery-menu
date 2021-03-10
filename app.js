var count=0;
$('a').on('click', function() {
    //Se quita la clase active selected (la clase selected se crea con el fin de diferenciar cual es el elemento seleccionado) a todos los elemento 'a'
    $('a').removeClass('active selected');
    //a todos los elementos 'a' diferentes al seleccionado se les asigna el color negro
    $('a').css({color:'#000'})
    //Al elemento seleccionado se le asigna la clase active selected para identificar cual ha sido seleccionado
    $(this).addClass('active selected'); 
    //Al elemento seleccionado se le asigna el color #EA178C
    $(this).css({color:'#EA178C'})
});

$('a').on('mouseover',function() {
    $(this).css({color:'#EA178C'});
})

$('a').on('mouseleave',function() {
    //Valida que si la clase es diferente a 'selected' se cambia a color negro y se remueva la clase active
    if($(this).hasClass('selected')===false) {
        $(this).removeClass('active');
        $(this).css({color:'#000'})
    }
})






