const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {

    uploadImage = async (images) => {
        const files = images.file.map((file) => {
          const filename = file.filename.replace(/[_ ]/g, "-");
          return { ...file, filename };
        });
      
        files.forEach(file => {
            const fileTmpPath = file.path
            const fileName = file.filename
            const extensionName = path.extname(fileName)
            const fileWithoutExtension = path.basename(fileName, extensionName)
            const targetPathOriginal = path.join(__dirname, './../storage/images/gallery/original', `${fileWithoutExtension}.webp`)
            const targetPathThumbnail = path.join(__dirname, './../storage/images/gallery/thumbnail', `${fileWithoutExtension}.webp`)
        
            const readFileAsync = async (fileTmpPath) => {
                try {
                    const data = await fs.readFile(fileTmpPath);
                    return data;
                } catch (err) {
                    throw err;
                }
            };

            const formatFile = async (file) => {
                const webpBuffer = await sharp(file).toFormat('webp').toBuffer();
                return webpBuffer;
            };

            const resizeFile = async (file) => {
                const resizedBuffer = await sharp(file).toFormat('webp').resize(135,135).toBuffer();
                return resizedBuffer;
            }

            const writeFileAsync = async (file, targetPath) => {
                try {
                await fs.writeFile(targetPath, file);
                return true;
                } catch (err) {
                throw err;
                }
            };

            const deleteTmpFile = async (fileTmpPath) => {
                try {
                  await fs.unlink(fileTmpPath);
                  return true;
                } catch (err) {
                  throw err;
                }
            };

            (async () => {
                try {
                    const file = await readFileAsync (fileTmpPath)
                    const fileFormat = await formatFile (file)
                    const resultFormat = await writeFileAsync (fileFormat, targetPathOriginal)

                    const fileResize = await resizeFile (file)
                    const resultResize = await writeFileAsync (fileResize, targetPathThumbnail)

                    if (resultFormat && resultResize) {
                        const tmpFileDeleted = deleteTmpFile(fileTmpPath)
                        console.log(tmpFileDeleted)
                    }

                } catch (err) {
                    console.error(err);
                }
            })()
        })
    }

    resizeImages = async (entity, entityId, images) => {
        
    }

    deleteImages = async filename => {

    }

    getThumbnails = async (limit, offset) => {

    }
}