var count=0;
$('.nav').on('click','li', function() {
    //Se agrega al elemento li un atributo id con un valor autoincrementable
    $(this).attr("id",count++);
    //Se toma el id anterior que tiene la clase active para removerla y asignarla al nuevo elemento.
    idAnt=this.id-1
    $('#'+idAnt).removeClass('active');
    //Se cambia el elemento anterior a color negro.
    $('#'+idAnt).children('a').css('color','#000');
    //Se agrega la nuevo elemento seleccionado la clase 'active'
    $(this).addClass('active');   
});

$('.nav li a').on('mouseover', function() {
    $(this).css('color','#EA178C');    
});

$('.nav').on('mouseleave','li', function() {
    //Valida que si la clase es diferente a 'active' se cambia a color negro
    if($(this).attr('class') !='active') {
        $(this).children('a').css('color','#000');
    }
});






