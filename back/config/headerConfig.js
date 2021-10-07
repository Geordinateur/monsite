//const helmet = require('helmet'); 

/**
 * @name initialization
 * @description Initialise les header 
 * pour répondre aux probleme de sécurité (helmet)
 * pour accepter le CORS
 * @param {*} app 
 */

const initialization = (app) => {
//    app.use(helmet());

    app.use((req,res,next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");   
        next(); 
    })
}

module.exports = { initialization }