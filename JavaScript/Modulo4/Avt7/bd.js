const  Sequelize  =  require ( 'sequelize' )

const  sequelize  =  new  Sequelize ( 'cadastro' ,  'raiz' ,  '123467' ,  {
    host : 'localhost' ,
    dialeto : 'mysql'
} ) ;

sequelize . autenticar ( )
. então ( função ( ) {
    console . registro ( "Pegou" )
} ) . pegar ( função ( ) {
    console . log ( 'Deu merda' )
} )

módulo . exporta  =  sequelize ;