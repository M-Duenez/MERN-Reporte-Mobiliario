import mysql from  'mysql';
import {promisify} from 'util';
import {database} from './keys.js';

export const db = mysql.createPool(database);

db.getConnection((error, connection) => {
    if (error) {
        if(error.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(error.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS MANY CONNECTIONS');
        }
        if(error.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if(connection){ 
        connection.release();
        console.log('DATABASE IS CONNECTED', database['database'])
        return;
    }

});

db.query = promisify(db.query);
