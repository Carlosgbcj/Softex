função  mídia ( )  {
    var  n1  =  parseFloat ( documento . getElementById ( "nota1" ) . valor ) ;
    var  n2  =  parseFloat ( documento . getElementById ( "nota2" ) . valor ) ;
    var  n3  =  parseFloat ( documento . getElementById ( "nota3" ) . valor ) ;
    var  mídia  =  ( n1 + n2 + n3 ) / 3 ;
    if ( média  >=  7.0 ) {
        documento . getElementById ( "mídia" ) . innerHTML  =  "<b>Mídia: </b>"  +  mídia  +  " | <b>APROVADO!</b>" ;
    } senão {
        documento . getElementById ( "mídia" ) . innerHTML  =  "<b>Mídia: </b>"  +  mídia  +  " | <b>REPROVADO!</b>" ;
    }
}

function  notaFaltante ( ) {
    var  n1  =  parseFloat ( document . getElementById ( "notafaltante1" ) . value ) ;
    var  n2  =  parseFloat ( document . getElementById ( "notafaltante2" ) . value ) ;
    var  n3  =  21  -  n1  -  n2 ;
    documento . getElementById ( "notaFaltante" ) . innerHTML  =  "<b>Falta Tira: </b>"  +  n3 ;
}