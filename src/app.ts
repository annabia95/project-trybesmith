import express from 'express';
import routers from './routers';
import httpErrorMiddleware from './middlewares/http.erro.middleware';

const app = express();

app.use(express.json());
app.use(routers);
app.use(httpErrorMiddleware);

export default app;
