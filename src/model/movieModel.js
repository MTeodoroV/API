import db from '../config/database';

export function add(name, director, year, genre_id) {
    const query = `INSERT INTO movie(name, director, year, genre_id) 
    VALUES ('${name}', '${director}', '${year}', ${genre_id})`;

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
    const query = `SELECT movie.id, movie.name, movie.director, movie.year, genre.name AS genero
    FROM movie INNER JOIN genre ON genre.id = movie.genre_id`;

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
    const query = `SELECT * FROM movie WHERE id = ${id}`;

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

export function update(id, name, director, year, genre_id) {
    const query = `UPDATE movie SET name='${name}', director='${director}', 
    year='${year}', genre_id=${genre_id} WHERE id = ${id}`;

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
    const query = `DELETE FROM movie WHERE id = ${id}`;

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
