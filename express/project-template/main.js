const app = require('./index');
const config = require('./app-config');
const PORT = config.main.port;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});