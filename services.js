"use strict";

const faker = require('faker');

let prepareResponse = (response, headers = new Map(), status = 200) => {
    response.statusCode = status;
    response.setHeader('Content-Type', 'application/json');
    for (let [key, value] of headers) {
        response.setHeader(key, value);
    }
    return response;
};

let getTsec = () => {
    return 'eJxt1EmPo1YUBeC/0uqt1cVosKXqkphngwEzbSIePDA8JgNm+vWpSEmURfbn3rM5+j79CWY/tPz3T5DhFKAJ8IvOyesvGifPvwDBML8uRVbAAmevRJb//BHAcar67vdP4g/859enUA1POIrpnH69gMPTlh8pxBvf7/dImqwopZLCSQ4eJaR+GQ7zvVjs9Xq5kHyLIT1+tqGYV3no2x2JlN5/NJmPX+YrI3KV5g7t25DdsoaN7rkeoUdasxiNzef2Ip00dXUmD4ynA/iJUNyEoGQpH2XeYXdlVapCRBMmeuLPm8FgAxXYSqdzwS0tT7eKqSwE8aCTY8x/hjEmEaoJ5kI+LErh5uAhqHS8ylIPoybYG/eox0ir3dl2eWViHcZ8GofDCpd9C023ubz9uKsU0ndl5aVAZbWkzVIXPyXAJNrSuk8NuNSbR54q6/5wuEhtjvEI3oS1tG5Aze+5vHAiQ1Vtb9PeK+qT4SFzVbljyFaN/nUp2RM9mlVPJycOo+sedJzcMWLjm+p4P1Gy7Zq+0EgaMY7he736Yhg68QPBk7LtLtQOY3e8M1UFOHWs/qB4bOtC4bjf00QYNswp+hHI9OHzdid1xSW1tKfu33Ql7T0cHrM61cKu6tx0t/J1NQPmSfFIZN2bNbV7nzxKp+1yrX7R8e4xnEvhteO2WVQXSi4RoGivL5LDbqag2o5pdeaQznpjM7jCa8kok7poyYRxzpfR6bgrtJY9SZvywUedQpOEhsE+c4J3eGd4WlENIFMOyDb3chPZc/7dJSfj3WVdf8Jv2ztUAzVjoVilfnivQBfrTKlVVaIGSxFgffWA67GbYnE3+musBJYxOzSqopL3Bh3TIALSiEfh2LlEPGziFne6ExBIuMq8MrzUBdsUCaSy17JG1O7+ZrYDmymbhbS29euFfwD8MZOoGlei9Eg9UaMggd8P2MHfKhR0It7HueJlxOAUj5EPoyQdrvFlPgviAjdqpg50c0BOb3SIHfxiylltzUVmL0o4qEBdj3EaEHij76LvmRcyVXbk4U0MjEN0RDx/du+6iUzZraBC7NA8x5bsixGPrrp/6CI8i3ybvG8rjEHvPY1aOFmEXBOL0t3MB4fOj8a3jC6SCDQ2wgZSPAnRkyXVnAcq8huS5xk6UGDL0u2p8MJ3aLyaiBWSjCvJwT9WVrDXLgu3eXj1Tb1LbENSTiqctCGFzLrJiJ3dNqGm6/VO5pma6zZoL9EZoPv6Ett3SSDgoVpoH/mt/P2J/QeWv5Ex4M41VTp9NRMAy/yRw48Wbh9ZVYzpx/yt2EfWpBnxz+m/8U+py8Z9mL/V4pqyH6v52X6JkgdziAm8gDmG4J2dNM+rrvzE/i/8if2F5NefZAK9sA==';
};

let getPrivateTsec = () => {
    return 'eJxt1EePq2YAheG/cjVbNEPHIHlGohnTe91EdDA2H6bDr8+NlERZZP+ezVk8V28q819y8f2RUQRVpBjziTJV/klkNPZJMwj6SaQYQeIFWpGX/ONXUI5TC/rvD/QP5OPnyrdDU45COqc/78ziCN2LJHRBDtuOxEmPUjyprOTkugRT6OHUllW/MAxNY9wL7pS4eYVC0RahZ/ZYJwHPf+YeQs8MJbCt7AyvRRVJYwujYtnyOtGVZBgN6HbcxP4elr6CYxAya1tEZs7J+SSOHW8wkUPU0BJ9sratFGBywuFRsIMyHqeHYPeYDJsFy4eICobcvrPprFtU0jb311kJtBI5UWpdQgGDqPhmYEFIl7p7UAuD4U7g7nq0oKkCGuhhvGLydrAbCdR5I5O59hCdrv0nTBdBL5qPN9pFRuqPtxSkCS3fmGyXDmUhDBksUMimdTEcYA7eT6BMXj5vo9Tfd8RlFFNkvM3YfTxUTipncnoXARdW8lllHo4D3Hiu9qYekMg2NXQz9yeKOop1bzzmOfJRMADg5msT3Gc+nWEbASVhEwbTkA+8KftC8edZW6O8GsROXjfjIDfhzGvZuVs8p7wREgPBhd5qzRzBMW8O6IFOrPsjsFynpV+9LKw+acVGmGG2AZ9yFCdZ3XUlAuPTjQvM8J3Qo6qKlTSJrOW0vUAROg1aRQtIVpJZdieSm94bjltSs1N4fQZFZm9KyAJ3BnXJOBWk7uU+bcIGdw+FJ+DchWOoefHwzMPs5m6hh6man5vgIs0eaQlq/AgIBqchvpBxCqrB7b22thQUHvs6NSNFRzd1TITeXhYSaf7Sm3CcA2SnecwW/buJ9VXNeLRCMxFjwzjPN4odYo963WAcco2IT2xaI+VTEwNpT1WmkE/crpsRmwS3MO/ybqLIy5qMV3e4mXe2Fl2NyqRIN30NWo7r/IfEPc3J2EA3KYbQG+uyMVYhuf49lOWLOSlw5y7jQjLggZtLaFz6DPy+tdLyTVseu1Q/vTfhU1RoQuimDl1Ky4zLiXPuoLBFMjMx7Jua83fvVsWVyzTQc41YuoxEz1jt1IxCWVDIgUHILieewg4DlkvkXG/h0SgRk6sgslHXUs24vgURpluO8pjtCtfKUJgPwCRLIrnja3nkLBs3g8dq2Vrqd0uJHw72xo/uNFzLvTSXGBZaVVLqQrLnPM6lsOhvKUUyDRut3FsOVzWwENNsGSAdAcLGm2nHZVnWk7Idp4W3o25gQoFrs08QsYe7Lja/21v9/X2F/4PM3+Co5cE+23T6eU5Zts5fRfn1KvevvK3G9Gv+LdpX/kxz9J/pv/lV7PPxGObfgrHPGozt3Lx+BNEtixLmOR62VN4lrbQo2r6+wv8XX+G/wPz5E/1qvGQ=';
};

let validateTsec = (request, accessModify = "public") => {
    let tsecRequest = request.get('tsec');
    if ((accessModify === "public" && tsecRequest === getTsec()) || (accessModify === "private" && tsecRequest === getPrivateTsec())) {
        return true;
    } else {
        return false;
    }
};

let generateRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

let generateRandomABC = () => {
    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return abc[generateRandomNumber(0, abc.length)];
};

let generateAccount = () => {
    let bean = "";
    for (let i = 1; i <= 5; i++) {
        let randomNumber = generateRandomNumber(0, 9);
        bean += randomNumber.toString();
    }
    let account = {
        accountNumber: `***********${bean}`,
        accountType: {
            catalogItemBase: {
                name: "CUENTA DE CHEQUE"
            }
        }
    };
    return account;
};

let generateNumberPolicy = () => {
    let numberPolicy = "";
    return numberPolicy;
};

let generatePolicy = () => {
    let policy = {
        "account": generateAccount(),
        "subsidary": "SEGUROS BANCOMER, S.A DE C.V",
        "coverage": {
            "coverageType": {
                "catalogItemBase": {
                    "name": "LIMITADA"
                }
            },
            "serviceTypes": []
        },
        "isFleet": "0",
        "owner": {
            "contactData": {
                "email": "CHIMASAPARRAL@GMAIL.COM"
            },
            "person": {
                "name": "CHIHUAHUA MADERERA, SA DE CV"
            },
            "isInternal": "0",
            "isVIP": "0"
        },
        "contractor": {
            "contactData": {},
            "person": {
                "name": "CHIHUAHUA MADERERA, SA DE CV"
            }
        },
        "certificate": "2",
        "numberPolicy": "716B01009L",
        "vehicle": {
            "vehicle": {
                "brandCar": {
                    "catalogItemBase": {
                        "id": "161",
                        "name": "TOYOTA"
                    }
                },
                "subBrand": {
                    "catalogItemBase": {
                        "id": "3",
                        "name": "CAMRY"
                    }
                },
                "carModel": {
                    "catalogItemBase": {
                        "name": "2007"
                    }
                },
                "plates": "SLB6270",
                "serialNumber": "4T1BE46K77U658603",
                "engineNumber": "2AZ8764935",
                "versionCar": {
                    "catalogItemBase": {
                        "id": "1",
                        "name": " AUT AA EE CD BA 4CIL 4PT"
                    }
                }
            }
        },
        "idPolicy": "8516351",
        "status": "ACT",
        "validityPeriod": {
            "startDate": "2018-01-04T00:00:00.000-0600",
            "endDate": "2017-01-04T00:00:00.000-0600"
        }
    };
    return policy;
};

const noTsecResponse = {
    "version": 1,
    "severity": "FATAL",
    "http-status": 500,
    "error-code": "98",
    "error-message": "Se ha producido un error al conectar con el servicio de cifrado",
    "consumer-request-id": "ac2999ce-64f0-4eef-8af0-d365de6cad12",
    "system-error-code": "serviceUnavailable",
    "system-error-description": "Se ha producido un error al conectar con el servicio de cifrado"
};


/*
* @description: Gets public tsec
* */
exports.gtZonaPublica = (request, response) => {
    const res = {
        "authenticationResponse": {
            "authenticationState": "OK",
            "authenticationData": []
        }
    };

    let headers = new Map();
    headers.set('tsec', getTsec());

    response = prepareResponse(response, headers);
    response.write(JSON.stringify(res));
    response.end();
};

/*
* @description: Gets private tsec
* */

exports.gtZonaPrivada = (request, response) => {
    const res = {
        "authenticationResponse": {
            "authenticationState": "OK",
            "authenticationData": []
        }
    };

    if (request.body.authenticationData[0].authenticationData[0] === "147258") {
        let headers = new Map();
        headers.set('tsec', getPrivateTsec());
        response = prepareResponse(response, headers);
    } else {
        response.statusCode = 500;
        response.write(JSON.stringify(noTsecResponse));
    }

    response.end();
};

/*
* @description: Gets policies list
* */

exports.listCarInsurancePolicies = (request, response) => {
    const POLICY_FLEET = '716B01009L';
    const POLICY_NOT_FLEET = '855621000Y';

    const resFormNonFleet = {
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
    const resFormFleet = {
        "carInsurancePolicy": [
            {
                "account": {
                    "accountNumber": "***********60017",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
                        }
                    }
                },
                "subsidary": "SEGUROS BANCOMER, S.A DE C.V",
                "coverage": {
                    "coverageType": {
                        "catalogItemBase": {
                            "name": "LIMITADA"
                        }
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {
                        "email": "CHIMASAPARRAL@GMAIL.COM"
                    },
                    "person": {
                        "name": "CHIHUAHUA MADERERA, SA DE CV"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "CHIHUAHUA MADERERA, SA DE CV"
                    }
                },
                "certificate": "2",
                "numberPolicy": "716B01009L",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "161",
                                "name": "TOYOTA"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "3",
                                "name": "CAMRY"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2007"
                            }
                        },
                        "plates": "SLB6270",
                        "serialNumber": "4T1BE46K77U658603",
                        "engineNumber": "2AZ8764935",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "1",
                                "name": " AUT AA EE CD BA 4CIL 4PT"
                            }
                        }
                    }
                },
                "idPolicy": "8516351",
                "status": "ACT",
                "validityPeriod": {
                    "startDate": "2018-01-04T00:00:00.000-0600",
                    "endDate": "2017-01-04T00:00:00.000-0600"
                }
            }
        ]
    };
    const resCellphone = {
        "carInsurancePolicy": [
            {
                "account": {
                    "accountNumber": "***************79373",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
                        }
                    }
                },
                "subsidary": "SEGUROS BANCOMER, S.A DE C.V",
                "coverage": {
                    "coverageType": {
                        "catalogItemBase": {}
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {},
                    "person": {
                        "name": "JACOREY3",
                        "lastName": "DEVINCENT",
                        "mothersLastName": "CASTENANOS"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "JACOREY3",
                        "lastName": "DEVINCENT",
                        "mothersLastName": "CASTENANOS"
                    }
                },
                "certificate": "1",
                "numberPolicy": "8967012013",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "183",
                                "name": "BAJAJ"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "1",
                                "name": "APELLIDO"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2016"
                            }
                        },
                        "plates": "NA",
                        "serialNumber": "NA",
                        "engineNumber": "NA",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "1"
                            }
                        }
                    }
                },
                "idPolicy": "9222834",
                "status": "ACT",
                "validityPeriod": {
                    "startDate": "2017-09-09T00:00:00.000-0500",
                    "endDate": "2016-09-09T00:00:00.000-0500"
                }
            },
            {
                "account": {
                    "accountNumber": "***************79374",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
                        }
                    }
                },
                "subsidary": "SEGUROS BANCOMER, S.A DE C.V",
                "coverage": {
                    "coverageType": {
                        "catalogItemBase": {}
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {},
                    "person": {
                        "name": "JACOREY4",
                        "lastName": "DEVINCENT",
                        "mothersLastName": "CASTENANOS"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "JACOREY4",
                        "lastName": "DEVINCENT",
                        "mothersLastName": "CASTENANOS"
                    }
                },
                "certificate": "1",
                "numberPolicy": "8967012014",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "183",
                                "name": "BAJAJ"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "1",
                                "name": "APELLIDO"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2016"
                            }
                        },
                        "plates": "NA",
                        "serialNumber": "NA",
                        "engineNumber": "NA",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "1"
                            }
                        }
                    }
                },
                "idPolicy": "9222835",
                "status": "ACT",
                "validityPeriod": {
                    "startDate": "2017-09-09T00:00:00.000-0500",
                    "endDate": "2016-09-09T00:00:00.000-0500"
                }
            },
            {
                "account": {
                    "accountNumber": "***********11111",
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
                            "name": "OBLIGATORIA"
                        }
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {
                        "email": "dfasfa@sadffsa.com"
                    },
                    "person": {
                        "name": "ASDGADGAS",
                        "lastName": "FDSADFADSF"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "ASDGADGAS",
                        "lastName": "FDSADFADSF"
                    }
                },
                "certificate": "1",
                "numberPolicy": "827W09001QERR",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "145",
                                "name": "NISSAN"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "4",
                                "name": "370Z"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2016"
                            }
                        },
                        "serialNumber": "DSAFASDFASD",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "4"
                            }
                        }
                    }
                },
                "idPolicy": "12262171",
                "status": "000",
                "validityPeriod": {
                    "startDate": "2018-02-16T00:00:00.000-0600",
                    "endDate": "2017-02-16T00:00:00.000-0600"
                }
            },
            {
                "account": {
                    "accountNumber": "***********11111",
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
                            "name": "OBLIGATORIA"
                        }
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {
                        "email": "dfasfa@sadffsa.com"
                    },
                    "person": {
                        "name": "ASDGADGAS",
                        "lastName": "FDSADFADSF"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "ASDGADGAS",
                        "lastName": "FDSADFADSF"
                    }
                },
                "certificate": "1",
                "numberPolicy": "827W09001Q",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "145",
                                "name": "NISSAN"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "4",
                                "name": "370Z"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2016"
                            }
                        },
                        "serialNumber": "DSAFASDFASD",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "4"
                            }
                        }
                    }
                },
                "idPolicy": "12672150",
                "status": "ACT",
                "validityPeriod": {
                    "startDate": "2017-06-01T00:00:00.000-0500",
                    "endDate": "2016-06-01T00:00:00.000-0500"
                }
            },
            {
                "account": {
                    "accountNumber": "***********11111",
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
                            "name": "OBLIGATORIA"
                        }
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {
                        "email": "test@test.com"
                    },
                    "person": {
                        "name": "RODRIGO",
                        "lastName": "MAKERS",
                        "mothersLastName": "RÍA"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "RODRIGO",
                        "lastName": "MAKERS",
                        "mothersLastName": "RÍA"
                    }
                },
                "certificate": "1",
                "numberPolicy": "837W09000N",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "3",
                                "name": "AUDI"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "23",
                                "name": "TT"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2007"
                            }
                        },
                        "serialNumber": "14123412513451342",
                        "engineNumber": "832468732328",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "5"
                            }
                        }
                    }
                },
                "idPolicy": "12406432",
                "status": "ACT",
                "validityPeriod": {
                    "startDate": "2018-03-14T00:00:00.000-0600",
                    "endDate": "2017-03-14T00:00:00.000-0600"
                }
            },
            {
                "account": {
                    "accountNumber": "***********11111",
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
                            "name": "OBLIGATORIA"
                        }
                    },
                    "serviceTypes": []
                },
                "isFleet": "0",
                "owner": {
                    "contactData": {
                        "email": "a@ids.com"
                    },
                    "person": {
                        "name": "TEST",
                        "lastName": "TEST",
                        "mothersLastName": "TEST"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "TEST",
                        "lastName": "TEST",
                        "mothersLastName": "TEST"
                    }
                },
                "certificate": "1",
                "numberPolicy": "837W09000E",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "145",
                                "name": "NISSAN"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "17",
                                "name": "MAXIMA"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2015"
                            }
                        },
                        "serialNumber": "29482398472398479",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "2"
                            }
                        }
                    }
                },
                "idPolicy": "12273724",
                "status": "ACT",
                "validityPeriod": {
                    "startDate": "2018-03-13T00:00:00.000-0600",
                    "endDate": "2017-03-13T00:00:00.000-0600"
                }
            }
        ]
    };
    const errorWithoutCertificate = {
        "messageInfo": {
            "messageId": "20207",
            "message": "08c1a835-8316-472a-ac07-6ded0d9b4496",
            "traceId": "POLIZA 716B01009L COLECTIVA - FALTA INGRESAR EL CERTIFICADO",
            "extraInfo": "WARNING-SEGUROS-BANCOMER"
        }
    };
    const resAccounts = {
        "carInsurancePolicy": [
            {
                "account": {
                    "accountNumber": "***************33661",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
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
                    "contactData": {
                        "email": "jose@gmail.com"
                    },
                    "person": {
                        "name": "LUCERO",
                        "lastName": "RAMOS",
                        "mothersLastName": "VAZQUEZ"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "LUCERO",
                        "lastName": "RAMOS",
                        "mothersLastName": "VAZQUEZ"
                    }
                },
                "certificate": "1",
                "numberPolicy": "837C912005",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "159",
                                "name": "SUBARU"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "4",
                                "name": "OUTBACK"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2010"
                            }
                        },
                        "plates": "AFG454",
                        "serialNumber": "6666666",
                        "engineNumber": "22222222",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "3",
                                "name": "TICO SUV 6 CIL 5 P 5 OCUP"
                            }
                        }
                    }
                },
                "idPolicy": "12269083",
                "status": "000",
                "validityPeriod": {
                    "startDate": "2017-10-15T00:00:00.000-0500",
                    "endDate": "2016-10-15T00:00:00.000-0500"
                }
            },
            {
                "account": {
                    "accountNumber": "***************33661",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
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
                        "name": "JOHN DOE1",
                        "lastName": "JOHNSON1",
                        "mothersLastName": "WILLIAMS1"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "JOHN DOE1",
                        "lastName": "JOHNSON1",
                        "mothersLastName": "WILLIAMS1"
                    }
                },
                "certificate": "1",
                "numberPolicy": "83707Y0001",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "145",
                                "name": "NISSAN"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "32",
                                "name": "TIIDA"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2011"
                            }
                        },
                        "plates": "218PBS1",
                        "serialNumber": "218PBSEJ117032017",
                        "engineNumber": "218PBSEJ117032017",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "2",
                                "name": "AN 4 CIL 4P 5 OCUP - 2011"
                            }
                        }
                    }
                },
                "idPolicy": "12407509",
                "status": "000",
                "validityPeriod": {
                    "startDate": "2018-03-17T00:00:00.000-0600",
                    "endDate": "2017-03-17T00:00:00.000-0600"
                }
            },
            {
                "account": {
                    "accountNumber": "***************33661",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
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
                        "name": "JOHN DOE10",
                        "lastName": "JOHNSON10",
                        "mothersLastName": "WILLIAMS10"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "JOHN DOE10",
                        "lastName": "JOHNSON10",
                        "mothersLastName": "WILLIAMS10"
                    }
                },
                "certificate": "1",
                "numberPolicy": "83707Y0010",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "14",
                                "name": "FORD"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "32",
                                "name": "FIESTA"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2013"
                            }
                        },
                        "plates": "310AAB1",
                        "serialNumber": "310AABEJ1017032017",
                        "engineNumber": "310AABEJ1017032017",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "9",
                                "name": "CK 4 CIL 5P 5 OCUP - 2013"
                            }
                        }
                    }
                },
                "idPolicy": "12407518",
                "status": "000",
                "validityPeriod": {
                    "startDate": "2018-03-17T00:00:00.000-0600",
                    "endDate": "2017-03-17T00:00:00.000-0600"
                }
            },
            {
                "account": {
                    "accountNumber": "***************33661",
                    "accountType": {
                        "catalogItemBase": {
                            "name": "CUENTA DE CHEQUE"
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
                        "name": "AGAPITA",
                        "lastName": "BELMAR",
                        "mothersLastName": "BELMAR"
                    },
                    "isInternal": "0",
                    "isVIP": "0"
                },
                "contractor": {
                    "contactData": {},
                    "person": {
                        "name": "AGAPITA",
                        "lastName": "BELMAR",
                        "mothersLastName": "BELMAR"
                    }
                },
                "certificate": "1",
                "numberPolicy": "8876001L4F",
                "vehicle": {
                    "vehicle": {
                        "brandCar": {
                            "catalogItemBase": {
                                "id": "14",
                                "name": "FORD"
                            }
                        },
                        "subBrand": {
                            "catalogItemBase": {
                                "id": "12",
                                "name": "EDGE"
                            }
                        },
                        "carModel": {
                            "catalogItemBase": {
                                "name": "2017"
                            }
                        },
                        "plates": "ASD159",
                        "serialNumber": "258963",
                        "engineNumber": "258963",
                        "versionCar": {
                            "catalogItemBase": {
                                "id": "13",
                                "name": "C AUT SUV 6 CIL 5P 5 OCUP"
                            }
                        }
                    }
                },
                "idPolicy": "12668070",
                "status": "ANU",
                "validityPeriod": {
                    "startDate": "2018-08-08T00:00:00.000-0500",
                    "endDate": "2017-08-08T00:00:00.000-0500"
                }
            }
        ]
    };

    let payload = request.body;
    response = prepareResponse(response);


    if (payload.hasOwnProperty('listAccount') && payload.listAccount.length > 0) {
        response.write(JSON.stringify(resAccounts));
    } else if (payload.customer.contactData.cellphone.telephoneNumber.length > 0) {
        response.write(JSON.stringify(resCellphone));
    } else if (payload.listCarInsurancePolicy[0].numberPolicy === POLICY_FLEET) {
        if (payload.listCarInsurancePolicy[0].certificate === "2") {
            response.write(JSON.stringify(resFormFleet));
        } else {
            response.write(JSON.stringify(errorWithoutCertificate));
        }
    } else if (payload.listCarInsurancePolicy[0].numberPolicy === POLICY_NOT_FLEET) {
        response.write(JSON.stringify(resFormNonFleet));
    } else {
        // TODO
    }
    response.end();
};

/*
* @description: Gets coverages list
* */

exports.listCoverages = (request, response) => {
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

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Asks for update policies information.
* */

exports.updateInfo = (request, response) => {
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

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Activates policies
* */

exports.mbfsta00 = (request, response) => {
    let policies = request.body.listInsurance;
    let activationList = [];

    for (const policy of policies) {
        activationList.push({
            "activationcode": "1VRNS17WK",
            "activationid": "5a4577020cf2b2327adac263",
            "insurancenumber": policy.insurancenumber,
            "certificate": policy.certificate
        });
    }

    const res = {
        "activationlist": activationList
    };

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Reports an assistance or accident to APX
* */

exports.mbfsta01 = (request, response) => {
    const res = {
        "reportid": "514501894555",
        "reportkey": "490288218",
        "accidentnumber": "514501894555"
    };

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Updates driver information
* */

exports.mbfsta02 = (request, response) => {
    const res = {
        "result": "OK"
    };

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Gets static information
* */

exports.mbfsta03 = (request, response) => {
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

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Gets policies by activation code
* */

exports.mbfsta04 = (request, response) => {
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

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description: Reports an assistance or accident to Call Center
* */

exports.requestEventAttention = (request, response) => {
    const res = {
        "replyStatus": "1",
        "message": "",
        "numberRequest": "10802"
    };

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};

/*
* @description:
* */

exports.financialDashboards = (request, response) => {
    const res = {
        "financialDashboard": [
            {
                "product": {
                    "savingAccount": {
                        "productBase": {
                            "branch": {
                                "bank": {
                                    "address": {
                                        "country": {}
                                    },
                                    "country": {}
                                },
                                "region": {
                                    "id": "MEXICO"
                                }
                            },
                            "currency": {
                                "code": "MXP"
                            },
                            "type": "AH",
                            "balance": {
                                "currentBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "grantedBalance": {
                                    "currency": {}
                                },
                                "totalBalance": {
                                    "currency": {}
                                },
                                "balance": {
                                    "currency": {}
                                },
                                "pendingBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "cuttingBalance": {
                                    "currency": {}
                                },
                                "balanceAtDate": {
                                    "currency": {}
                                },
                                "availableBalance": {
                                    "currency": {},
                                    "amount": 1000000000
                                },
                                "retentionBalance": {
                                    "currency": {},
                                    "amount": 0
                                }
                            },
                            "errorInfo": {},
                            "status": "M"
                        },
                        "id": "VZT9MG6GX8DGTS602AGR4RAKM9FS9KZAHACFXM21AHCJP5QHNFFM2RAP756Q7A3EK4EQ387Z1PN70QSBVQWBE3KT64PAJFDGFRNCQR8",
                        "accountNumber": "00740010001535205638",
                        "indicatorJointAccount": "C",
                        "isAditionalAccount": true,
                        "region": {}
                    }
                }
            },
            {
                "product": {
                    "savingAccount": {
                        "productBase": {
                            "branch": {
                                "bank": {
                                    "address": {
                                        "country": {}
                                    },
                                    "country": {}
                                },
                                "region": {
                                    "id": "MEXICO"
                                }
                            },
                            "currency": {
                                "code": "MXP"
                            },
                            "type": "AH",
                            "balance": {
                                "currentBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "grantedBalance": {
                                    "currency": {}
                                },
                                "totalBalance": {
                                    "currency": {}
                                },
                                "balance": {
                                    "currency": {}
                                },
                                "pendingBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "cuttingBalance": {
                                    "currency": {}
                                },
                                "balanceAtDate": {
                                    "currency": {}
                                },
                                "availableBalance": {
                                    "currency": {},
                                    "amount": 1000000000
                                },
                                "retentionBalance": {
                                    "currency": {},
                                    "amount": 0
                                }
                            },
                            "shaftAccountIndicator": "O",
                            "errorInfo": {},
                            "status": "N"
                        },
                        "id": "VZT9MG6GX8DGTS602AGR4RAKMBBT7F1QXCHMC41VVZQW1PMWR5A42RAP756Q7A3EK4EQ387Z1PN70QSBVQWBE3KT64PAJFDGFRNCQR8",
                        "accountNumber": "00743616001535133661",
                        "indicatorJointAccount": "I",
                        "isAditionalAccount": false,
                        "region": {}
                    }
                }
            },
            {
                "product": {
                    "checkAccount": {
                        "productBase": {
                            "branch": {
                                "bank": {
                                    "address": {
                                        "country": {}
                                    },
                                    "country": {}
                                },
                                "region": {
                                    "id": "MEXICO"
                                }
                            },
                            "currency": {
                                "code": "MXP"
                            },
                            "type": "CH",
                            "balance": {
                                "currentBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "grantedBalance": {
                                    "currency": {}
                                },
                                "totalBalance": {
                                    "currency": {}
                                },
                                "balance": {
                                    "currency": {}
                                },
                                "pendingBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "cuttingBalance": {
                                    "currency": {}
                                },
                                "balanceAtDate": {
                                    "currency": {}
                                },
                                "availableBalance": {
                                    "currency": {},
                                    "amount": 1000000000
                                },
                                "retentionBalance": {
                                    "currency": {},
                                    "amount": 0
                                }
                            },
                            "errorInfo": {},
                            "status": "N"
                        },
                        "id": "KTR8A3H37B1E1KDAVXV4HDF8WFWDZQNM8VA76JS2GF6W6JF18BRM2RAP756Q7A3EK4EQ387Z1PN70QSBVQWBE3KT64PAJFDGFRNCQR8",
                        "accountNumber": "00740010000434752201",
                        "indicatorJointAccount": "I",
                        "isAditionalAccount": false,
                        "region": {}
                    }
                }
            },
            {
                "product": {
                    "checkAccount": {
                        "productBase": {
                            "branch": {
                                "bank": {
                                    "address": {
                                        "country": {}
                                    },
                                    "country": {}
                                },
                                "region": {
                                    "id": "MEXICO"
                                }
                            },
                            "currency": {
                                "code": "MXP"
                            },
                            "type": "CH",
                            "balance": {
                                "currentBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "grantedBalance": {
                                    "currency": {}
                                },
                                "totalBalance": {
                                    "currency": {}
                                },
                                "balance": {
                                    "currency": {}
                                },
                                "pendingBalance": {
                                    "currency": {},
                                    "amount": 0
                                },
                                "cuttingBalance": {
                                    "currency": {}
                                },
                                "balanceAtDate": {
                                    "currency": {}
                                },
                                "availableBalance": {
                                    "currency": {},
                                    "amount": 1000000000
                                },
                                "retentionBalance": {
                                    "currency": {},
                                    "amount": 0
                                }
                            },
                            "errorInfo": {},
                            "status": "N"
                        },
                        "id": "KTR8A3H37B1E1KDAVXV4HDF8WDD0E9R9YVKDS2HDQBCGNT5JES242RAP756Q7A3EK4EQ387Z1PN70QSBVQWBE3KT64PAJFDGFRNCQR8",
                        "accountNumber": "00743616000434739167",
                        "indicatorJointAccount": "I",
                        "isAditionalAccount": false,
                        "region": {}
                    }
                }
            },
            {
                "product": {
                    "creditCard": {
                        "productBase": {
                            "branch": {
                                "bank": {
                                    "address": {
                                        "country": {}
                                    },
                                    "country": {}
                                },
                                "region": {
                                    "id": "MEXICO"
                                }
                            },
                            "currency": {},
                            "type": "TC",
                            "balance": {
                                "currentBalance": {
                                    "currency": {}
                                },
                                "grantedBalance": {
                                    "currency": {}
                                },
                                "totalBalance": {
                                    "currency": {}
                                },
                                "balance": {
                                    "currency": {}
                                },
                                "pendingBalance": {
                                    "currency": {}
                                },
                                "cuttingBalance": {
                                    "currency": {},
                                    "amount": 359213.06
                                },
                                "balanceAtDate": {
                                    "currency": {}
                                },
                                "availableBalance": {
                                    "currency": {},
                                    "amount": 362815.34
                                },
                                "retentionBalance": {
                                    "currency": {}
                                }
                            },
                            "errorInfo": {},
                            "status": "N"
                        },
                        "id": "Y692ZMT78JE6PFH3KCDDTX6C9B0GMF3ACGMF8R2SBRY8QW7XHMTNQ1XNZ45DY72ENTQ595ZC0NKDA",
                        "cardNumber": "4772143006897553",
                        "commission": {
                            "amount": {
                                "currency": {}
                            }
                        },
                        "minimumPayment": {
                            "currency": {},
                            "amount": 18348.84
                        }
                    }
                }
            }
        ],
        "indicators": {
            "agreementIndicator": "N",
            "cedIndicator": "N",
            "investmentFundsIndicator": "N",
            "patrimonialIndicator": "N",
            "creditIndicator": "N",
            "mortgageCreditIndicator": "N"
        },
        "measures": {
            "savingAccountsTotalNationalMoney": 2000000000,
            "savingAccountsTotalDollar": 0,
            "savingAccountsTotalEuro": 0,
            "checkAccountsTotalNationalMoney": 2000000000,
            "checkAccountsTotalDollar": 0,
            "checkAccountsTotalEuro": 0,
            "ccAccountsTotalNationalMoney": 0,
            "ccAccountsTotalDollar": 0,
            "ccAccountsTotalEuro": 0,
            "libretonAccountsTotalNationalMoney": 0,
            "libretonAccountsTotalDollar": 0,
            "libretonAccountsTotalEuro": 0,
            "investmentsTotalNationalMoney": 0,
            "investmentsTotalDollar": 0,
            "investmentsTotalEuro": 0,
            "creditCardsTotal": 362815.34,
            "prepaidCardstotalNationalMoney": 0,
            "prepaidCardstotalDollar": 0,
            "prepaidCardstotalEuro": 0,
            "agencyAccountsTotal": 0,
            "movilAccountsTotalNationalMoney": 0,
            "movilAccountsTotalDollar": 0,
            "movilAccountsTotalEuro": 0,
            "payRollTotalNationalMoney": 0,
            "payRollTotalDollar": 0,
            "payRollTotalEuro": 0
        },
        "heldAmount": {
            "savingAccountsTotalNationalMoney": 0,
            "savingAccountsTotalDollar": 0,
            "savingAccountsTotalEuro": 0,
            "checkAccountsTotalNationalMoney": 0,
            "checkAccountsTotalDollar": 0,
            "checkAccountsTotalEuro": 0,
            "ccAccountsTotalNationalMoney": 0,
            "ccAccountsTotalDollar": 0,
            "ccAccountsTotalEuro": 0,
            "libretonAccountsTotalNationalMoney": 0,
            "libretonAccountsTotalDollar": 0,
            "libretonAccountsTotalEuro": 0,
            "investmentsTotalNationalMoney": 0,
            "investmentsTotalDollar": 0,
            "investmentsTotalEuro": 0,
            "creditCardsTotal": 0,
            "prepaidCardstotalNationalMoney": 0,
            "prepaidCardstotalDollar": 0,
            "prepaidCardstotalEuro": 0,
            "agencyAccountsTotal": 0,
            "movilAccountsTotalNationalMoney": 0,
            "movilAccountsTotalDollar": 0,
            "movilAccountsTotalEuro": 0,
            "payRollTotalNationalMoney": 0,
            "payRollTotalDollar": 0,
            "payRollTotalEuro": 0
        },
        "pagination": {}
    };

    response = prepareResponse(response);

    response.write(JSON.stringify(res));

    response.end();
};
