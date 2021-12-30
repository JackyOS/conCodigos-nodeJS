var pool = require('./bd');


//traigo la info de contacto.js y la guardo en la base de datos.
// guardo los mensajes que envían las personas en la parte de contacto.
async function insertMensaje(obj){
    try{
        var query = 'insert into contacto set ?'; 
        //inserta cada valor agregado (titulo, subtitulo...) que completamos en agregar.hbs
        var rows = await pool.query(query,[obj]); 
        //traemos un array [] de elementos (titulo, subtitulo, cuerpo...)
        return rows;


    } catch(error){
        console.log(error);
        throw error;
    }
}


//con esto listamos/traemos todas las novedades
async function getContactos(){
    var query = 'select * from contacto';
    var rows = await pool.query(query);
    return rows;
}



//sirve para eliminar contactos -- borro la fila que elijo
async function deleteContactoById(id){
    var query = 'delete from contacto where id = ?';
    var rows = await pool.query(query,[id])
    return rows;
}


module.exports =  {insertMensaje, getContactos, deleteContactoById}
