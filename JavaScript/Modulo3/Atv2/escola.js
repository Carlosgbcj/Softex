var  readlineSync  =  require ( 'readline-sync' ) ;

var  nome  =  input ( 'Digite o seu nome: ' ) ;

console . log ( saudacao ( ) ) ;

var  nota1  =  input ( questionFloat ( nome  +  ' informe sua nota 1: ' ) ) ;
var  nota2  =  input ( questionFloat ( nome  +  ' informe sua nota 2: ' ) ) ;
var  nota3  =  input ( questionFloat ( nome  +  ' informe sua nota 3: ' ) ) ;

var  mídia  =  mídia ( nota1 ,  nota2 ,  nota3 ) ;

console . log ( nome  +  ' sua média é: '  +  media ) ;

var  aprovacao  =  ( mídia )  =>  {
    if  ( media  >=  7.0 )  return  "Aprovado"
    senao  retorne  "Reprovado"
} ;

console . log ( nome  +  'você foi'  +  aprovação ( media ) ) ;

função  saudação ( )  {
    return  "Olá"  +  nome ;
}

função  mídia ( n1 ,  n2 ,  n3 )  {
    retornar  ( n1  +  n2  +  n3 )  /  3 ;
}