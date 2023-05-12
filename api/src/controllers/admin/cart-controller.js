const db = require("../../models");
const Cart = db.Cart;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    Cart.create(req.body).then((data) => {

        res.status(200).send(data);

    }).catch((err) => {
        res.status(500).send({
            message:
            err.errors || "Algún error ha surgido al insertar el dato en el carrito.",
        });
    });
};

exports.findAll = (req, res) => {

    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 10;
    let offset = (page - 1) * limit;

    let whereStatement = {};
    let condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {};

    Cart.findAndCountAll({
        where: condition,
        attributes: ["id", "client_id", "fingerprint_Id"],
        limit: limit,
        offset: offset,
        order: [["createdAt", "DESC"]],
    }).then((result) => {

        result.meta = {
            total: result.count,
            pages: Math.ceil(result.count / limit),
            currentPage: page,
        };

        res.status(200).send(result);

    }).catch((err) => {
        res.status(500).send({
            message: err.errors || "Algún error ha surgido al recuperar los datos del carrito.",
        });
    });
};

exports.findOne = (req, res) => {

  const id = req.params.id;

    Cart.findByPk(id).then((data) => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: `No se puede encontrar el carrito con el id=${id}.`,
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Algún error ha surgido al recuperar el carrito con el id=" + id,
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    Cart.update(req.body, {
        where: { id: id },
    }).then((num) => {
        if (num == 1) {
            res.status(200).send({
                message: "El carrito ha sido actualizado correctamente.",
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el carrito con el id=${id}. Tal vez no se ha encontrado el carrito o el cuerpo de la petición está vacío.`,
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Algún error ha surgido al actualizar el carrito con el id=" + id,
        });
    });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    Cart.destroy({
        where: { id: id },
    }).then((num) => {
        if (num == 1) {
            res.status(200).send({
                message: "El carrito ha sido borrado correctamente.",
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el carrito con el id=${id}. Tal vez no se ha encontrado el carrito.`,
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar el carrito con el id=" + id,
        });
    });
};