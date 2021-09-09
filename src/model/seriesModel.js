import db from '../config/database';

export function add(name, seasons, year, finished, genre_id) {
    const query = `INSERT INTO series(name, seasons, year, finished, genre_id) 
    VALUES ('${name}', ${seasons}, '${year}', ${finished}, ${genre_id})`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function list() {
    const query = `SELECT series.id, series.name, series.seasons, series.year, series.finished, genre.name AS genero
    FROM series INNER JOIN genre ON genre.id = series.genre_id`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

export function get(id) {
    const query = `SELECT * FROM series WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function update(id, name, seasons, year, finished, genre_id) {
    const query = `UPDATE series SET name='${name}', seasons=${seasons},
    year='${year}',  finished=${finished}, genre_id=${genre_id} WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function remove(id) {
    const query = `DELETE FROM series WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}
