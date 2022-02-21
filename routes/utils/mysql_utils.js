var mysql = require('mysql');

function MySqlUtils() {

}

MySqlUtils.prototype.getconnection = async function () {
    const getDbConnection =  mysql.createConnection({
        host: 'database-1.cyaqftykmspr.ap-south-1.rds.amazonaws.com',
        port: '3306',
        user: 'admin',
        password: '12345678',
        database: 'mydb',
    });
    return getDbConnection;
}

MySqlUtils.prototype.getCategories = async function () {
    var con = await this.getconnection();
    return new Promise((resolve, reject)=>{
        con.query("SELECT * FROM category_vehicle",  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
            con.end();
        });
    });



    console.log(result);

}


module.exports = MySqlUtils;
