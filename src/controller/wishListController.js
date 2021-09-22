import { add, list, get, remove, update } from '../model/wishListModel';

export function addWishList(req, res) {
  add(req.body.movie_id, req.body.series_id, req.body.account_id).then((response) => {
    return res.status(200).send({ message: 'Adicionado a lista de desejo' });
  }).catch((error) => {
    return res.status(500).send({ message: 'Erro ao tentar adicionar a lista de desejo :(', error })
  })
}

export function findAll(req, res) {
  list().then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  });
}

export function getWishListById(req, res) {
  get(req.params.id).then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  })
}

export function updateWishList(req, res) {
  update(req.params.id, req.body.movie_id, req.body.series_id, req.body.account_id)
  .then((response) => {
    return res.status(200).send({ message: 'Lista de desejo atualizado com sucesso! :)'});
  }).catch((error) => {
    return res.status(404).send({ message: 'Erro ao tentar atualizar a lista de desejo! :(', error });
  })
}

export function deleteWishList(req, res) {
  remove(req.params.id).then((response) => {
    return res.status(200).send({ message: 'Item da lista de desejo removido' });
  }).catch((error) => {
    return res.status(404);
  })
}
