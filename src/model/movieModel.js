import db from '../config/database';

export function searchAll() {
    const query = `SELECT * FROM movie`;

    return new Promise( (resolve, reject) => {
        db.query(query, (error, result) => {
            if (error)
                reject(error);
            else
                resolve(result);
        });
    });
}
