const jimp = require('jimp')

async function blurImage(url){
    const image = await jimp.read(url)

    image.blur(10)
    .write('output.png')
}

blurImage("C:\\3rdYear\\Computational Photography\\Final-Project\\Computational-Photography\\blurimage\\Camera.png")