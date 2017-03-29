$('document').ready(function(){
    $('#liSobre').click( function(){
        moverAteElemento("divSobre");
    });
    $('#liTrabalho').click( function(){
        moverAteElemento("divTrabalho");
    });
    $('#liEstudos').click( function(){
        moverAteElemento("divEstudos");
    });
    $('#liContato').click( function(){
        moverAteElemento("divContato");
    });
});


function moverAteElemento(id){
    $("html, body").animate({
         scrollTop: $('#'+id).offset().top
    }, 1000);
}

function moverAoTopo(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}