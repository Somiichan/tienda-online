const db = require("../../models");
const User = db.User;
const Op = db.Sequelize.Op;
const ImageService = require('../../services/image-service')
const TrackingService = require('../../services/tracking-service')

exports.create = async (req, res) => {
    try {
        const data = await User.create(req.body);
      
        if (req.body.images) {
            await new ImageService().resizeImages('user', data.id, req.body.images);
        }
      
        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.');
        }
        res.status(200).send(data);
    } catch (err) {
        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.');
        }
        res.status(500).send({
            message: err.errors || "Algún error ha surgido al insertar el dato."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        let page = req.query.page || 1;
        let limit = parseInt(req.query.size) || 5;
        let offset = (page - 1) * limit;

        const whereStatement = {}

        for (const key in req.query) {
            if (req.query[key] !== '' && key !== 'page' && key !== 'size') {
                whereStatement[key] = { [Op.substring]: req.query[key] }
            }
        }

        const condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {}

        const result = await User.findAndCountAll({
            where: condition,
            attributes: ['id', 'name', 'email'],
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']]
        });

        result.meta = {
            total: result.count,
            pages: Math.ceil(result.count / limit),
            currentPage: page
        };

        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.'); 
        }

        res.status(200).send(result);
    } catch (err) {
        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.');
        }
        res.status(500).send({
            message: err.errors || "Algún error ha surgido al recuperar los datos."
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await User.findByPk(id, {
            attributes: ['id', 'name', 'email'],
            include: [
                {
                    model: db.Image,
                    as: 'images',
                    where: { mediaQuery: 'xs' }
                }
            ]
        });

        if (data) {
            const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
            if (userTracked) {
                console.log('Usuario en seguimiento.');
            } else {
                console.log('Error al hacer seguimiento de usuario.');
            }

            res.status(200).send(data);
        } else {
            const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
            if (userTracked) {
                console.log('Usuario en seguimiento.');
            } else {
                console.log('Error al hacer seguimiento de usuario.');
            }
            res.status(404).send({
                message: `No se puede encontrar el elemento con la id=${id}.`
            });
        }
    } catch (err) {
        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.');
        }
        res.status(500).send({
            message: "Algún error ha surgido al recuperar la id=" + id
        });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;

        const num = await User.update(req.body, {
            where: { id: id }
        });

        if (num == 1) {
            const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
            if (userTracked) {
                console.log('Usuario en seguimiento.');
            } else {
                console.log('Error al hacer seguimiento de usuario.');
            }

            res.status(200).send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
            if (userTracked) {
                console.log('Usuario en seguimiento.');
            } else {
                console.log('Error al hacer seguimiento de usuario.');
            }
            res.status(404).send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    } catch (err) {
        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.');
        }
        res.status(500).send({
            message: "Algún error ha surgido al actualiazar la id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const num = await User.destroy({
            where: { id: id },
            include: [
                {
                    model: db.Image,
                    as: 'images',
                    where: { mediaQuery: 'xs' },
                }
            ]
        });

        if (num == 1) {
            const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
            if (userTracked) {
                console.log('Usuario en seguimiento.');
            } else {
                console.log('Error al hacer seguimiento de usuario.');
            }

            res.status(200).send({
                message: "El elemento ha sido borrado correctamente"
            });
        } else {
            const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
            if (userTracked) {
                console.log('Usuario en seguimiento.');
            } else {
                console.log('Error al hacer seguimiento de usuario.');
            }
            res.status(404).send({
                message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
            });
        }
    } catch (err) {
        const userTracked = await new TrackingService().userTracking(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        if (userTracked) {
            console.log('Usuario en seguimiento.');
        } else {
            console.log('Error al hacer seguimiento de usuario.');
        }
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    }
};