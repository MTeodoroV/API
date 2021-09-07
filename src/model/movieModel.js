import db from '../config/database';

export function addMovie(name, director, year, genre_id) {
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

export function searchAll() {
    const query = `SELECT * FROM movie`;

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

export function getMovie(id) {
    const query = `SELECT * FROM movie WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                console.log(result)
                resolve(result);
            }
        })
    })
}
