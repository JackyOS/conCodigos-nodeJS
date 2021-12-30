// Por un lado tenemos la base de datos en localhost (phpadmin),
// por otro lado tenemos nuestro proyecto (la pagina con codigos)
//tenemos que hacer un puente entre estas dos cosas. Este codigo genera ese puente.
// Logramos que se conecten, en base a los datos que generamos en el .env
//tenemos el host (localhost, en este caso), el nombre de la base de datos, el usuario y el pass.

var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});
// Conecto nuestro proyecto con la base de datos

pool.query = util.promisify(pool.query);

module.exports = pool;

