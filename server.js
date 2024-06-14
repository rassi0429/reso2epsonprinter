const express = require('express');
const {SerialPort} = require('serialport');
const { transform } = require('receiptline');
const fs = require('fs');

const app = express();

fs.readFile("config.json", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading config file", err);
        return;
    }

    const printer = JSON.parse(data);

    fs.writeFileSync("config.json", JSON.stringify(printer));

    app.use(express.text());

    app.post('/', (req, res) => {
        const text = req.body;
        const opt = { baudRate: printer.baudRate, autoOpen: false, path: printer.host };
        const port = new SerialPort(opt);

        port.on('open', () => {
            const command = transform(text, printer);
            port.write(command, 'binary', (err) => {
                if (err) {
                    res.status(500).send('failure');
                } else {
                    port.drain(() => {
                        res.status(200).send('success');
                        port.close();
                    });
                }
            });
        });

        port.on('error', (err) => {
            res.status(500).send('failure');
        });

        port.open();
    });

    app.listen(printer.server.port, () => {
        console.log(`Server running at http://127.0.0.1:${printer.server.port}/`);
    });
});
