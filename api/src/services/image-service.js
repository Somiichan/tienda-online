const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const db = require('../models');
const ImageConfiguration = db.ImageConfiguration;
const Image = db.Image;

module.exports = class ImageService {
    uploadImage = async (images) => {
        const result = [];

        const files = images.file.map((file) => {
            const filename = file.filename.replace(/[_ ]/g, '-');
            return { ...file, filename };
        });

        for (const file of files) {
            const fileTmpPath = file.path;
            const fileName = file.filename;
            const extensionName = path.extname(fileName);
            const fileWithoutExtension = path.basename(fileName, extensionName);
            const targetDirectoryOriginal = path.join(__dirname, './../storage/images/gallery/original');
            const targetDirectoryThumbnail = path.join(__dirname, './../storage/images/gallery/thumbnail');
            const targetPathOriginal = path.join(targetDirectoryOriginal, `${fileWithoutExtension}.webp`);
            const targetPathThumbnail = path.join(targetDirectoryThumbnail, `${fileWithoutExtension}.webp`);

            let uploadedFileName;

            if (await this.fileExists(targetPathOriginal)) {
                const currentDateTime = new Date().toISOString().replace(/[-:.]/g, '');
                const newFileName = `${fileWithoutExtension}-${currentDateTime}`;
                const newTargetPathOriginal = path.join(targetDirectoryOriginal, `${newFileName}.webp`);
                const newTargetPathThumbnail = path.join(targetDirectoryThumbnail, `${newFileName}.webp`);

                uploadedFileName = await this.checkAndSaveFile(fileTmpPath, newTargetPathOriginal, newTargetPathThumbnail);
            } else {
                uploadedFileName = await this.checkAndSaveFile(fileTmpPath, targetPathOriginal, targetPathThumbnail);
            }

            result.push(uploadedFileName);
        }

        console.log('All images uploaded successfully!');
        console.log('Uploaded files:', result);
        return result;
    };

    checkAndSaveFile = async (fileTmpPath, targetPathOriginal, targetPathThumbnail) => {
        try {
            const file = await fs.readFile(fileTmpPath);
            const fileFormat = await sharp(file).toFormat('webp').toBuffer();
            const fileResize = await sharp(file).toFormat('webp').resize(135, 135).toBuffer();

            await Promise.all([
                fs.writeFile(targetPathOriginal, fileFormat),
                fs.writeFile(targetPathThumbnail, fileResize),
                fs.unlink(fileTmpPath),
            ]);

            console.log(`Image ${targetPathOriginal} uploaded successfully!`);
            
            const uploadedFileName = path.basename(targetPathOriginal);
            return uploadedFileName;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };

    fileExists = async (filePath) => {
        try {
            await fs.access(filePath);
            return true;
        } catch (error) {
            return false;
        }
    };

    resizeImages = async (entity, entityId, images) => {
        for (const image of images) {
            const configurations = await ImageConfiguration.findAll({
                where: {
                name: image.name,
                entity: entity,
                },
            });
      
            const jsonConfigurations = configurations.map((configuration) => {
                const { _previousDataValues, ...jsonConfiguration } = configuration.toJSON();
                return jsonConfiguration;
            });
      
            const width = jsonConfigurations.map((configuration) => configuration.widthPx);
            const height = jsonConfigurations.map((configuration) => configuration.heightPx);
        }
    }

    deleteImages = async filename => {

    }

    getThumbnails = async (limit, offset) => {

    }
}