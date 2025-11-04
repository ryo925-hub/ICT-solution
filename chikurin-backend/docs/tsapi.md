
# API

## 説明

-  `POST`
-  Header :
    - `Content-Type: application/json`

## 目次

- Event
    - [Get events information](#/Event/GetEvents)
    - [Join event](#/Event/JoinEvent)
    - [Request to unjoin an event](#/Event/UnjoinEvent)
- Login
    - [Login](#/Login/Login)
    - [Regist](#/Login/Regist)
- [test AddData](#/AddData)
- [test GetData](#/GetData)
- [This is a test request to upload an image.](#/UploadImageTest)

---

## Event

### Get events information <a id="/Event/GetEvents"></a>

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
    events: { _id: /*ObjectId*/ string }[]
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

### Request to unjoin an event <a id="/Event/UnjoinEvent"></a>

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

