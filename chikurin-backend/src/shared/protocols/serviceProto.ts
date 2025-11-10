import { ServiceProto } from 'tsrpc-proto';
import { ReqAddChikurin, ResAddChikurin } from './Chikurin/PtlAddChikurin';
import { ReqDeleteChikurin, ResDeleteChikurin } from './Chikurin/PtlDeleteChikurin';
import { ReqGetChikurin, ResGetChikurin } from './Chikurin/PtlGetChikurin';
import { ReqGetChikurins, ResGetChikurins } from './Chikurin/PtlGetChikurins';
import { ReqGetOwnningChikurin, ResGetOwnningChikurin } from './Chikurin/PtlGetOwnningChikurin';
import { ReqUpdateChikurin, ResUpdateChikurin } from './Chikurin/PtlUpdateChikurin';
import { ReqAddEvent, ResAddEvent } from './Event/PtlAddEvent';
import { ReqDeleteEvent, ResDeleteEvent } from './Event/PtlDeleteEvent';
import { ReqGetEvent, ResGetEvent } from './Event/PtlGetEvent';
import { ReqGetEvents, ResGetEvents } from './Event/PtlGetEvents';
import { ReqGetEventsHosting, ResGetEventsHosting } from './Event/PtlGetEventsHosting';
import { ReqGetJointEvents, ResGetJointEvents } from './Event/PtlGetJointEvents';
import { ReqJoinEvent, ResJoinEvent } from './Event/PtlJoinEvent';
import { ReqUnjoinEvent, ResUnjoinEvent } from './Event/PtlUnjoinEvent';
import { ReqAddItem, ResAddItem } from './item/PtlAddItem';
import { ReqDeleteItem, ResDeleteItem } from './item/PtlDeleteItem';
import { ReqGetItems, ResGetItems } from './item/PtlGetItems';
import { ReqUpdateItem, ResUpdateItem } from './item/PtlUpdateItem';
import { ReqGetUserData, ResGetUserData } from './Login/PtlGetUserData';
import { ReqLogin, ResLogin } from './Login/PtlLogin';
import { ReqRegist, ResRegist } from './Login/PtlRegist';
import { ReqUpdateProfile, ResUpdateProfile } from './Login/PtlUpdateProfile';
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
        "Chikurin/UpdateChikurin": {
            req: ReqUpdateChikurin,
            res: ResUpdateChikurin
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
        "item/AddItem": {
            req: ReqAddItem,
            res: ResAddItem
        },
        "item/DeleteItem": {
            req: ReqDeleteItem,
            res: ResDeleteItem
        },
        "item/GetItems": {
            req: ReqGetItems,
            res: ResGetItems
        },
        "item/UpdateItem": {
            req: ReqUpdateItem,
            res: ResUpdateItem
        },
        "Login/GetUserData": {
            req: ReqGetUserData,
            res: ResGetUserData
        },
        "Login/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "Login/Regist": {
            req: ReqRegist,
            res: ResRegist
        },
        "Login/UpdateProfile": {
            req: ReqUpdateProfile,
            res: ResUpdateProfile
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
    "version": 21,
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
            "id": 20,
            "name": "Chikurin/UpdateChikurin",
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
            "id": 21,
            "name": "item/AddItem",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 22,
            "name": "item/DeleteItem",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 23,
            "name": "item/GetItems",
            "type": "api",
            "conf": {}
        },
        {
            "id": 24,
            "name": "item/UpdateItem",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 26,
            "name": "Login/GetUserData",
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
            "id": 25,
            "name": "Login/UpdateProfile",
            "type": "api",
            "conf": {
                "needLogin": true
            }
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
                    "id": 2,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../entities/chikurin/chikurin"
                        },
                        "keys": [
                            "_id",
                            "owner",
                            "imgs"
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
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "images",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "fileName",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
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
                                    "id": 2,
                                    "name": "fileType",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    },
                    "optional": true
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
                    "id": 2,
                    "name": "owner",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 3,
                    "name": "ownerName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "postCode",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "address",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "area",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "bambooCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "category",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "else",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 10,
                    "name": "imgs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
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
        "Chikurin/PtlUpdateChikurin/ReqUpdateChikurin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 2,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../entities/chikurin/chikurin"
                        },
                        "keys": [
                            "_id",
                            "owner",
                            "imgs"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "images",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "fileName",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
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
                                    "id": 2,
                                    "name": "fileType",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    },
                    "optional": true
                }
            ]
        },
        "Chikurin/PtlUpdateChikurin/ResUpdateChikurin": {
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
                    "id": 3,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../entities/event/event"
                        },
                        "keys": [
                            "_id",
                            "owner",
                            "img"
                        ],
                        "type": "Omit"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "images",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "fileName",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
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
                                    "id": 2,
                                    "name": "fileType",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    },
                    "optional": true
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
                    "id": 3,
                    "name": "category",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "area",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "price",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "img",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "description",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 10,
                    "name": "startTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 11,
                    "name": "endTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 9,
                    "name": "owner",
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
        "item/PtlAddItem/ReqAddItem": {
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
                            "target": "../entities/item/item"
                        },
                        "keys": [
                            "_id"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "../entities/item/item": {
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
        "item/PtlAddItem/ResAddItem": {
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
        "item/PtlDeleteItem/ReqDeleteItem": {
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
        "item/PtlDeleteItem/ResDeleteItem": {
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
        "item/PtlGetItems/ReqGetItems": {
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
        "item/PtlGetItems/ResGetItems": {
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
        "item/PtlUpdateItem/ReqUpdateItem": {
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
        "item/PtlUpdateItem/ResUpdateItem": {
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
        "Login/PtlGetUserData/ReqGetUserData": {
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
        "Login/PtlGetUserData/ResGetUserData": {
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
        "Login/PtlUpdateProfile/ReqUpdateProfile": {
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
        "Login/PtlUpdateProfile/ResUpdateProfile": {
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