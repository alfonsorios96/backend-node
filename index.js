'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').load();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const services = require('./services');

app.get('/', (request, response) => {
    response.send('Welcome');
});

app.post('/QSRV_A02/TechArchitecture/mx/grantingTicket/V02', services.myFunction);

app
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
