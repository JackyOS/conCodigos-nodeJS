var pool = require('./bd'); //vamos a trabajar con la base de datos



//con esto listamos/traemos todas las novedades
async function getNovedades(){
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

//con esto, agregamos una nueva novedad
// Usamos el try y catch para que nos avise si no puede agregar una novedad
async function insertNovedad(obj){
    try{
        var query = 'insert into novedades set ?'; 
        //inserta cada valor agregado (titulo, subtitulo...) que completamos en agregar.hbs
        var rows = await pool.query(query,[obj]); 
        //traemos un array [] de elementos (titulo, subtitulo, cuerpo...)
        return rows;


    } catch(error){
        console.log(error);
        throw error;
    }
}


//sirve para eliminar novedades -- borro la fila que elijo
async function deleteNovedadById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query,[id])
    return rows;
}




//modificar cuenta de dos partes: primero me traigo la novedad que quiero modificar y luego actualizo la modificación
//traigo la novedad que quiero borrar
async function getNovedadById(id){
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query,[id]);
    return rows[0];
}
//actualizo la novedad
async function modificarNovedadById(obj, id) {
    try{
    var query = "update novedades set ? where id = ?";
    var rows = await pool.query(query,[obj, id]);
    return rows;

    } catch (error){
        throw error
    }
}

// buscador
async function getNovedadesBuscadas(palabraBuscada){
    // var query = `select * from novedades where titulo regexp '${palabraBuscada}' or subtitulo regexp '${palabraBuscada}' or cuerpo regexp '${palabraBuscada}' `   NO ENCUENTRA PALABRAS CON TILDE -SI LA BUSCAMOS SIN TILDE-
      
    var query = `select * from novedades where titulo like '%${palabraBuscada}%' or '%${palabraBuscada}' or '${palabraBuscada}%' or subtitulo like '%${palabraBuscada}%' or '%${palabraBuscada}' or '${palabraBuscada}%' or cuerpo like '%${palabraBuscada}%' or '%${palabraBuscada}' or '${palabraBuscada}%'`


    var rows = await pool.query(query);    
    return rows;
}


module.exports = {getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById, getNovedadesBuscadas}
