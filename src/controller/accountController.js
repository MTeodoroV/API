import { add, list, get, remove, update } from '../model/accountModel';
import bcrypt from 'bcryptjs';

export function addAccount(req, res) {
  add(req.body.name, req.body.email, bcrypt.hashSync(req.body.password), req.body.avatar).then((response) => {
    return res.status(200).send({ message: 'Conta criada com sucesso! :)' });
  }).catch((error) => {
    return res.status(500).send({ message: 'Erro ao tentar criar a conta! :(', error })
  })
}

export function findAll(req, res) {
  list().then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  });
}

export function getAccountById(req, res) {
  get(req.params.id).then((response) => {
    return res.status(200).send(response);
  }).catch((error) => {
    return res.status(404);
  })
}

export function updateAccount(req, res) {
  update(req.params.id, req.body.name, req.body.email, req.body.avatar)
  .then((response) => {
    return res.status(200).send({ message: 'Conta atualizado com sucesso! :)'});
  }).catch((error) => {
    return res.status(404).send({ message: 'Erro ao tentar atualizar a conta! :(', error });
  })
}

export function deleteAccount(req, res) {
  remove(req.params.id).then((response) => {
    return res.status(200).send({ message: 'Conta removida!' });
  }).catch((error) => {
    return res.status(404);
  })
}
