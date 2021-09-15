import { add, list, get, remove, update } from '../model/favoritesModel';

export function addFavorites(req, res) {
  add(req.body.movie_id, req.body.series_id, req.body.account_id).then((response) => {
    return res.status(200).send({ message: 'Adicionado aos favoritos' });
  }).catch((error) => {
    return res.status(500).send({ message: 'Erro ao tentar adicionar aos favoritos :(', error })
  })
}

export function findAll(req, res) {
  list().then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  });
}

export function getFavoritesById(req, res) {
  get(req.params.id).then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  })
}

export function updateFavorites(req, res) {
  update(req.params.id, req.body.movie_id, req.body.series_id, req.body.account_id)
  .then((response) => {
    return res.status(200).send({ message: 'Favorito atualizado com sucesso! :)'});
  }).catch((error) => {
    return res.status(404).send({ message: 'Erro ao tentar atualizar os favoritos! :(', error });
  })
}

export function deleteFavorites(req, res) {
  remove(req.params.id).then((response) => {
    return res.status(200).send({ message: 'Favorito removido' });
  }).catch((error) => {
    return res.status(404);
  })
}
