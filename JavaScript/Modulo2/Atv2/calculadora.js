função  somar ( )  {
    var  num1  =  parseFloat ( documento . getElementById ( "num1" ) . valor ) ;
    var  num2  =  parseFloat ( documento . getElementById ( "num2" ) . valor ) ;
    documento . getElementById ( "resultado" ) . innerHTML  =  "<b>Resultado: </b>"  +  ( num1  +  num2 ) ;
}

função  subtrair ( )  {
    var  num1  =  parseFloat ( documento . getElementById ( "num1" ) . valor ) ;
    var  num2  =  parseFloat ( documento . getElementById ( "num2" ) . valor ) ;
    documento . getElementById ( "resultado" ) . innerHTML  =  "<b>Resultado: </b>"  +  ( num1  -  num2 ) ;
}

função  multiplicar ( )  {
    var  num1  =  parseFloat ( documento . getElementById ( "num1" ) . valor ) ;
    var  num2  =  parseFloat ( documento . getElementById ( "num2" ) . valor ) ;
    documento . getElementById ( "resultado" ) . innerHTML  =  "<b>Resultado: </b>"  +  ( num1  *  num2 ) ;
}

função  dividir ( )  {
    tente  {
        var  num1  =  parseFloat ( documento . getElementById ( "num1" ) . valor ) ;
        var  num2  =  parseFloat ( documento . getElementById ( "num2" ) . valor ) ;
        if ( num2  ==  0 )  throw  "Não pode dividir por ZERO!"
        documento . getElementById ( "resultado" ) . innerHTML  =  "<b>Resultado: </b>"  +  ( num1  /  num2 ) ;
    }  pegar  ( erro )  {
        documento . getElementById ( "resultado" ) . innerHTML  =  "" ;
        alerta ( erro ) ;
    }
}