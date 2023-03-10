const express = require('express'),
    mongoose = require('mongoose'),
    config = require('config'),
    chalk = require('chalk'),
    cors = require('cors'),
    initDatabase = require('./startUp/initDatabase'),
    routes = require('./routes'),
    path = require('path'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', cors(), routes);
app.use(
    cors({
        origin: ['http://localhost:3000/', 'gs://fow-test-images.appspot.com'],
        credentials: true,
    }),
);

const PORT = config.get('port') ?? 8080;
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client')));

    const indexPath = path.join(__dirname, 'client', 'index.html');
    app.get('*', (req, res) => {
        res.sendFile(indexPath);
    });
}
async function start() {
    try {
        mongoose.connection.once('open', () => {
            initDatabase();
        });
        await mongoose.connect(config.get('mongoUri'));
        app.listen(PORT, () =>
            console.log(chalk.green(`Server has been started on port ${PORT}...`)),
        );
    } catch (e) {
        console.log(chalk.red(e.message));
        process.exit(1);
    }
}

start();
