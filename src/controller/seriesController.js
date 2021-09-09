import { add, list, get, remove, update } from '../model/seriesModel';

export function addSeries(req, res) {
  add(req.body.name, req.body.seasons, req.body.year, req.body.finished, req.body.genre_id).then((response) => {
    return res.status(200).send({ message: 'Serie adicionado com sucesso! :)' });
  }).catch((error) => {
    return res.status(500).send({ message: 'Erro ao adicionar series! :(', error })
  })
}

export function findAll(req, res) {
  list().then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  });
}

export function getSeriesById(req, res) {
  get(req.params.id).then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  })
}

export function updateSeries(req, res) {
  update(req.params.id, req.body.name, req.body.seasons, req.body.year, req.body.finished, req.body.genre_id)
  .then((response) => {
    return res.status(200).send({ message: 'Serie atualizado com sucesso! :)'});
  }).catch((error) => {
    return res.status(404).send({ message: 'Erro ao tentar atualizar a serie! :(', error });
  })
}

export function deleteSeries(req, res) {
  remove(req.params.id).then((response) => {
    return res.status(200).send({ message: 'Serie removida' });
  }).catch((error) => {
    return res.status(404);
  })
}
