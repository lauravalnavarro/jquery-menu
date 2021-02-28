var count=0;
$('.nav').on('click','li', function() {
    //Se agrega al elemento li un atributo id con un valor autoincrementable
    $(this).attr("id",count++);
    //Se toma el id anterior que tiene la clase active removerla y asignarla al nuevo elemento
    idAnt=this.id - 1
    $('#'+idAnt).removeClass('active');
    //Al id anterior se le asigna el color negro en el elemento de link(a)
    $('#'+idAnt).children('a').css('color','#000');
    //Al nuevo elemento se le agrega la clase 'active'
    $(this).addClass('active');   
});

$('.nav li a').on('mouseover', function() {
    $(this).css('color','#EA178C');    
});

$('.nav').on('mouseleave','li', function() {
    if($(this).attr('class') !='active') {
        $(this).children('a').css('color','#000');
    }
});






