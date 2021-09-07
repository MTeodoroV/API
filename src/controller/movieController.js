import { searchAll } from '../model/movieModel';

export function findAll(req, res) {
    searchAll().then((response) => {
      return res.status(200).send(response);
    }).catch((error) => {
      return res.status(404);
    });
}
