const { Router } = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const SwaggerRoutes = Router();
SwaggerRoutes.use('/', swaggerUi.serve);
SwaggerRoutes.get('/docs', swaggerUi.setup(swaggerDocument));
export default SwaggerRoutes;
//# sourceMappingURL=swagger.routes.js.map