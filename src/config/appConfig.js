
let config = undefined
try{
    config = require("../../config/config")
} catch(err){
    config = {}
}

export default {
    baseUrl: config.default.baseUrl,
    copyRight: '@ 2020 - Digital Creation. Todos los derechos reservados'
}