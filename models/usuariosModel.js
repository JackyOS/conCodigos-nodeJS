//modelo de usuario: armo lo que interacciona con la base de datos
var pool = require('./bd');
var md5 = require('md5');

async function getUserAndPassword(usuario, password) {
    try {  
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1'
        //con limit le pido que traiga un registro solo
        //hago la consulta al sql => le pido que me traiga todos los datos (id, user, pass) 
        //de la tabla de usuarios
        var row = await pool.query(query,[usuario, md5(password)]);
        return row[0]; //me aseguro que me traiga un registro

    } catch (error) {
        throw error
    }
}


module.exports = {getUserAndPassword}