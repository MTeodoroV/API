import { add, list, get, remove, update } from '../model/movieModel';

export function addMovie(req, res) {
  add(req.body.name, req.body.director, req.body.year, req.body.genre_id).then((response) => {
    return res.status(200).send({ message: 'Filme adicionado com sucesso! :)' });
  }).catch((error) => {
    return res.status(500).send({ message: 'Erro ao adicionar filme! :(', error })
  })
}

export function findAll(req, res) {
  list().then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  });
}

export function getMovieById(req, res) {
  get(req.params.id).then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  })
}

export function updateMovie(req, res) {
  update(req.params.id, req.body.name, req.body.director, req.body.year, req.body.genre_id)
  .then((response) => {
    return res.status(200).send({ message: 'Filme atualizado com sucesso! :)'});
  }).catch((error) => {
    return res.status(404).send({ message: 'Erro ao tentar atualizar o filme! :(', error });
  })
}

export function deleteMovie(req, res) {
  remove(req.params.id).then((response) => {
    return res.status(200).send({ message: 'Filme removido' });
  }).catch((error) => {
    return res.status(404);
  })
}
