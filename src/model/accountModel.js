import db from '../config/database';

export function add(name, email, password, avatar) {
    const query = `INSERT INTO account(name, email, password, avatar) 
    VALUES ('${name}', '${email}', '${password}', '${avatar}')`;

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
    const query = `SELECT * FROM account`;

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
    const query = `SELECT * FROM account WHERE id = ${id}`;

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

export function update(id, name, email, avatar) {
    const query = `UPDATE account SET name='${name}', email='${email}', avatar='${avatar}' WHERE id = ${id}`;

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
    const query = `DELETE FROM account WHERE id = ${id}`;

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
