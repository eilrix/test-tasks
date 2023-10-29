import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { join } from 'path';

export function useSwagger(app: Express, port: number) {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Tasks API server',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${port}/api`,
        description: 'Development server',
      },
    ],
  };

  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: [join(process.cwd(), 'src/routes/*.ts')],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use(
    '/api/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
    }),
  );
}
