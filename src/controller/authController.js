import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config/secret';
import AuthModel  from '../model/authModel';

class AuthController {
	static Login(req, res) {
		AuthModel.findEmail(req.body.email).then((response) => {

			if (bcrypt.compareSync(req.body.password, response.password)) {
				const token = JWT.sign({
					id: response.id,
				}, config.secret, { expiresIn: 600 * 10 });

				res.status(200).send({ auth: true, token });
			} else {
				res.status(401).send({ auth: false, token: null });
			}
		}).catch((error) => {
			res.status(500).send({ message: 'Logado', error });
		});
	}

    static Logout(req, res) {
        try {
            res.status(200).send(JWT.destroy(token));
        } catch(error) {
            res.status(500).send({ message: 'Erro ao limpar o token', error });
            console.log(error)
        }
    }
}

export default AuthController;