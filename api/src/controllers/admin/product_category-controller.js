const db = require("../../models");
const ProductCategory = db.ProductCategory;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    ProductCategory.create(req.body).then(data => {

      res.status(200).send(data);

    }).catch(err => {
        if(err.errors){
            res.status(422).send({
            message: err.errors
            });
        }else{
            res.status(500).send({
            message: "Se ha producido un error al crear la categoría del producto."
            });
        }
    });
};

exports.findAll = (req, res) => {

    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 10;
    let offset = (page - 1) * limit;

    let whereStatement = {};
    let condition = 
        Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    ProductCategory.findAndCountAll({
        where: condition,
        attributes: ['id', 'name', 'visible'],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
    }).then(result => {

        result.meta = {
            total: result.count,
            pages: Math.ceil(result.count / limit),
            currentPage: page
        };

      res.status(200).send(result);

    }).catch(err => {
        res.status(500).send({
            message: "Se ha producido un error al recuperar las categorías de productos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    ProductCategory.findByPk(id).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
            message: `No se puede encontrar la categoría del producto con el id=${id}.`
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: "Se ha producido un error al recuperar la categoría del producto con el id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    ProductCategory.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
            message: "La categoría del producto se ha actualizado correctamente."
            });
        } else {
            res.status(404).send({
            message: `No se puede actualizar la categoría del producto con el id=${id}. Tal vez no se encontró la categoría o el cuerpo de la solicitud está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Se ha producido un error al actualizar la categoría del producto con el id=" + id
        });
    });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    ProductCategory.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
            message: "La categoría del producto se ha eliminado correctamente."
            });
        } else {
            res.status(404).send({
            message: `No se puede eliminar la categoría del producto con el id=${id}. Tal vez no se encontró la categoría.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Se ha producido un error al eliminar la categoría del producto con el id=" + id
        });
    });
}; 