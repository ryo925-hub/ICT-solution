
# API

## 説明

-  `POST`
-  Header :
    - `Content-Type: application/json`

## 目次

- Login
    - [Login](#/Login/Login)
    - [Regist](#/Login/Regist)
- [test AddData](#/AddData)
- [test GetData](#/GetData)

---

## Login

### Login <a id="/Login/Login"></a>

**url**
 `/Login/Login`

**request**
```ts
interface ReqLogin {
    loginID: string,
    password: string
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
        password: string
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
    password: string
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

---

## test GetData <a id="/GetData"></a>

**url**
 `/GetData`

**request**
```ts
interface ReqGetData {

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

