const db = require('../../models')
const Image = db.Image;
const Op = db.Sequelize.Op;
const ImageService = require('../../services/image-service')

exports.create = async (req, res) => {
    try {
        const result = await new ImageService().uploadImage(req.files)
        res.status(200).send({
            message: 'Images uploaded successfully',
            files: result
        });
    } catch (error) {
        res.status(500).send({
        message: error.message || 'Algún error ha surgido al insertar el dato.',
        errors: error.errors
        })
    }
}

exports.findAll = async (req, res) => {

    // let page = req.query.page || 1;
    // let limit = parseInt(req.query.size) || 10;
    // let offset = (page - 1) * limit;

    try {
        const result = await new ImageService().getThumbnails();
        res.status(200).send(result);
    }catch (error) {
        res.status(500).send({
            message: error.message || 'Algún error ha surgido al recuperar las imágenes.',
            errors: error.errors
        });
    }

    // let whereStatement = {};
    // let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    // Image.findAndCountAll({
    //     where: condition, 
    //     attributes: ['id', 'imageConfigurationId', 'entityId', 'entity', 'name', 'originalFilename', 'resizedFilename', 'title', 'alt', 'languageAlias', 'mediaQuery', 'latencyMs'],
    //     limit: limit,
    //     offset: offset,
    //     order: [['createdAt', 'DESC']]
    // })
    // .then(result => {

    //     result.meta = {
    //         total: result.count,
    //         pages: Math.ceil(result.count / limit),
    //         currentPage: page
    //     };

    //     res.status(200).send(result);

    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.errors || "Algún error ha surgido al recuperar los datos."
    //     });
    // });
};

exports.findOne = async (req, res) => {
    const fileName = req.params.filename
  
    const options = {
        root: __dirname + '../../../storage/images/gallery/thumbnail/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
  
    res.sendFile(fileName, options)
}

exports.update = (req, res) => {

    const id = req.params.id;

    Image.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al actualiazar la id=" + id
        });
    });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    Image.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido borrado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    });
};