import express from 'express';
import config from 'config'
import log from './logger'
import routes from './routes'
import connect from './db/connect'
import cors from 'cors'

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.listen(port, host, () => {
    log.info(`Server running at http://${host}:${port}`);
    connect();
    routes(app);
})