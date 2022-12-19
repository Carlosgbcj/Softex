const  expresso  =  requer ( 'expresso' )
 aplicativo  const =  expresso ( )

const  db  =  requer ( './bd' )

app . get ( '/' ,  async  ( req ,  res )  =>  {
    res . enviar ( 'Página inicial' )
} ) ;

app . ouvir ( 8080 )