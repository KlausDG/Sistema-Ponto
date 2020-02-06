const {User} = require('../models')

module.exports = {
    async register(req, res) {
        try { //Tenta criar um usuário.
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) { //Se não conseguir, manda mensagem
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}