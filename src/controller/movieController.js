import { searchAll, addMovie, getMovie } from '../model/movieModel';

export function add(req, res) {
  addMovie(req.body.name, req.body.director, req.body.year, req.body.genre_id).then((response) => {
    return res.status(200).send({ message: 'Filme adicionado com sucesso! :)' });
  }).catch((error) => {
    return res.status(500).send({ message: 'Erro ao adicionar filme! :(', error })
  })
}

export function findAll(req, res) {
  searchAll().then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  });
}

export function getMovieById(req, res) {
  getMovie(req.params.id).then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  })
}
