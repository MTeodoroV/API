import db from '../config/database';

export function add(movie_id, series_id, account_id) {
    const query = `INSERT INTO wish_list(movie_id, series_id, account_id) 
    VALUES (${movie_id}, ${series_id}, ${account_id})`;

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
    const query = `SELECT wish_list.id, wish_list.movie_id AS filme, wish_list.series_id 
    AS serie, wish_list.account_id AS conta FROM wish_list 
    JOIN movie JOIN series JOIN account 
    ON (movie.id = wish_list.movie_id || 
    series.id = wish_list.series_id) &&
    account.id = wish_list.account_id;`;

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
    const query = `SELECT wish_list.id, wish_list.movie_id AS filme, wish_list.series_id 
    AS serie, wish_list.account_id AS conta FROM wish_list 
    JOIN movie JOIN series JOIN account 
    ON (movie.id = wish_list.movie_id || 
    series.id = wish_list.series_id) &&
    account.id = wish_list.account_id WHERE id = ${id}`;

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

export function update(id, movie_id, series_id, account_id) {
    const query = `UPDATE wish_list SET movie_id=${movie_id}, series_id=${series_id},
    account_id=${account_id} WHERE id = ${id}`;

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
    const query = `DELETE FROM wish_list WHERE id = ${id}`;

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
