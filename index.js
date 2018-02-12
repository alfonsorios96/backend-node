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
    response.send('Welcome to ASO Services simulated by AutoAlerta Seguros SOS because we are upset and can not work !.');
});

app.post('/QSRV_A02/TechArchitecture/mx/grantingTicket/V02', services.gtZonaPublica);
app.post('/QSRV_A02/TechArchitecture/mx/grantingTicket/V02', services.gtZonaPrivada);

app.post('/SRVS_A02/MBFSTA00/V01', services.mbfsta00);
app.post('/SRVS_A02/MBFSTA01/V01', services.mbfsta01);
app.post('/SRVS_A02/MBFSTA02/V01', services.mbfsta02);
app.post('/SRVS_A02/MBFSTA03/V01', services.mbfsta03);
app.post('/SRVS_A02/MBFSTA04/V01', services.mbfsta04);

app.post('/SRVS_A02/carInsurancePolicies/V01/listCoverages', services.listCoverages);
app.post('/SRVS_A02/carInsurancePolicies/V01/listCarInsurancePolicies', services.listCarInsurancePolicies);
app.post('/SRVS_A02/carInsurancePolicies/V01/requestEventAttention', services.requestEventAttention);
app.post('/SRVS_A02/carInsurancePolicies/V01/updateInfo', services.updateInfo);
app.post('/SRVS_A02/financialDashboards/V02?$filter=(productType==TT)', services.financialDashboards);

app
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
