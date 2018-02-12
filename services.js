/*
* @description: Gets public tsec
* */
exports.gtZonaPublica = (request, response) => {
    let body = {
        "authentication": {
            "userID": "ZM10062",
            "consumerID": "10000062",
            "authenticationType": "04",
            "authenticationData": [{
                "idAuthenticationData": "password",
                "authenticationData": [
                    "NTlkODAzOTI2NzIz"
                ]
            }]
        },
        "backendUserRequest": {
            "userId": "",
            "accessCode": "",
            "dialogId": ""
        }
    };

    const res = {
        "authenticationResponse": {
            "authenticationState": "OK",
            "authenticationData": []
        }
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('tsec', '000000000000000000');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Gets private tsec
* */

exports.gtZonaPrivada = (request, response) => {
    let body = {
        "authentication": {
            "userID": "5540890150",
            "consumerID": "10000068",
            "authenticationType": "02",
            "authenticationData": [{
                "idAuthenticationData": "password",
                "authenticationData": [
                    "147258"
                ]
            }]
        },
        "backendUserRequest": {
            "userId": "",
            "accessCode": "5540890150",
            "dialogId": ""
        }
    };
    const res = {
        "authenticationResponse": {
            "authenticationState": "OK",
            "authenticationData": []
        }
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('tsec', '000000000000000000');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Gets policies list
* */

exports.listCarInsurancePolicies = (request, response) => {
    let body = {
        "header": {
            "aapType": "dasda4544",
            "dateRequest": "2016-08-04 13:01:50:000000",
            "channel": "1",
            "subChannel": "2",
            "branchOffice": "CONFIN",
            "managementUnit": "sucursal",
            "user": "usuario",
            "idSession": "3232-3232",
            "idRequest": "1212-121212-12121-212",
            "dateConsumerInvocation": "06-08-2016 00:00:00:000000"
        },
        "listCarInsurancePolicy": [{
            "certificate": "1",
            "numberPolicy": "855621000Y"
        }]
    };
    const res = {
        "carInsurancePolicy": [{
            "account": {
                "accountNumber": "***********20196",
                "accountType": {
                    "catalogItemBase": {
                        "name": "TARJETA DE CREDITO"
                    }
                }
            },
            "subsidary": "SEGUROS BANCOMER, S.A DE C.V",
            "coverage": {
                "coverageType": {
                    "catalogItemBase": {
                        "name": "AMPLIA"
                    }
                },
                "serviceTypes": []
            },
            "isFleet": "0",
            "owner": {
                "contactData": {},
                "person": {
                    "name": "CLAUDIA",
                    "lastName": "LOZA",
                    "mothersLastName": "LOPEZ"
                },
                "isInternal": "0",
                "isVIP": "0"
            },
            "contractor": {
                "contactData": {},
                "person": {
                    "name": "CLAUDIA",
                    "lastName": "LOZA",
                    "mothersLastName": "LOPEZ"
                }
            },
            "certificate": "1",
            "numberPolicy": "855621000Y",
            "vehicle": {
                "vehicle": {
                    "brandCar": {
                        "catalogItemBase": {
                            "id": "13",
                            "name": "FIAT"
                        }
                    },
                    "subBrand": {
                        "catalogItemBase": {
                            "id": "1",
                            "name": "500"
                        }
                    },
                    "carModel": {
                        "catalogItemBase": {
                            "name": "2015"
                        }
                    },
                    "plates": "CAXD677",
                    "serialNumber": "3N1CN7AD2DK413404",
                    "engineNumber": "HR16791551G",
                    "versionCar": {
                        "catalogItemBase": {
                            "id": "8"
                        }
                    }
                }
            },
            "idPolicy": "6815863",
            "status": "ACT",
            "validityPeriod": {
                "startDate": "2017-05-28T00:00:00.000-0500",
                "endDate": "2016-05-28T00:00:00.000-0500"
            }
        }]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Gets coverages list
* */

exports.listCoverages = (request, response) => {
    let body = {
        "header": {
            "aapType": "dasda4544",
            "dateRequest": "2016-08-06 00:00:00:000000",
            "channel": "1",
            "subChannel": "2",
            "branchOffice": "CONFIN",
            "managementUnit": "sucursal",
            "user": "usuario",
            "idSession": "3232-3232",
            "idRequest": "1212-121212-12121-212",
            "dateConsumerInvocation": "2016-08-06 00:00:00:000000"
        },
        "carInsurancePolicy": {
            "certificate": "1",
            "numberPolicy": "855621000Y",
            "idPolicy": ""
        }
    };
    const res = {
        "coverages": [{
            "catalogItemBase": {
                "id": "DAMA",
                "name": "Daños Materiales"
            },
            "insuredValue": "Valor Comercial Al Momento Del Siniestro",
            "premium": {
                "currency": {
                    "code": "PES"
                },
                "amount": "5318.8"
            },
            "deductible": "5 %",
            "serviceTypes": [{
                "catalogItemBase": {
                    "id": "1",
                    "name": "Gasolina"
                }
            },
                {
                    "catalogItemBase": {
                        "id": "2",
                        "name": "Paso de corriente"
                    }
                },
                {
                    "catalogItemBase": {
                        "id": "3",
                        "name": "Cambio de llanta"
                    }
                },
                {
                    "catalogItemBase": {
                        "id": "4",
                        "name": "cerrajero"
                    }
                },
                {
                    "catalogItemBase": {
                        "id": "5",
                        "name": "grua"
                    }
                }
            ]
        },
            {
                "catalogItemBase": {
                    "id": "ROCR",
                    "name": "Rotura De Cristales"
                },
                "insuredValue": "Reposición Del Cristal. Deducible Sobre El Valor Del Cristal",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "0"
                },
                "deductible": " 20 %",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "ROTO",
                    "name": "Robo Total"
                },
                "insuredValue": "Valor Comercial Al Momento Del Siniestro",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "2380.28"
                },
                "deductible": "10 %",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "RCBI",
                    "name": "Responsabilidad Civil Bienes"
                },
                "insuredValue": "$ 250,000.00 Por Evento",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "298.23"
                },
                "deductible": " ",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "RCPE",
                    "name": "Responsabilidad Civil Personas"
                },
                "insuredValue": "$ 250,000.00 Por Evento",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "121.69"
                },
                "deductible": " ",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "ERCP",
                    "name": "Responsabilidad Civil En Exceso Por Muerte A Terceros"
                },
                "insuredValue": "$ 2,000,000.00 Por Evento",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "139.4"
                },
                "deductible": " ",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "GMOC",
                    "name": "Gastos Médicos A Ocupantes"
                },
                "insuredValue": "$ 200,000.00 Por Evento",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "252.21"
                },
                "deductible": " ",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "ASLE",
                    "name": "Asistencia Legal"
                },
                "insuredValue": "Amparado Sin Límite De Eventos",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "77.56"
                },
                "deductible": " ",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            },
            {
                "catalogItemBase": {
                    "id": "AUVI",
                    "name": "Auxilio Vial"
                },
                "insuredValue": "Amparado Hasta 3 Eventos Por Año",
                "premium": {
                    "currency": {
                        "code": "PES"
                    },
                    "amount": "116.05"
                },
                "deductible": " ",
                "serviceTypes": [{
                    "catalogItemBase": {
                        "id": "1",
                        "name": "Gasolina"
                    }
                },
                    {
                        "catalogItemBase": {
                            "id": "2",
                            "name": "Paso de corriente"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "3",
                            "name": "Cambio de llanta"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "4",
                            "name": "cerrajero"
                        }
                    },
                    {
                        "catalogItemBase": {
                            "id": "5",
                            "name": "grua"
                        }
                    }
                ]
            }
        ]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Asks for update policies information.
* */

exports.updateInfo = (request, response) => {
    let body = {
        "header": {
            "aapType": "dasda4544",
            "dateRequest": "2016-08-06 00:00:00:000000",
            "channel": "1",
            "subChannel": "2",
            "branchOffice": "CONFIN",
            "managementUnit": "sucursal",
            "user": "usuario",
            "idSession": "3232-3232",
            "idRequest": "1212-121212-12121-212",
            "dateConsumerInvocation": "2016-08-06 00:00:00:000000"
        },
        "listCarInsurancePolicy": [{
            "certificate": "1",
            "numberPolicy": "8176002OZF"
        },
            {
                "certificate": "1",
                "numberPolicy": "855621000Y"
            }
        ]
    };
    const res = {
        "listCarInsurancePolicy": [{
            "coverage": {
                "serviceTypes": [],
                "isUpdate": "1"
            },
            "numberPolicy": "8176002OZF",
            "collectionData": {
                "receipts": [{
                    "isUpdate": "1"
                }]
            },
            "isUpdate": "1"
        },
            {
                "coverage": {
                    "serviceTypes": [],
                    "isUpdate": "0"
                },
                "numberPolicy": "855621000Y",
                "collectionData": {
                    "receipts": [{
                        "isUpdate": "0"
                    }]
                },
                "isUpdate": "0"
            }
        ]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Activates policies
* */

exports.mbfsta00 = (request, response) => {
    let body = {
        "listInsurance": [{
            "insurancenumber": "855621000Y",
            "insuranceid": "6815863",
            "certificate": "9843",
            "status": "ACT",
            "startdatevalidity": "2016-05-16",
            "enddatevalidity": "2017-05-17",
            "accounttype": "Tarjeta de Credito",
            "accountnumber": "4912838009720196",
            "subsidiary": "SEGUROS BANCOMER",
            "isfleet": "0",
            "isinternal": "0",
            "isvip": "0",

            "vehicle": [{
                "plates": "CAXD688",
                "model": "2016",

                "brand": [{
                    "id": "0001",
                    "name": "Nissan"
                }],

                "subbrand": [{
                    "id": "0011",
                    "name": "Sentra"
                }],

                "version": [{
                    "id": "0111",
                    "name": "Super equipado"
                }]
            }],

            "isowner": "1",

            "driver": [{
                "name": "Ricardo Yael",
                "lastname": "Valdez",
                "secondlastname": "Altamirano",
                "email": "ricardo.valdez@sngular.team",
                "cellphone": "5545146779",
                "rfc": "VAAR911026M78"
            }]

        }],
        "listDevice": [{
            "model": "Galaxy s7 edge",
            "manufacturer": "Samsung",
            "so": "Android",
            "version": "6.0",
            "carrier": "Telcel",
            "serie": "xasass12"
        }],
        "versionApp": "v1.0.6"
    };
    const res = {
        "activationlist": [{
            "activationcode": "1VRNS17WK",
            "activationid": "5a4577020cf2b2327adac263",
            "insurancenumber": "855621000Y",
            "certificate": "9843"
        }]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Reports an assistance or accident to APX
* */

exports.mbfsta01 = (request, response) => {
    let body = {
        "insurancenumber": "855621000Y",
        "certificate": "9843",
        "activationid": "58dc4d0b0cf2a48363487ae6",
        "serie": "xasass12",
        "driver": [{
            "name": "Ricardo Yael",
            "lastname": "Valdez",
            "secondlastname": "Altamirano",
            "email": "ricardo.valdez@sngular.team",
            "cellphone": "5545146779",
            "rfc": "VAAR911026",
            "isintern": "0"
        }],
        "coordinates": [{
            "latitude": "19.426793",
            "longitude": "-99.166816"
        }],
        "isaccident": "0",
        "coveragelist": [{
            "internalcode": "002",
            "description": "Cristales",
            "amountinsured": "60000",
            "deductible": "5000",
            "insurancepremium": [{
                "amount": "50000",
                "codebadge": "0002"
            }],
            "servicelist": [{
                "internalcode": "002",
                "description": "Critales"
            }]
        }],
        "address": [{
            "country": "MX",
            "state": "DF",
            "neighborhood": "Tepalcates",
            "city": "DF",
            "town": "IZTAPALAPA",
            "zipcode": "09220",
            "street": "CENTRAL",
            "outdoornumber": "16"
        }],
        "accidentdate": "2017-02-23"
    };
    const res = {
        "reportid": "514501894555",
        "reportkey": "490288218",
        "accidentnumber": "514501894555"
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Updates driver information
* */

exports.mbfsta02 = (request, response) => {
    let body = {
        "activationcode": "1VRNS02SS",
        "driver": [{
            "name": "CLAU",
            "lastname": "LOZA",
            "secondlastname": "LOPEZ",
            "cellphone": "55555555555",
            "email": ""
        }],
        "device": [{
            "serie": "",
            "version": "7.1.1",
            "model": "Moto X Play",
            "manufacturer": "motorola",
            "carrier": "AT&T",
            "so": "Android"
        }]
    };
    const res = {
        "result": "OK"
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Gets static information
* */

exports.mbfsta03 = (request, response) => {
    let body = {};
    const res = {
        "listgeneralinformation": [{
            "theme": [{
                "internalcode": "001",
                "title": "&amp;#191;Qu&amp;#233; hacer en caso de accidente?&amp;#10;",
                "text": "&amp;lt;b&amp;gt;1.&amp;lt;/b&amp;gt; Haz uso de la herramienta desde la pantalla principal para enviar los datos de tu accidente y poderte atender con mayor rapidez.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;2.&amp;lt;/b&amp;gt; Permanece en calma.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;3.&amp;lt;/b&amp;gt; Enciende tus luces intermitentes.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;4.&amp;lt;/b&amp;gt; No te muevas ni intentes mover a personas que se encuentren heridas.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;5.&amp;lt;/b&amp;gt; Si no recibes la llamada por parte de nuestros ejecutivos, por favor marca el n&amp;#250;mero de atenci&amp;#243;n 01800 URGENTE (01800 874 36 83) o abre el men&amp;#250; de CONTACTO dentro de la aplicaci&amp;#243;n y utiliza los botones de marcado r&amp;#225;pido.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;6.&amp;lt;/b&amp;gt; No te muevas del lugar de los hechos, hasta que la autoridad as&amp;#237; lo indique.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;7.&amp;lt;/b&amp;gt; No intentes discutir ni argumentar con las otras personas involucradas en el accidente.",
                "icon": "circle_info_alert",
                "modificationdate": "2017-08-22"
            },
                {
                    "internalcode": "002",
                    "title": "&amp;#191;C&amp;#243;mo funciona la aplicaci&amp;#243;n?",
                    "text": "Al presionar el bot&amp;#243;n en la pantalla principal de la aplicaci&amp;#243;n, &amp;#233;sta intentar&amp;#225; acceder a la geo-localizaci&amp;#243;n de tu m&amp;#243;vil, siempre y cuando tengas activado el servicio de GPS y/o se lo hayas permitido a la aplicaci&amp;#243;n.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;A partir del mensaje de confirmaci&amp;#243;n que recibas, nuestra &amp;#225;rea de atenci&amp;#243;n a accidentes se pondr&amp;#225; en contacto contigo al tel&amp;#233;fono que proporcionaste en la activaci&amp;#243;n de la aplicaci&amp;#243;n.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Si tienes alguna duda respecto a tu p&amp;#243;liza, no dudes contactar a nuestro servicio a clientes en el men&amp;#250; &amp;lt;u&amp;gt;CONTACTO&amp;lt;/u&amp;gt; dentro de la aplicaci&amp;#243;n, para resolver tu cuesti&amp;#243;n.",
                    "icon": "circle_info_question",
                    "modificationdate": "2017-08-22"
                },
                {
                    "internalcode": "003",
                    "title": "L&amp;#237;mite de responsabilidad",
                    "text": "En relaci&amp;#243;n a los productos ofrecidos a trav&amp;#233;s del presente medio, Seguros BBVA Bancomer, S.A. de C.V., Grupo Financiero BBVA Bancomer, (en adelante Seguros BBVA Bancomer) &amp;#250;nicamente se obliga a cumplir con lo se&amp;#241;alado en las condiciones de contrataci&amp;#243;n de dichos productos, mismas que puedes consultar en la p&amp;#225;gina de Internet de Seguros BBVA Bancomer y con las que te encuentras de acuerdo sin que medie vicio de la voluntad alguno.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Seguros BBVA Bancomer no resultar&amp;#225; obligado y en consecuencia, no ser&amp;#225; responsable, de cualquier otro se&amp;#241;alamiento que no se encuentre expresamente en dichas condiciones de contrataci&amp;#243;n.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;As&amp;#237; mismo, Seguros BBVA Bancomer se obliga a mantener la debida confidencialidad respecto a toda la informaci&amp;#243;n que tu le proporciones directamente y que &amp;#233;sta te requiera para la contrataci&amp;#243;n del producto solicitado, y a cumplir con las obligaciones que para &amp;#233;l se se&amp;#241;alen y a las cuales resulte obligado, en su calidad de Responsable en el Tratamiento de los Datos Personales, se&amp;#241;aladas en Ley Federal de Protecci&amp;#243;n de Datos Personales en Posesi&amp;#243;n de los Particulares, para los fines de identificaci&amp;#243;n, operaci&amp;#243;n, administraci&amp;#243;n y comercializaci&amp;#243;n de productos, manifestando como su domicilio para el efecto anterior, al ubicado en Montes Urales 424, 1er. Piso, Lomas de Chapultepec, Ciudad de M&amp;#233;xico; tu puedes conocer el Aviso de Privacidad completo ingresando a la p&amp;#225;gina de Internet www.segurosbancomer.com.mx.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Seguros BBVA Bancomer, se obliga a cumplir, en relaci&amp;#243;n con los productos ofrecidos a trav&amp;#233;s del presente medio, con las disposiciones aplicables se&amp;#241;aladas en la Ley General de Instituciones y Sociedades Mutualistas de Seguros y en la Ley Sobre el Contrato de Seguro.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;As&amp;#237; mismo, Seguros BBVA Bancomer no ser&amp;#225; responsable de los da&amp;#241;os y perjuicios causados por el acceso y uso del presente medio, as&amp;#237; como de la informaci&amp;#243;n obtenida a trav&amp;#233;s del mismo para la adquisici&amp;#243;n de productos de Seguros BBVA Bancomer, y, en general, no responder&amp;#225; de cualquier otro tipo de responsabilidad que surja, tanto en materia civil, penal, laboral, mercantil o de cualquier otra naturaleza jur&amp;#237;dica, que no se encuentre directamente relacionada con las condiciones de contrataci&amp;#243;n de los productos.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Seguros BBVA Bancomer no responder&amp;#225; de la informaci&amp;#243;n contenida en el presente medio que no sea la que corresponda a las condiciones de contrataci&amp;#243;n de dichos productos, ni de la seguridad de la informaci&amp;#243;n que proporcione a trav&amp;#233;s del presente medio electr&amp;#243;nico, por lo que no garantizar&amp;#225; ni aceptar&amp;#225;, bajo ning&amp;#250;n supuesto, responsabilidad alguna que derive de p&amp;#233;rdidas de informaci&amp;#243;n o datos personales, de cualquier otro mal funcionamiento relacionado con el uso y comunicaci&amp;#243;n del presente medio o de cualquier problema relacionado con los medios de pago que se utilicen para la contrataci&amp;#243;n de los productos.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Tu renuncia a cualquier acci&amp;#243;n, demanda, requerimiento, proceso, procedimiento y/o en general, a iniciar cualquier controversia, en contra de Seguros BBVA Bancomer, que no se refieran exclusivamente con el contenido y obligaciones asumidas expresamente por esta &amp;#250;ltima en las condiciones de contrataci&amp;#243;n relacionadas directamente con el producto contratado.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Seguros BBVA Bancomer se reserva el derecho a modificar el presente aviso en cualquier momento, bastando la publicaci&amp;#243;n del mismo en el presente medio con las modificaciones realizadas, para tenerse por notificado a cualquier interesado.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;En caso de cualquier controversia que surja en relaci&amp;#243;n al presente aviso deber&amp;#225; resolverse por los Tribunales mercantiles competentes ubicados en Cuidad de M&amp;#233;xico.",
                    "icon": "circle_info_dissclosure",
                    "modificationdate": "2017-08-22"
                },
                {
                    "internalcode": "004",
                    "title": "Ayuda General",
                    "text": "&amp;lt;b&amp;gt;&amp;#191;Qu&amp;#233; debo hacer para realizar cambios en mi p&amp;#243;liza?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Para cualquier cambio o informaci&amp;#243;n sobre tu P&amp;#243;liza debes llamar a Servicio a Clientes a los tel&amp;#233;fonos &amp;#8220;1102 0000&amp;#8221; en el &amp;#193;rea Metropolitana y al &amp;#8220;01(55)110-20000&amp;#8221; del interior del pa&amp;#237;s. Con gusto te atenderemos.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;&amp;#191;Qu&amp;#233; debo de hacer en caso de accidente?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Utilizar esta aplicaci&amp;#243;n o comunicarte lo m&amp;#225;s pronto posible a Cabina de accidentes de Seguros Bancomer al 01800 URGENTE (01800 874 36 83) y esperar a que uno de nuestros ajustadores se presente en el lugar del accidente.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;&amp;#191;Qui&amp;#233;n me atiende en un accidente?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Contamos con una red a nivel nacional de m&amp;#225;s de 500 ajustadores para tus servicios, quienes acudir&amp;#225;n al lugar en donde tu te encuentres despu&amp;#233;s de llamar a cabina.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;&amp;#191;Qu&amp;#233; documentos tengo que entregarle al ajustador?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Tu P&amp;#243;liza y licencia de conducir.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;&amp;#191;Qu&amp;#233; pasa si tengo un accidente y yo no soy el culpable?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;En este caso el ajustador revisar&amp;#225; los da&amp;#241;os causados a tu veh&amp;#237;culo y te entregar&amp;#225; un pase para que te dirijas al taller de reparaci&amp;#243;n donde le dar&amp;#225;n el servicio a tu veh&amp;#237;culo.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;&amp;#191;Qu&amp;#233; pasa si tengo un accidente y soy el culpable?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;En este caso el ajustador revisar&amp;#225; los da&amp;#241;os causados a tu veh&amp;#237;culo y los da&amp;#241;os causados a los terceros involucrados en el accidente, se har&amp;#225; responsable de los da&amp;#241;os frente al tercero y te entregar&amp;#225; un pase para que  te dirijas al taller de reparaci&amp;#243;n donde le dar&amp;#225;n el servicio a tu veh&amp;#237;culo. Tendr&amp;#225;s que pagar deducible de tu p&amp;#243;liza contratada por los da&amp;#241;os a tu auto, el deducible se aplicar&amp;#225; en conformidad a las condiciones generales de la p&amp;#243;liza.&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;b&amp;gt;&amp;#191;Qu&amp;#233; pasa si me roban mi auto?&amp;lt;/b&amp;gt;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;Al llamar a Cabina de Seguros Bancomer un asesor te orientar&amp;#225; y acompa&amp;#241;ar&amp;#225; en la realizaci&amp;#243;n de los tr&amp;#225;mites ante las autoridades competentes. Al confirmarse el robo y proceder la indemnizaci&amp;#243;n, tendr&amp;#225;s que pagar un deducible de tu p&amp;#243;liza contratada, sobre el valor del veh&amp;#237;culo al momento del accidente.",
                    "icon": "circle_info_message",
                    "modificationdate": "2017-08-22"
                },
                {
                    "internalcode": "005",
                    "title": "Bit&amp;#225;cora de versiones",
                    "text": "&amp;lt;b&amp;gt;- Versi&amp;#243;n 2.1 - Septiembre 2017&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;- Nueva experiencia de usuario&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;- Activaci&amp;#243;n autom&amp;#225;tica de p&amp;#243;lizas&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;- Compartir p&amp;#243;lizas activas&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;- Solicitar asistencias amparadas por tu p&amp;#243;liza&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;- Consulta de beneficios de tu p&amp;#243;liza&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;&amp;lt;/b&amp;gt;",
                    "icon": "circle_info",
                    "modificationdate": "2017-08-22"
                }
            ]
        }]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Gets policies by activation code
* */

exports.mbfsta04 = (request, response) => {
    let body = {
        "insurancelist": [{
            "insurancenumber": "855621000Y",
            "certificate": "9843",
            "activationcode": "1VRNS02SS",
            "model": "2016",
            "activationid": "5a4511130cf2b2327adabe7f"
        }],
        "serie": "xasass12",
        "type": "0",
        "paginated": [{
            "size": "10",
            "index": "0"
        }]
    };
    const res = {
        "campo_1_insurancelist": [{
            "certificate": "9843",
            "accountnumber": "4912838009720196",
            "startdatevalidity": "2016-05-15",
            "enddatevalidity": "2017-05-16",
            "accounttype": "Tarjeta de Credito",
            "isfleet": "0",
            "isinternal": "0",
            "isvip": "0",
            "device": [{
                "serie": "xasass12",
                "so": "Android",
                "carrier": "Telcel",
                "model": "Galaxy s7 edge",
                "manufacturer": "Samsung",
                "version": "6.0"
            }],
            "vehicle": [{
                "plates": "CAXD688",
                "subbrand": [{
                    "name": "Sentra",
                    "id": "0011"
                }],
                "brand": [{
                    "name": "Nissan",
                    "id": "0001"
                }],
                "model": "2016",
                "version": [{
                    "name": "Super equipado",
                    "id": "0111"
                }]
            }],
            "subsidiary": "Seguros Bancomer",
            "versionapp": "v1.0.6",
            "insurancenumber": "855621000Y",
            "activationid": "5a4511130cf2b2327adabe7f",
            "activationcode": "1VRNS02SS",
            "insuranceid": "6815863",
            "status": "ACT",
            "driver": [{
                "cellphone": "5545146779",
                "isowner": "1",
                "email": "",
                "lastname": "LOZA",
                "rfc": "",
                "secondlastname": "LOPEZ",
                "name": "CLAU"
            }]
        }]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Reports an assistance or accident to Call Center
* */

exports.requestEventAttention = (request, response) => {
    let body = {
        "header":
            {
                "aapType": "dasda4544",
                "dateRequest": "2016-08-06 00:00:00:000000",
                "channel": "1",
                "subChannel": "2",
                "branchOffice": "CONFIN",
                "managementUnit": "sucursal",
                "user": "usuario",
                "idSession": "3232-3232",
                "idRequest": "1212-121212-12121-212",
                "dateConsumerInvocation": "2016-08-06 00:00:00:000000"
            },
        "carInsurancePolicy":
            {
                "numberPolicy": "8176002OZF",
                "subsidary": "Seguros Bancomer",
                "vehicle":
                    {
                        "vehicle":
                            {
                                "description": "",
                                "carModel":
                                    {
                                        "catalogItemBase":
                                            {
                                                "name": "2008"
                                            }
                                    },
                                "brandCar":
                                    {
                                        "catalogItemBase":
                                            {
                                                "name": "NISSAN"
                                            }
                                    },
                                "plates": "YZM4436",
                                "subBrand":
                                    {
                                        "catalogItemBase":
                                            {
                                                "name": "TIIDA"
                                            }
                                    }
                            }
                    },
                "certificate": "1",
                "event":
                    {
                        "eventType":
                            {
                                "catalogItemBase":
                                    {
                                        "name": "asistencia"
                                    }
                            },
                        "ubication":
                            {
                                "streetName": "303 Calzada General Mariano Escobedo",
                                "outdoorNumber": "",
                                "zipCode": "11520",
                                "suburb":
                                    {
                                        "state":
                                            {
                                                "catalogItemBase":
                                                    {
                                                        "name": "Ciudad de México"
                                                    }
                                            },
                                        "city":
                                            {
                                                "catalogItemBase":
                                                    {
                                                        "name": "Ciudad de México"
                                                    }
                                            },
                                        "neighborhood":
                                            {
                                                "catalogItemBase":
                                                    {
                                                        "name": "Granada"
                                                    }
                                            },
                                        "county":
                                            {
                                                "catalogItemBase":
                                                    {
                                                        "name": "Granada"
                                                    }
                                            }
                                    }
                            },
                        "eventData":
                            {
                                "assistance":
                                    {
                                        "supplies": [
                                            "Cerrajeria"
                                        ]
                                    }
                            }
                    },
                "owner":
                    {
                        "isVIP": "false",
                        "isInternal": "false"
                    },
                "driver":
                    {
                        "person":
                            {
                                "lastName": "ALONSO",
                                "name": "JUAN MANUEL",
                                "mothersLastName": "BUSTAMANTE"
                            },
                        "contactData":
                            {
                                "cellphone":
                                    {
                                        "telephoneNumber": "5572721213"
                                    }
                            }
                    }
            },
        "coordinate":
            {
                "longitude": "-99.1840502992272",
                "latitude": "19.4414392745851"
            }
    };
    const res = {
        "replyStatus": "1",
        "message": "",
        "numberRequest": "10802"
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description:
* */

exports.financialDashboards = (request, response) => {
    let body = {};
    const res = {};
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
};
