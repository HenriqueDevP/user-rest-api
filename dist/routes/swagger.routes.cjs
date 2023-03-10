"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerRoutes = void 0;
const { Router } = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
exports.SwaggerRoutes = Router();
exports.SwaggerRoutes.use('/', swaggerUi.serve);
exports.SwaggerRoutes.get('/docs', swaggerUi.setup(swaggerDocument));
exports.default = {
    SwaggerRoutes: exports.SwaggerRoutes
};
//# sourceMappingURL=swagger.routes.cjs.map