import { ServiceProto } from 'tsrpc-proto';
import { ReqLogin, ResLogin } from './Login/PtlLogin';
import { ReqRegist, ResRegist } from './Login/PtlRegist';
import { MsgChat } from './MsgChat';
import { MsgTest } from './MsgTest';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqGetData, ResGetData } from './PtlGetData';

export interface ServiceType {
    api: {
        "Login/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "Login/Regist": {
            req: ReqRegist,
            res: ResRegist
        },
        "AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        }
    },
    msg: {
        "Chat": MsgChat,
        "Test": MsgTest
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 4,
            "name": "Login/Login",
            "type": "api",
            "conf": {}
        },
        {
            "id": 5,
            "name": "Login/Regist",
            "type": "api",
            "conf": {}
        },
        {
            "id": 2,
            "name": "Chat",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "Test",
            "type": "msg"
        },
        {
            "id": 0,
            "name": "AddData",
            "type": "api"
        },
        {
            "id": 1,
            "name": "GetData",
            "type": "api"
        }
    ],
    "types": {
        "Login/PtlLogin/ReqLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "loginID",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "Login/PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../entities/user/users"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "../entities/user/users": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "firstName1",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "lastName1",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "firstName2",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "lastName2",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "birthday",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 6,
                    "name": "mailAddress",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "Login/PtlRegist/ReqRegist": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "firstName1",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "lastName1",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "firstName2",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "lastName2",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "birthday",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 5,
                    "name": "mailAddress",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "Login/PtlRegist/ResRegist": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "MsgTest/MsgTest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "age",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "gender",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "Male"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "Female"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlGetData/ReqGetData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
};