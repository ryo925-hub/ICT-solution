
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [增加数据](#/AddData)
- [获取数据](#/GetData)

---

## 增加数据 <a id="/AddData"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddData`

**请求**
```ts
interface ReqAddData {
    /** 要增加的消息内容 */
    content: string
}
```

**响应**
```ts
interface ResAddData {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 获取数据 <a id="/GetData"></a>

**路径**
- POST `/GetData`

**请求**
```ts
interface ReqGetData {

}
```

**响应**
```ts
interface ResGetData {
    /** 返回所有数据列表 */
    data: {
        /** 消息内容 */
        content: string,
        /** 创建时间 */
        time: /*datetime*/ string
    }[]
}
```

