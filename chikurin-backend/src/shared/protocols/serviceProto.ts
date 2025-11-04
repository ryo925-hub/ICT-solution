import { ServiceProto } from 'tsrpc-proto';
import { ReqAddChikurin, ResAddChikurin } from './Chikurin/PtlAddChikurin';
import { ReqDeleteChikurin, ResDeleteChikurin } from './Chikurin/PtlDeleteChikurin';
import { ReqGetChikurin, ResGetChikurin } from './Chikurin/PtlGetChikurin';
import { ReqGetChikurins, ResGetChikurins } from './Chikurin/PtlGetChikurins';
import { ReqGetOwnningChikurin, ResGetOwnningChikurin } from './Chikurin/PtlGetOwnningChikurin';
import { ReqAddEvent, ResAddEvent } from './Event/PtlAddEvent';
import { ReqDeleteEvent, ResDeleteEvent } from './Event/PtlDeleteEvent';
import { ReqGetEvent, ResGetEvent } from './Event/PtlGetEvent';
import { ReqGetEvents, ResGetEvents } from './Event/PtlGetEvents';
import { ReqGetEventsHosting, ResGetEventsHosting } from './Event/PtlGetEventsHosting';
import { ReqGetJointEvents, ResGetJointEvents } from './Event/PtlGetJointEvents';
import { ReqJoinEvent, ResJoinEvent } from './Event/PtlJoinEvent';
import { ReqUnjoinEvent, ResUnjoinEvent } from './Event/PtlUnjoinEvent';
import { ReqLogin, ResLogin } from './Login/PtlLogin';
import { ReqRegist, ResRegist } from './Login/PtlRegist';
import { MsgChat } from './MsgChat';
import { MsgTest } from './MsgTest';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqGetData, ResGetData } from './PtlGetData';
import { ReqUploadImageTest, ResUploadImageTest } from './PtlUploadImageTest';

export interface ServiceType {
    api: {
        "Chikurin/AddChikurin": {
            req: ReqAddChikurin,
            res: ResAddChikurin
        },
        "Chikurin/DeleteChikurin": {
            req: ReqDeleteChikurin,
            res: ResDeleteChikurin
        },
        "Chikurin/GetChikurin": {
            req: ReqGetChikurin,
            res: ResGetChikurin
        },
        "Chikurin/GetChikurins": {
            req: ReqGetChikurins,
            res: ResGetChikurins
        },
        "Chikurin/GetOwnningChikurin": {
            req: ReqGetOwnningChikurin,
            res: ResGetOwnningChikurin
        },
        "Event/AddEvent": {
            req: ReqAddEvent,
            res: ResAddEvent
        },
        "Event/DeleteEvent": {
            req: ReqDeleteEvent,
            res: ResDeleteEvent
        },
        "Event/GetEvent": {
            req: ReqGetEvent,
            res: ResGetEvent
        },
        "Event/GetEvents": {
            req: ReqGetEvents,
            res: ResGetEvents
        },
        "Event/GetEventsHosting": {
            req: ReqGetEventsHosting,
            res: ResGetEventsHosting
        },
        "Event/GetJointEvents": {
            req: ReqGetJointEvents,
            res: ResGetJointEvents
        },
        "Event/JoinEvent": {
            req: ReqJoinEvent,
            res: ResJoinEvent
        },
        "Event/UnjoinEvent": {
            req: ReqUnjoinEvent,
            res: ResUnjoinEvent
        },
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
        },
        "UploadImageTest": {
            req: ReqUploadImageTest,
            res: ResUploadImageTest
        }
    },
    msg: {
        "Chat": MsgChat,
        "Test": MsgTest
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 15,
    "services": [
        {
            "id": 10,
            "name": "Chikurin/AddChikurin",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 11,
            "name": "Chikurin/DeleteChikurin",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 12,
            "name": "Chikurin/GetChikurin",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 13,
            "name": "Chikurin/GetChikurins",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 14,
            "name": "Chikurin/GetOwnningChikurin",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 15,
            "name": "Event/AddEvent",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 16,
            "name": "Event/DeleteEvent",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 17,
            "name": "Event/GetEvent",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 6,
            "name": "Event/GetEvents",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 18,
            "name": "Event/GetEventsHosting",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 19,
            "name": "Event/GetJointEvents",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 7,
            "name": "Event/JoinEvent",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 8,
            "name": "Event/UnjoinEvent",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
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
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 1,
            "name": "GetData",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 9,
            "name": "UploadImageTest",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "Chikurin/PtlAddChikurin/ReqAddChikurin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../entities/chikurin/chikurin"
                        },
                        "keys": [
                            "_id",
                            "owner"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "../entities/chikurin/chikurin": {
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
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "owner",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
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
        "Chikurin/PtlAddChikurin/ResAddChikurin": {
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
                    "name": "chikurinID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "Chikurin/PtlDeleteChikurin/ReqDeleteChikurin": {
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
                    "name": "chikurinID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Chikurin/PtlDeleteChikurin/ResDeleteChikurin": {
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
        "Chikurin/PtlGetChikurin/ReqGetChikurin": {
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
                    "name": "chikurinID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Chikurin/PtlGetChikurin/ResGetChikurin": {
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
                    "name": "chikurin",
                    "type": {
                        "type": "Reference",
                        "target": "../entities/chikurin/chikurin"
                    }
                }
            ]
        },
        "Chikurin/PtlGetChikurins/ReqGetChikurins": {
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
        "Chikurin/PtlGetChikurins/ResGetChikurins": {
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
                    "name": "chikurins",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../entities/chikurin/chikurin"
                        }
                    }
                }
            ]
        },
        "Chikurin/PtlGetOwnningChikurin/ReqGetOwnningChikurin": {
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
        "Chikurin/PtlGetOwnningChikurin/ResGetOwnningChikurin": {
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
                    "name": "chikurins",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../entities/chikurin/chikurin"
                        }
                    }
                }
            ]
        },
        "Event/PtlAddEvent/ReqAddEvent": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../entities/event/event"
                        },
                        "keys": [
                            "_id",
                            "hoster"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "../entities/event/event": {
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
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "hoster",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Event/PtlAddEvent/ResAddEvent": {
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
                    "name": "eventID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Event/PtlDeleteEvent/ReqDeleteEvent": {
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
                    "name": "eventID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Event/PtlDeleteEvent/ResDeleteEvent": {
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
        "Event/PtlGetEvent/ReqGetEvent": {
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
                    "name": "eventID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Event/PtlGetEvent/ResGetEvent": {
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
                    "name": "event",
                    "type": {
                        "type": "Reference",
                        "target": "../entities/event/event"
                    }
                }
            ]
        },
        "Event/PtlGetEvents/ReqGetEvents": {
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
        "Event/PtlGetEvents/ResGetEvents": {
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
                    "name": "events",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../entities/event/event"
                        }
                    }
                }
            ]
        },
        "Event/PtlGetEventsHosting/ReqGetEventsHosting": {
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
        "Event/PtlGetEventsHosting/ResGetEventsHosting": {
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
                    "name": "events",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../entities/event/event"
                        }
                    }
                }
            ]
        },
        "Event/PtlGetJointEvents/ReqGetJointEvents": {
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
        "Event/PtlGetJointEvents/ResGetJointEvents": {
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
                    "name": "events",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../entities/event/event"
                        }
                    }
                }
            ]
        },
        "Event/PtlJoinEvent/ReqJoinEvent": {
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
                    "name": "eventID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Event/PtlJoinEvent/ResJoinEvent": {
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
        "Event/PtlUnjoinEvent/ReqUnjoinEvent": {
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
                    "name": "eventID",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "Event/PtlUnjoinEvent/ResUnjoinEvent": {
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
                },
                {
                    "id": 1,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../entities/user/users": {
            "type": "Interface",
            "properties": [
                {
                    "id": 9,
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
                },
                {
                    "id": 8,
                    "name": "gender",
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
                },
                {
                    "id": 7,
                    "name": "gender",
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
        },
        "PtlUploadImageTest/ReqUploadImageTest": {
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
                    "name": "otherString",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "otherNumber",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "images",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 2,
                                    "name": "fileName",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 0,
                                    "name": "fileData",
                                    "type": {
                                        "type": "Interface",
                                        "indexSignature": {
                                            "keyType": "Number",
                                            "type": {
                                                "type": "Number"
                                            }
                                        }
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "fileType",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "PtlUploadImageTest/ResUploadImageTest": {
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
                    "name": "imageUrls",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        }
    }
};