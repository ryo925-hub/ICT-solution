
# API

## 説明

-  `POST`
-  Header :
    - `Content-Type: application/json`

## 目次

- Chikurin
    - [Add chikurin](#/Chikurin/AddChikurin)
    - [Delete chikurin](#/Chikurin/DeleteChikurin)
    - [Get one Chikurin information by id](#/Chikurin/GetChikurin)
    - [Get chikurins](#/Chikurin/GetChikurins)
    - [Get ownning chikurin](#/Chikurin/GetOwnningChikurin)
    - [Update chikurin info](#/Chikurin/UpdateChikurin)
- Event
    - [Add event](#/Event/AddEvent)
    - [Delete one event by id](#/Event/DeleteEvent)
    - [Get one event by id](#/Event/GetEvent)
    - [Get events](#/Event/GetEvents)
    - [Get hosting events](#/Event/GetEventsHosting)
    - [Get joint events](#/Event/GetJointEvents)
    - [Join event](#/Event/JoinEvent)
    - [Unjoin event](#/Event/UnjoinEvent)
- Login
    - [GetUserData](#/Login/GetUserData)
    - [Login](#/Login/Login)
    - [Regist](#/Login/Regist)
    - [UpdateProfile](#/Login/UpdateProfile)
- item
    - [Add item(regist item)](#/item/AddItem)
    - [DeleteItem](#/item/DeleteItem)
    - [GetItems](#/item/GetItems)
    - [UpdateItem](#/item/UpdateItem)
- [test AddData](#/AddData)
- [test GetData](#/GetData)
- [This is a test request to upload an image.](#/UploadImageTest)

---

## Chikurin

### Add chikurin <a id="/Chikurin/AddChikurin"></a>

**url**
 `/Chikurin/AddChikurin`

**request**
```ts
interface ReqAddChikurin {
    images?: {
        fileName: string,
        fileData: { [key: number]: number },
        fileType: string
    }[],
    ownerName: string,
    postCode: string,
    address: string,
    area: number,
    bambooCount: number,
    category: string,
    else: string,
    __token?: string
}
```

**response**
```ts
interface ResAddChikurin {
    chikurinID: /*ObjectId*/ string
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Delete chikurin <a id="/Chikurin/DeleteChikurin"></a>

**url**
 `/Chikurin/DeleteChikurin`

**request**
```ts
interface ReqDeleteChikurin {
    chikurinID: /*ObjectId*/ string,
    __token?: string
}
```

**response**
```ts
interface ResDeleteChikurin {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get one Chikurin information by id <a id="/Chikurin/GetChikurin"></a>

**url**
 `/Chikurin/GetChikurin`

**request**
```ts
interface ReqGetChikurin {
    chikurinID: /*ObjectId*/ string,
    __token?: string
}
```

**response**
```ts
interface ResGetChikurin {
    chikurin: {
        _id: /*ObjectId*/ string,
        owner: /*ObjectId*/ string,
        ownerName: string,
        postCode: string,
        address: string,
        area: number,
        bambooCount: number,
        category: string,
        else: string,
        imgs: string[]
    }
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get chikurins <a id="/Chikurin/GetChikurins"></a>

**url**
 `/Chikurin/GetChikurins`

**request**
```ts
interface ReqGetChikurins {
    __token?: string
}
```

**response**
```ts
interface ResGetChikurins {
    chikurins: {
        _id: /*ObjectId*/ string,
        owner: /*ObjectId*/ string,
        ownerName: string,
        postCode: string,
        address: string,
        area: number,
        bambooCount: number,
        category: string,
        else: string,
        imgs: string[]
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get ownning chikurin <a id="/Chikurin/GetOwnningChikurin"></a>

**url**
 `/Chikurin/GetOwnningChikurin`

**request**
```ts
interface ReqGetOwnningChikurin {
    __token?: string
}
```

**response**
```ts
interface ResGetOwnningChikurin {
    chikurins: {
        _id: /*ObjectId*/ string,
        owner: /*ObjectId*/ string,
        ownerName: string,
        postCode: string,
        address: string,
        area: number,
        bambooCount: number,
        category: string,
        else: string,
        imgs: string[]
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Update chikurin info <a id="/Chikurin/UpdateChikurin"></a>

**url**
 `/Chikurin/UpdateChikurin`

**request**
```ts
interface ReqUpdateChikurin {
    images?: {
        fileName: string,
        fileData: { [key: number]: number },
        fileType: string
    }[],
    ownerName: string,
    postCode: string,
    address: string,
    area: number,
    bambooCount: number,
    category: string,
    else: string,
    __token?: string
}
```

**response**
```ts
interface ResUpdateChikurin {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## Event

### Add event <a id="/Event/AddEvent"></a>

**url**
 `/Event/AddEvent`

**request**
```ts
interface ReqAddEvent {
    __token?: string,
    name: string,
    category: string,
    area: string,
    price: number,
    img: string,
    description: string,
    startTime: /*datetime*/ string,
    endTime: /*datetime*/ string
}
```

**response**
```ts
interface ResAddEvent {
    eventID: /*ObjectId*/ string
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Delete one event by id <a id="/Event/DeleteEvent"></a>

**url**
 `/Event/DeleteEvent`

**request**
```ts
interface ReqDeleteEvent {
    eventID: /*ObjectId*/ string,
    __token?: string
}
```

**response**
```ts
interface ResDeleteEvent {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get one event by id <a id="/Event/GetEvent"></a>

**url**
 `/Event/GetEvent`

**request**
```ts
interface ReqGetEvent {
    eventID: /*ObjectId*/ string,
    __token?: string
}
```

**response**
```ts
interface ResGetEvent {
    event: {
        _id: /*ObjectId*/ string,
        name: string,
        category: string,
        area: string,
        price: number,
        img: string,
        description: string,
        startTime: /*datetime*/ string,
        endTime: /*datetime*/ string,
        owner: /*ObjectId*/ string
    }
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get events <a id="/Event/GetEvents"></a>

**url**
 `/Event/GetEvents`

**request**
```ts
interface ReqGetEvents {
    __token?: string
}
```

**response**
```ts
interface ResGetEvents {
    events: {
        _id: /*ObjectId*/ string,
        name: string,
        category: string,
        area: string,
        price: number,
        img: string,
        description: string,
        startTime: /*datetime*/ string,
        endTime: /*datetime*/ string,
        owner: /*ObjectId*/ string
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get hosting events <a id="/Event/GetEventsHosting"></a>

**url**
 `/Event/GetEventsHosting`

**request**
```ts
interface ReqGetEventsHosting {
    __token?: string
}
```

**response**
```ts
interface ResGetEventsHosting {
    events: {
        _id: /*ObjectId*/ string,
        name: string,
        category: string,
        area: string,
        price: number,
        img: string,
        description: string,
        startTime: /*datetime*/ string,
        endTime: /*datetime*/ string,
        owner: /*ObjectId*/ string
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Get joint events <a id="/Event/GetJointEvents"></a>

**url**
 `/Event/GetJointEvents`

**request**
```ts
interface ReqGetJointEvents {
    __token?: string
}
```

**response**
```ts
interface ResGetJointEvents {
    events: {
        _id: /*ObjectId*/ string,
        name: string,
        category: string,
        area: string,
        price: number,
        img: string,
        description: string,
        startTime: /*datetime*/ string,
        endTime: /*datetime*/ string,
        owner: /*ObjectId*/ string
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Join event <a id="/Event/JoinEvent"></a>

**url**
 `/Event/JoinEvent`

**request**
```ts
interface ReqJoinEvent {
    eventID: /*ObjectId*/ string,
    __token?: string
}
```

**response**
```ts
interface ResJoinEvent {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Unjoin event <a id="/Event/UnjoinEvent"></a>

**url**
 `/Event/UnjoinEvent`

**request**
```ts
interface ReqUnjoinEvent {
    eventID: /*ObjectId*/ string,
    __token?: string
}
```

**response**
```ts
interface ResUnjoinEvent {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## Login

### GetUserData <a id="/Login/GetUserData"></a>

**url**
 `/Login/GetUserData`

**request**
```ts
interface ReqGetUserData {
    __token?: string
}
```

**response**
```ts
interface ResGetUserData {
    user: {
        _id: /*ObjectId*/ string,
        firstName1: string,
        lastName1: string,
        firstName2: string,
        lastName2: string,
        birthday: /*datetime*/ string,
        mailAddress: string,
        password: string,
        gender: string
    }
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### Login <a id="/Login/Login"></a>

**url**
 `/Login/Login`

**request**
```ts
interface ReqLogin {
    loginID: string,
    password: string,
    __token?: string
}
```

**response**
```ts
interface ResLogin {
    user: {
        _id: /*ObjectId*/ string,
        firstName1: string,
        lastName1: string,
        firstName2: string,
        lastName2: string,
        birthday: /*datetime*/ string,
        mailAddress: string,
        password: string,
        gender: string
    },
    token: string
}
```

---

### Regist <a id="/Login/Regist"></a>

**url**
 `/Login/Regist`

**request**
```ts
interface ReqRegist {
    firstName1: string,
    lastName1: string,
    firstName2: string,
    lastName2: string,
    birthday: /*datetime*/ string,
    mailAddress: string,
    password: string,
    gender: string,
    __token?: string
}
```

**response**
```ts
interface ResRegist {

}
```

---

### UpdateProfile <a id="/Login/UpdateProfile"></a>

**url**
 `/Login/UpdateProfile`

**request**
```ts
interface ReqUpdateProfile {
    firstName1: string,
    lastName1: string,
    firstName2: string,
    lastName2: string,
    birthday: /*datetime*/ string,
    mailAddress: string,
    password: string,
    gender: string,
    __token?: string
}
```

**response**
```ts
interface ResUpdateProfile {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## item

### Add item(regist item) <a id="/item/AddItem"></a>

**url**
 `/item/AddItem`

**request**
```ts
interface ReqAddItem {
    __token?: string,
    name: string,
    owner: /*ObjectId*/ string
}
```

**response**
```ts
interface ResAddItem {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### DeleteItem <a id="/item/DeleteItem"></a>

**url**
 `/item/DeleteItem`

**request**
```ts
interface ReqDeleteItem {
    __token?: string
}
```

**response**
```ts
interface ResDeleteItem {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

### GetItems <a id="/item/GetItems"></a>

**url**
 `/item/GetItems`

**request**
```ts
interface ReqGetItems {
    __token?: string
}
```

**response**
```ts
interface ResGetItems {

}
```

---

### UpdateItem <a id="/item/UpdateItem"></a>

**url**
 `/item/UpdateItem`

**request**
```ts
interface ReqUpdateItem {
    __token?: string
}
```

**response**
```ts
interface ResUpdateItem {

}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## test AddData <a id="/AddData"></a>

This is a test interface for AddData

**url**
 `/AddData`

**request**
```ts
interface ReqAddData {
    content: string
}
```

**response**
```ts
interface ResAddData {
    time: /*datetime*/ string
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## test GetData <a id="/GetData"></a>

**url**
 `/GetData`

**request**
```ts
interface ReqGetData {
    __token?: string
}
```

**response**
```ts
interface ResGetData {
    data: {
        content: string,
        time: /*datetime*/ string
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## This is a test request to upload an image. <a id="/UploadImageTest"></a>

**url**
 `/UploadImageTest`

**request**
```ts
interface ReqUploadImageTest {
    otherString: string,
    otherNumber: number,
    images: {
        fileName: string,
        fileData: { [key: number]: number },
        fileType: string
    }[],
    __token?: string
}
```

**response**
```ts
interface ResUploadImageTest {
    imageUrls: string[]
}
```

