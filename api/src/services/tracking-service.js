const db = require('../models')
const UserTracker = db.UserTracker

module.exports = class UserService {

    userTracking = async (id, ip, recurso, metodo, estado) => {

        try {
            const body = {
                userId: id,
                userIp: ip,
                resource: recurso,
                method: metodo,
                status: estado
            };
    
            await UserTracker.create(body);
            return true;
        } catch (error) {
            console.error('Error en userTracking:', error);
            return false;
        }
    };

}